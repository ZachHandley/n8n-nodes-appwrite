import {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeApiError,
	NodeExecutionWithMetadata,
} from "n8n-workflow";

import { documentOperations, documentFields } from "./DocumentDescription";
import { storageOperations, storageFields } from "./StorageDescription";
import { functionOperations, functionFields } from "./FunctionDescription";
import { usersOperations, usersFields } from "./UsersDescription";
import { messagingOperations, messagingFields } from "./MessagingDescription";
import { avatarsOperations, avatarsFields } from "./AvatarsDescription";
import { localeOperations, localeFields } from "./LocaleDescription";
import { tokensOperations, tokensFields } from "./TokensDescription";
import {
	convertStringToQuery,
	createAppwriteDocument,
	createAppwriteStorageBucket,
	createAppwriteStorageFile,
	createAppwriteUser,
	deleteAppwriteDocument,
	deleteAppwriteStorageBucket,
	deleteAppwriteStorageFile,
	deleteAppwriteUser,
	deleteAppwriteUserSession,
	deleteAppwriteUserSessions,
	getAppwriteClient,
	getAppwriteDocument,
	getAppwriteFunction,
	getAppwriteStorageFile,
	getAppwriteUser,
	getAppwriteUserPrefs,
	listAppwriteBuckets,
	listAppwriteDocuments,
	listAppwriteFunctions,
	listAppwriteStorage,
	listAppwriteUserIdentities,
	listAppwriteUserLogs,
	listAppwriteUserMemberships,
	listAppwriteUserSessions,
	listAppwriteUsers,
	runAppwriteFunction,
	updateAppwriteDocument,
	updateAppwriteUser,
	// Messaging functions
	createMessagingProvider,
	createApnsProvider,
	createFcmProvider,
	createMailgunProvider,
	createMsg91Provider,
	createSendgridProvider,
	createSmtpProvider,
	createTelesignProvider,
	createTextmagicProvider,
	createTwilioProvider,
	createVonageProvider,
	getMessagingProvider,
	listMessagingProviders,
	updateMessagingProvider,
	updateApnsProvider,
	updateFcmProvider,
	updateMailgunProvider,
	updateMsg91Provider,
	updateSendgridProvider,
	updateSmtpProvider,
	updateTelesignProvider,
	updateTextmagicProvider,
	updateTwilioProvider,
	updateVonageProvider,
	deleteMessagingProvider,
	listMessagingProviderLogs,
	createMessagingTopic,
	getMessagingTopic,
	listMessagingTopics,
	updateMessagingTopic,
	deleteMessagingTopic,
	listMessagingTopicLogs,
	createMessagingSubscriber,
	getMessagingSubscriber,
	listMessagingSubscribers,
	deleteMessagingSubscriber,
	listMessagingSubscriberLogs,
	createMessagingEmail,
	createMessagingPush,
	createMessagingSms,
	getMessagingMessage,
	listMessagingMessages,
	updateMessagingEmail,
	updateMessagingPush,
	updateMessagingSms,
	listMessagingMessageLogs,
	listMessagingTargets,
	// Avatars functions
	getAvatarsBrowserFavicon,
	getAvatarsCreditCardIcon,
	getAvatarsFavicon,
	getAvatarsFlag,
	getAvatarsImage,
	getAvatarsInitials,
	getAvatarsQR,
	// Locale functions
	getLocaleUserLocale,
	getLocaleCodes,
	getLocaleContinents,
	getLocaleCountries,
	getLocaleEUCountries,
	getLocaleCountriesPhones,
	getLocaleCurrencies,
	getLocaleLanguages,
	// Tokens functions
	createFileToken,
	deleteToken,
	getToken,
	listTokens,
	updateToken,
} from "./AppwriteFunctions";
import { Browser, CreditCard, Flag, ID } from "node-appwrite";

export class ZAppwrite implements INodeType {
	description: INodeTypeDescription = {
		displayName: "ZAppwrite",
		name: "zAppwrite",
		icon: "file:Appwrite.svg",
		group: ["transform"],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description: "Use Appwrite's API from inside N8N, updated by @ZachHandley",
		defaults: {
			name: "ZAppwrite",
		},
		// @ts-expect-error
		inputs: ["main"],
		// @ts-expect-error
		outputs: ["main"],
		credentials: [
			{
				name: "zAppwriteApi",
				required: true,
			},
		],
		properties: [
			{
				displayName: "Resource",
				name: "resource",
				noDataExpression: true,
				type: "options",
				options: [
					{
						name: "Avatar",
						value: "avatars",
					},
					{
						name: "Document",
						value: "document",
					},
					{
						name: "Function",
						value: "function",
					},
					{
						name: "Locale",
						value: "locale",
					},
					{
						name: "Messaging",
						value: "messaging",
					},
					{
						name: "Storage",
						value: "storage",
					},
					{
						name: 'Token',
						value: "tokens",
					},
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
						name: "Users",
						value: "users",
					},
				],
				default: "document",
				description: "Resource or operation to utilize",
			},
			...avatarsOperations,
			...avatarsFields,
			...documentOperations,
			...documentFields,
			...functionOperations,
			...functionFields,
			...localeOperations,
			...localeFields,
			...messagingOperations,
			...messagingFields,
			...storageOperations,
			...storageFields,
			...tokensOperations,
			...tokensFields,
			...usersOperations,
			...usersFields,
		],
	};

	// The function below is responsible for actually doing whatever this node
	// is supposed to do.
	// You can make async calls and use `await`.
	async execute(
		this: IExecuteFunctions,
	): Promise<INodeExecutionData[][] | NodeExecutionWithMetadata[][] | null> {
		const returnData: IDataObject[] = [];

		let responseData;
		const resource = this.getNodeParameter("resource", 0) as string;
		const operation = this.getNodeParameter("operation", 0) as string;
		const { url, projectId, apiKey } = (await this.getCredentials(
			"zAppwriteApi",
		)) as { url: string; projectId: string; apiKey: string };
		const appwriteClient = await getAppwriteClient(url, projectId, apiKey);
		try {
			if (resource === "document") {
				// get databaseId input
				const databaseId = this.getNodeParameter("databaseId", 0) as string;
				const collectionId = this.getNodeParameter("collectionId", 0) as string;

				if (operation === "createDoc") {
					// get collectionID input
					const docId = this.getNodeParameter("documentId", 0) as string;
					let body: IDataObject;
					let documentId: string;
					if (docId.includes("unique")) {
						documentId = ID.unique();
						body = this.getNodeParameter("body", 0) as IDataObject;
					} else {
						documentId = docId;
						body = this.getNodeParameter("body", 0) as IDataObject;
					}
					console.log("Body to send: ", body);

					responseData = await createAppwriteDocument(
						appwriteClient,
						databaseId,
						collectionId,
						documentId,
						body,
					);
					returnData.push(responseData);
				}

				if (operation === "getAllDocs") {
					// get additional fields input
					const optionalFields = this.getNodeParameter(
						"additionalFields",
						0,
					) as IDataObject;
					const queriesToSend: string[] = [];
					if (optionalFields.queries) {
						const queriesData = optionalFields.queries as {
							queriesData: {
								query: string;
								index: string;
								value1?: string;
								value2?: string;
							}[];
						};
						const queries = queriesData.queriesData;
						if (queries) {
							for (const query of queries) {
								const queryString = convertStringToQuery(
									`${query.query}`,
									`${query.index}`,
									query.value1 && query.value1.length > 0
										? (query.value1 as string)
										: undefined,
									query.value2 && query.value2.length > 0
										? (query.value2 as string)
										: undefined,
								);
								if (queryString && queryString.length > 0) {
									queriesToSend.push(queryString);
								}
							}
						}
					}

					responseData = await listAppwriteDocuments(
						appwriteClient,
						databaseId,
						collectionId,
						queriesToSend,
					);
					returnData.push(responseData);
				}

				if (operation === "getDoc") {
					// get documentID input
					const documentId = this.getNodeParameter("documentId", 0) as string;
					const optionalFields = this.getNodeParameter(
						"additionalFields",
						0,
					) as IDataObject;
					const queriesToSend: string[] = [];

					if (optionalFields.options) {
						const queries = optionalFields.query as IDataObject[];
						console.log(
							"Inside optional fields, options value: ",
							optionalFields.options,
						);
						console.log("Queries found: ", queries);
						if (queries) {
							for (const query of queries) {
								queriesToSend.push(
									convertStringToQuery(
										`${query.index}`,
										query.value as string,
										(query.value2 as string) ?? undefined,
									),
								);
							}
						}
					}
					responseData = await getAppwriteDocument(
						appwriteClient,
						databaseId,
						collectionId,
						documentId,
						queriesToSend,
					);
					returnData.push(responseData);
				}

				if (operation === "updateDoc") {
					// get documentID input
					const documentId = this.getNodeParameter("documentId", 0) as string;

					const body = this.getNodeParameter("body", 0) as IDataObject;

					responseData = await updateAppwriteDocument(
						appwriteClient,
						databaseId,
						collectionId,
						documentId,
						body,
					);
					returnData.push(responseData);
				}

				if (operation === "deleteDoc") {
					// get documentID input
					const documentId = this.getNodeParameter("documentId", 0) as string;

					responseData = await deleteAppwriteDocument(
						appwriteClient,
						databaseId,
						collectionId,
						documentId,
					);
					returnData.push({ response: responseData });
				}
			} else if (resource === "function") {
				if (operation === "listFunctions") {
					responseData = await listAppwriteFunctions(appwriteClient);
					returnData.push(responseData);
				} else if (operation === "getFunction") {
					const functionId = this.getNodeParameter("functionId", 0) as string;
					responseData = await getAppwriteFunction(appwriteClient, functionId);
					returnData.push(responseData);
				} else if (operation === "executeFunction") {
					const functionId = this.getNodeParameter("functionId", 0) as string;
					const data = this.getNodeParameter("data", 0) as IDataObject;
					const additionalFields = this.getNodeParameter("additionalFields", 0) as IDataObject;
					
					responseData = await runAppwriteFunction(
						appwriteClient,
						functionId,
						data,
						additionalFields.async as boolean,
						additionalFields.xpath as string,
						additionalFields.method as string,
						additionalFields.headers as object,
						additionalFields.scheduledAt as string,
					);
					returnData.push(responseData);
				}
			} else if (resource === "storage") {
				if (operation === "listBuckets") {
					responseData = await listAppwriteBuckets(appwriteClient);
					returnData.push(responseData);
				} else if (operation === "listFiles") {
					const bucketId = this.getNodeParameter("bucketId", 0) as string;
					responseData = await listAppwriteStorage(appwriteClient, bucketId);
					returnData.push(responseData);
				} else if (operation === "getFile") {
					const bucketId = this.getNodeParameter("bucketId", 0) as string;
					const fileId = this.getNodeParameter("fileId", 0) as string;
					responseData = await getAppwriteStorageFile(
						appwriteClient,
						bucketId,
						fileId,
					);
					returnData.push(responseData);
				} else if (operation === "createBucket") {
					const name = this.getNodeParameter("name", 0) as string;
					const permissions = this.getNodeParameter("permissions", 0) as string;
					const fileSecurity = this.getNodeParameter(
						"fileSecurity",
						0,
					) as boolean;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					const maximumFileSize = this.getNodeParameter(
						"maximumFileSize",
						0,
					) as number;
					const allowedFileExtensions = this.getNodeParameter(
						"allowedFileExtensions",
						0,
					) as string;
					const compression = this.getNodeParameter("compression", 0) as string;
					const encryption = this.getNodeParameter("encryption", 0) as boolean;
					const antivirus = this.getNodeParameter("antivirus", 0) as boolean;
					responseData = await createAppwriteStorageBucket(
						appwriteClient,
						ID.unique(),
						name,
						permissions
							.split(",")
							.map((permission: string) => permission.trim()),
						fileSecurity,
						enabled,
						maximumFileSize,
						allowedFileExtensions
							.split(",")
							.map((fileExtension: string) => fileExtension.trim()),
						compression,
						encryption,
						antivirus,
					);
					returnData.push(responseData);
				} else if (operation === "createFile") {
					const bucketId = this.getNodeParameter("bucketId", 0) as string;
					const file = this.getNodeParameter("file", 0) as Blob | File | Buffer;
					const fileName = this.getNodeParameter("fileName", 0) as string;
					const mimeType = this.getNodeParameter("mimeType", 0) as string;
					const fileObject = new File([file], fileName, { type: mimeType });
					responseData = await createAppwriteStorageFile(
						appwriteClient,
						bucketId,
						fileObject,
						fileName,
						mimeType.split(",").map((mimeType: string) => mimeType.trim()),
					);
					returnData.push(responseData);
				} else if (operation === "deleteBucket") {
					const bucketId = this.getNodeParameter("bucketId", 0) as string;
					responseData = await deleteAppwriteStorageBucket(
						appwriteClient,
						bucketId,
					);
					returnData.push({ success: responseData });
				} else if (operation === "deleteFile") {
					const bucketId = this.getNodeParameter("bucketId", 0) as string;
					const fileId = this.getNodeParameter("fileId", 0) as string;
					responseData = await deleteAppwriteStorageFile(
						appwriteClient,
						bucketId,
						fileId,
					);
					returnData.push({ success: responseData });
				}
			} else if (resource === "users") {
				if (operation === "createUser") {
					let userId = this.getNodeParameter("userIdOptional", 0) as string;
					if (!userId) {
						userId = ID.unique();
					}
					const email = this.getNodeParameter("email", 0) as string;
					const verifyEmail = this.getNodeParameter(
						"verifyEmail",
						0,
					) as boolean;
					const name = this.getNodeParameter("name", 0) as string;
					const phone = this.getNodeParameter("phone", 0) as string;
					const verifyPhone = this.getNodeParameter(
						"verifyPhone",
						0,
					) as boolean;
					const password = this.getNodeParameter("password", 0) as string;
					responseData = await createAppwriteUser(
						appwriteClient,
						userId,
						email,
						password,
						phone,
						name,
					);
					if (verifyEmail || verifyPhone) {
						if (verifyEmail && verifyPhone) {
							await updateAppwriteUser(
								appwriteClient,
								responseData.$id,
								undefined,
								verifyEmail,
								undefined,
								undefined,
								undefined,
								undefined,
								undefined,
								verifyPhone,
							);
						} else if (verifyEmail) {
							await updateAppwriteUser(
								appwriteClient,
								responseData.$id,
								undefined,
								verifyEmail,
							);
						} else if (verifyPhone) {
							await updateAppwriteUser(
								appwriteClient,
								responseData.$id,
								undefined,
								undefined,
								undefined,
								undefined,
								undefined,
								undefined,
								undefined,
								verifyPhone,
							);
						}
					}
					returnData.push(responseData);
				} else if (operation === "deleteUser") {
					const userId = this.getNodeParameter("userId", 0) as string;
					responseData = await deleteAppwriteUser(appwriteClient, userId);
					returnData.push({ success: responseData });
				} else if (operation === "deleteUserSession") {
					const userId = this.getNodeParameter("userId", 0) as string;
					const sessionId = this.getNodeParameter("sessionId", 0) as string;
					responseData = await deleteAppwriteUserSession(
						appwriteClient,
						userId,
						sessionId,
					);
					returnData.push({ success: responseData });
				} else if (operation === "deleteUserSessions") {
					const userId = this.getNodeParameter("userId", 0) as string;
					responseData = await deleteAppwriteUserSessions(
						appwriteClient,
						userId,
					);
					returnData.push({ success: responseData });
				} else if (operation === "getUser") {
					const userId = this.getNodeParameter("userId", 0) as string;
					responseData = await getAppwriteUser(appwriteClient, userId);
					returnData.push(responseData);
				} else if (operation === "getUserPreferences") {
					const userId = this.getNodeParameter("userId", 0) as string;
					responseData = await getAppwriteUserPrefs(appwriteClient, userId);
					returnData.push(responseData);
				} else if (operation === "listUserIdentities") {
					const userId = this.getNodeParameter("userId", 0) as string;
					responseData = await listAppwriteUserIdentities(
						appwriteClient,
						userId,
					);
					returnData.push(responseData);
				} else if (operation === "listUserLogs") {
					const userId = this.getNodeParameter("userId", 0) as string;
					responseData = await listAppwriteUserLogs(appwriteClient, userId);
					returnData.push(responseData);
				} else if (operation === "listUserMemberships") {
					const userId = this.getNodeParameter("userId", 0) as string;
					responseData = await listAppwriteUserMemberships(
						appwriteClient,
						userId,
					);
					returnData.push(responseData);
				} else if (operation === "listUserSessions") {
					const userId = this.getNodeParameter("userId", 0) as string;
					responseData = await listAppwriteUserSessions(appwriteClient, userId);
					returnData.push(responseData);
				} else if (operation === "listUsers") {
					const optionalFields = this.getNodeParameter(
						"additionalFields",
						0,
					) as IDataObject;
					const queriesToSend: string[] = [];
					if (optionalFields.queries) {
						const queriesData = optionalFields.queries as {
							queriesData: {
								query: string;
								index: string;
								value1?: string;
								value2?: string;
							}[];
						};
						const queries = queriesData.queriesData;
						if (queries) {
							for (const query of queries) {
								const queryString = convertStringToQuery(
									`${query.query}`,
									`${query.index}`,
									query.value1 && query.value1.length > 0
										? (query.value1 as string)
										: undefined,
									query.value2 && query.value2.length > 0
										? (query.value2 as string)
										: undefined,
								);
								if (queryString && queryString.length > 0) {
									queriesToSend.push(queryString);
								}
							}
						}
					}
					responseData = await listAppwriteUsers(appwriteClient, queriesToSend);
					returnData.push(responseData);
				} else if (operation === "updateUser") {
					const userId = this.getNodeParameter("userId", 0) as string;
					const email =
						(this.getNodeParameter("email", 0) as string) ?? undefined;
					const verifyEmail =
						(this.getNodeParameter("verifyEmail", 0) as boolean) ?? undefined;
					const name =
						(this.getNodeParameter("name", 0) as string) ?? undefined;
					const phone =
						(this.getNodeParameter("phone", 0) as string) ?? undefined;
					const verifyPhone =
						(this.getNodeParameter("verifyPhone", 0) as boolean) ?? undefined;
					const password =
						(this.getNodeParameter("password", 0) as string) ?? undefined;
					const newPassword =
						(this.getNodeParameter("newPassword", 0) as string) ?? undefined;
					const prefs =
						(this.getNodeParameter("preferences", 0) as any) ?? undefined;
					const labels =
						(this.getNodeParameter("labels", 0) as string[]) ?? undefined;
					const status =
						(this.getNodeParameter("status", 0) as boolean) ?? undefined;
					responseData = await updateAppwriteUser(
						appwriteClient,
						userId,
						email,
						verifyEmail,
						name,
						password,
						newPassword,
						prefs,
						phone,
						verifyPhone,
						labels,
						status,
					);
					returnData.push(responseData);
				}
			} else if (resource === "messaging") {
				// Provider operations
				if (operation === "createProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const providerType = this.getNodeParameter("providerType", 0) as string;
					const config = this.getNodeParameter("config", 0) as object;
					responseData = await createMessagingProvider(appwriteClient, providerId, name, providerType, config);
					returnData.push(responseData);
				} else if (operation === "createApnsProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const authKey = this.getNodeParameter("authKeyDirect", 0) as string;
					const authKeyId = this.getNodeParameter("authKeyIdDirect", 0) as string;
					const teamId = this.getNodeParameter("teamIdDirect", 0) as string;
					const bundleId = this.getNodeParameter("bundleIdDirect", 0) as string;
					const sandbox = this.getNodeParameter("sandboxDirect", 0) as boolean;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					responseData = await createApnsProvider(appwriteClient, providerId, name, authKey, authKeyId, teamId, bundleId, sandbox, enabled);
					returnData.push(responseData);
				} else if (operation === "createFcmProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const serviceAccountJSON = this.getNodeParameter("serviceAccountJSONDirect", 0) as object;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					responseData = await createFcmProvider(appwriteClient, providerId, name, serviceAccountJSON, enabled);
					returnData.push(responseData);
				} else if (operation === "createMailgunProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const apiKey = this.getNodeParameter("apiKeyDirectMailgun", 0) as string;
					const domain = this.getNodeParameter("domainDirect", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					responseData = await createMailgunProvider(appwriteClient, providerId, name, apiKey, domain, undefined, undefined, undefined, undefined, undefined, enabled);
					returnData.push(responseData);
				} else if (operation === "createMsg91Provider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const senderId = this.getNodeParameter("senderIdDirect", 0) as string;
					const authKey = this.getNodeParameter("authKeyDirectMsg91", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					responseData = await createMsg91Provider(appwriteClient, providerId, name, undefined, senderId, authKey, enabled);
					returnData.push(responseData);
				} else if (operation === "createSendgridProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const apiKey = this.getNodeParameter("apiKeyDirectSendgrid", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					responseData = await createSendgridProvider(appwriteClient, providerId, name, apiKey, undefined, undefined, undefined, undefined, enabled);
					returnData.push(responseData);
				} else if (operation === "createSmtpProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const host = this.getNodeParameter("hostDirect", 0) as string;
					const port = this.getNodeParameter("portDirect", 0) as number;
					const username = this.getNodeParameter("usernameDirect", 0) as string;
					const password = this.getNodeParameter("passwordDirect", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					responseData = await createSmtpProvider(appwriteClient, providerId, name, host, port, username, password, undefined, undefined, undefined, undefined, undefined, undefined, undefined, enabled);
					returnData.push(responseData);
				} else if (operation === "createTelesignProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const from = this.getNodeParameter("fromDirectTelesign", 0) as string;
					const customerId = this.getNodeParameter("customerIdDirect", 0) as string;
					const apiKey = this.getNodeParameter("apiKeyDirectTelesign", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					responseData = await createTelesignProvider(appwriteClient, providerId, name, from, customerId, apiKey, enabled);
					returnData.push(responseData);
				} else if (operation === "createTextmagicProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const from = this.getNodeParameter("fromDirectTextmagic", 0) as string;
					const username = this.getNodeParameter("usernameDirectTextmagic", 0) as string;
					const apiKey = this.getNodeParameter("apiKeyDirectTextmagic", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					responseData = await createTextmagicProvider(appwriteClient, providerId, name, from, username, apiKey, enabled);
					returnData.push(responseData);
				} else if (operation === "createTwilioProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const from = this.getNodeParameter("fromDirectTwilio", 0) as string;
					const accountSid = this.getNodeParameter("accountSidDirect", 0) as string;
					const authToken = this.getNodeParameter("authTokenDirect", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					responseData = await createTwilioProvider(appwriteClient, providerId, name, from, accountSid, authToken, enabled);
					returnData.push(responseData);
				} else if (operation === "createVonageProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const from = this.getNodeParameter("fromDirectVonage", 0) as string;
					const apiKey = this.getNodeParameter("apiKeyDirectVonage", 0) as string;
					const apiSecret = this.getNodeParameter("apiSecretDirect", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					responseData = await createVonageProvider(appwriteClient, providerId, name, from, apiKey, apiSecret, enabled);
					returnData.push(responseData);
				} else if (operation === "getProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					responseData = await getMessagingProvider(appwriteClient, providerId);
					returnData.push(responseData);
				} else if (operation === "listProviders") {
					const optionalFields = this.getNodeParameter("additionalFields", 0) as IDataObject;
					const queries: string[] = [];
					if (optionalFields.queries) {
						const queriesData = optionalFields.queries as { queriesData: { query: string; index: string; value1?: string; value2?: string; }[]; };
						const queryList = queriesData.queriesData;
						if (queryList) {
							for (const query of queryList) {
								const queryString = convertStringToQuery(`${query.query}`, `${query.index}`, query.value1, query.value2);
								if (queryString && queryString.length > 0) {
									queries.push(queryString);
								}
							}
						}
					}
					responseData = await listMessagingProviders(appwriteClient, queries);
					returnData.push(responseData);
				} else if (operation === "updateProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					const config = this.getNodeParameter("config", 0) as object;
					responseData = await updateMessagingProvider(appwriteClient, providerId, name, enabled, config);
					returnData.push(responseData);
				} else if (operation === "updateApnsProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					const authKey = this.getNodeParameter("authKeyDirect", 0) as string;
					const authKeyId = this.getNodeParameter("authKeyIdDirect", 0) as string;
					const teamId = this.getNodeParameter("teamIdDirect", 0) as string;
					const bundleId = this.getNodeParameter("bundleIdDirect", 0) as string;
					const sandbox = this.getNodeParameter("sandboxDirect", 0) as boolean;
					responseData = await updateApnsProvider(appwriteClient, providerId, name, enabled, authKey, authKeyId, teamId, bundleId, sandbox);
					returnData.push(responseData);
				} else if (operation === "updateFcmProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					const serviceAccountJSON = this.getNodeParameter("serviceAccountJSONDirect", 0) as object;
					responseData = await updateFcmProvider(appwriteClient, providerId, name, enabled, serviceAccountJSON);
					returnData.push(responseData);
				} else if (operation === "updateMailgunProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					const apiKey = this.getNodeParameter("apiKeyDirectMailgun", 0) as string;
					const domain = this.getNodeParameter("domainDirect", 0) as string;
					responseData = await updateMailgunProvider(appwriteClient, providerId, name, enabled, apiKey, domain);
					returnData.push(responseData);
				} else if (operation === "updateMsg91Provider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					const senderId = this.getNodeParameter("senderIdDirect", 0) as string;
					const authKey = this.getNodeParameter("authKeyDirectMsg91", 0) as string;
					responseData = await updateMsg91Provider(appwriteClient, providerId, name, enabled, undefined, senderId, authKey);
					returnData.push(responseData);
				} else if (operation === "updateSendgridProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					const apiKey = this.getNodeParameter("apiKeyDirectSendgrid", 0) as string;
					responseData = await updateSendgridProvider(appwriteClient, providerId, name, enabled, apiKey);
					returnData.push(responseData);
				} else if (operation === "updateSmtpProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					const host = this.getNodeParameter("hostDirect", 0) as string;
					const port = this.getNodeParameter("portDirect", 0) as number;
					const username = this.getNodeParameter("usernameDirect", 0) as string;
					const password = this.getNodeParameter("passwordDirect", 0) as string;
					responseData = await updateSmtpProvider(appwriteClient, providerId, name, enabled, host, port, username, password);
					returnData.push(responseData);
				} else if (operation === "updateTelesignProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					const customerId = this.getNodeParameter("customerIdDirect", 0) as string;
					const apiKey = this.getNodeParameter("apiKeyDirectTelesign", 0) as string;
					responseData = await updateTelesignProvider(appwriteClient, providerId, name, enabled, undefined, customerId, apiKey);
					returnData.push(responseData);
				} else if (operation === "updateTextmagicProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					const username = this.getNodeParameter("usernameDirectTextmagic", 0) as string;
					const apiKey = this.getNodeParameter("apiKeyDirectTextmagic", 0) as string;
					responseData = await updateTextmagicProvider(appwriteClient, providerId, name, enabled, undefined, username, apiKey);
					returnData.push(responseData);
				} else if (operation === "updateTwilioProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					const accountSid = this.getNodeParameter("accountSidDirect", 0) as string;
					const authToken = this.getNodeParameter("authTokenDirect", 0) as string;
					responseData = await updateTwilioProvider(appwriteClient, providerId, name, enabled, undefined, accountSid, authToken);
					returnData.push(responseData);
				} else if (operation === "updateVonageProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					const name = this.getNodeParameter("providerName", 0) as string;
					const enabled = this.getNodeParameter("enabledDirect", 0) as boolean;
					const apiKey = this.getNodeParameter("apiKeyDirectVonage", 0) as string;
					const apiSecret = this.getNodeParameter("apiSecretDirect", 0) as string;
					responseData = await updateVonageProvider(appwriteClient, providerId, name, enabled, undefined, apiKey, apiSecret);
					returnData.push(responseData);
				} else if (operation === "deleteProvider") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					responseData = await deleteMessagingProvider(appwriteClient, providerId);
					returnData.push({ success: responseData });
				} else if (operation === "listProviderLogs") {
					const providerId = this.getNodeParameter("providerId", 0) as string;
					responseData = await listMessagingProviderLogs(appwriteClient, providerId);
					returnData.push(responseData);
				}
				// Topic operations
				else if (operation === "createTopic") {
					const topicId = this.getNodeParameter("topicId", 0) as string;
					const name = this.getNodeParameter("name", 0) as string;
					const subscribe = this.getNodeParameter("subscribe", 0) as string[];
					responseData = await createMessagingTopic(appwriteClient, topicId, name, subscribe);
					returnData.push(responseData);
				} else if (operation === "getTopic") {
					const topicId = this.getNodeParameter("topicId", 0) as string;
					responseData = await getMessagingTopic(appwriteClient, topicId);
					returnData.push(responseData);
				} else if (operation === "listTopics") {
					responseData = await listMessagingTopics(appwriteClient);
					returnData.push(responseData);
				} else if (operation === "updateTopic") {
					const topicId = this.getNodeParameter("topicId", 0) as string;
					const name = this.getNodeParameter("name", 0) as string;
					const subscribe = this.getNodeParameter("subscribe", 0) as string[];
					responseData = await updateMessagingTopic(appwriteClient, topicId, name, subscribe);
					returnData.push(responseData);
				} else if (operation === "deleteTopic") {
					const topicId = this.getNodeParameter("topicId", 0) as string;
					responseData = await deleteMessagingTopic(appwriteClient, topicId);
					returnData.push({ success: responseData });
				} else if (operation === "listTopicLogs") {
					const topicId = this.getNodeParameter("topicId", 0) as string;
					responseData = await listMessagingTopicLogs(appwriteClient, topicId);
					returnData.push(responseData);
				}
				// Subscriber operations
				else if (operation === "createSubscriber") {
					const topicId = this.getNodeParameter("topicId", 0) as string;
					const subscriberId = this.getNodeParameter("subscriberId", 0) as string;
					const targetId = this.getNodeParameter("targetId", 0) as string;
					responseData = await createMessagingSubscriber(appwriteClient, topicId, subscriberId, targetId);
					returnData.push(responseData);
				} else if (operation === "getSubscriber") {
					const topicId = this.getNodeParameter("topicId", 0) as string;
					const subscriberId = this.getNodeParameter("subscriberId", 0) as string;
					responseData = await getMessagingSubscriber(appwriteClient, topicId, subscriberId);
					returnData.push(responseData);
				} else if (operation === "listSubscribers") {
					const topicId = this.getNodeParameter("topicId", 0) as string;
					responseData = await listMessagingSubscribers(appwriteClient, topicId);
					returnData.push(responseData);
				} else if (operation === "deleteSubscriber") {
					const topicId = this.getNodeParameter("topicId", 0) as string;
					const subscriberId = this.getNodeParameter("subscriberId", 0) as string;
					responseData = await deleteMessagingSubscriber(appwriteClient, topicId, subscriberId);
					returnData.push({ success: responseData });
				} else if (operation === "listSubscriberLogs") {
					const topicId = this.getNodeParameter("topicId", 0) as string;
					const subscriberId = this.getNodeParameter("subscriberId", 0) as string;
					responseData = await listMessagingSubscriberLogs(appwriteClient, topicId, subscriberId);
					returnData.push(responseData);
				}
				// Message operations
				else if (operation === "createEmail") {
					const messageId = this.getNodeParameter("messageId", 0) as string;
					const subject = this.getNodeParameter("subject", 0) as string;
					const content = this.getNodeParameter("content", 0) as string;
					const optionalFields = this.getNodeParameter("additionalFields", 0) as IDataObject;
					responseData = await createMessagingEmail(
						appwriteClient,
						messageId,
						subject,
						content,
						optionalFields.topics as string[],
						optionalFields.users as string[],
						optionalFields.targets as string[],
						optionalFields.cc as string[],
						optionalFields.bcc as string[],
						optionalFields.attachments as string[],
						optionalFields.draft as boolean,
						optionalFields.html as boolean,
						optionalFields.scheduledAt as string
					);
					returnData.push(responseData);
				} else if (operation === "createPush") {
					const messageId = this.getNodeParameter("messageId", 0) as string;
					const title = this.getNodeParameter("title", 0) as string;
					const body = this.getNodeParameter("body", 0) as string;
					const optionalFields = this.getNodeParameter("additionalFields", 0) as IDataObject;
					responseData = await createMessagingPush(
						appwriteClient,
						messageId,
						title,
						body,
						optionalFields.topics as string[],
						optionalFields.users as string[],
						optionalFields.targets as string[],
						optionalFields.data as object,
						optionalFields.action as string,
						optionalFields.image as string,
						optionalFields.icon as string,
						optionalFields.sound as string,
						optionalFields.color as string,
						optionalFields.tag as string,
						optionalFields.badge as number,
						optionalFields.draft as boolean,
						optionalFields.scheduledAt as string
					);
					returnData.push(responseData);
				} else if (operation === "createSms") {
					const messageId = this.getNodeParameter("messageId", 0) as string;
					const content = this.getNodeParameter("content", 0) as string;
					const optionalFields = this.getNodeParameter("additionalFields", 0) as IDataObject;
					responseData = await createMessagingSms(
						appwriteClient,
						messageId,
						content,
						optionalFields.topics as string[],
						optionalFields.users as string[],
						optionalFields.targets as string[],
						optionalFields.draft as boolean,
						optionalFields.scheduledAt as string
					);
					returnData.push(responseData);
				} else if (operation === "getMessage") {
					const messageId = this.getNodeParameter("messageId", 0) as string;
					responseData = await getMessagingMessage(appwriteClient, messageId);
					returnData.push(responseData);
				} else if (operation === "listMessages") {
					responseData = await listMessagingMessages(appwriteClient);
					returnData.push(responseData);
				} else if (operation === "updateEmail") {
					const messageId = this.getNodeParameter("messageId", 0) as string;
					const optionalFields = this.getNodeParameter("additionalFields", 0) as IDataObject;
					responseData = await updateMessagingEmail(
						appwriteClient,
						messageId,
						optionalFields.topics as string[],
						optionalFields.users as string[],
						optionalFields.targets as string[],
						optionalFields.subject as string,
						optionalFields.content as string,
						optionalFields.draft as boolean,
						optionalFields.html as boolean,
						optionalFields.cc as string[],
						optionalFields.bcc as string[],
						optionalFields.scheduledAt as string
					);
					returnData.push(responseData);
				} else if (operation === "updatePush") {
					const messageId = this.getNodeParameter("messageId", 0) as string;
					const optionalFields = this.getNodeParameter("additionalFields", 0) as IDataObject;
					responseData = await updateMessagingPush(
						appwriteClient,
						messageId,
						optionalFields.topics as string[],
						optionalFields.users as string[],
						optionalFields.targets as string[],
						optionalFields.title as string,
						optionalFields.body as string,
						optionalFields.data as object,
						optionalFields.action as string,
						optionalFields.image as string,
						optionalFields.icon as string,
						optionalFields.sound as string,
						optionalFields.color as string,
						optionalFields.tag as string,
						optionalFields.badge as number,
						optionalFields.draft as boolean,
						optionalFields.scheduledAt as string
					);
					returnData.push(responseData);
				} else if (operation === "updateSms") {
					const messageId = this.getNodeParameter("messageId", 0) as string;
					const optionalFields = this.getNodeParameter("additionalFields", 0) as IDataObject;
					responseData = await updateMessagingSms(
						appwriteClient,
						messageId,
						optionalFields.topics as string[],
						optionalFields.users as string[],
						optionalFields.targets as string[],
						optionalFields.content as string,
						optionalFields.draft as boolean,
						optionalFields.scheduledAt as string
					);
					returnData.push(responseData);
				} else if (operation === "listMessageLogs") {
					const messageId = this.getNodeParameter("messageId", 0) as string;
					responseData = await listMessagingMessageLogs(appwriteClient, messageId);
					returnData.push(responseData);
				} else if (operation === "listTargets") {
					const messageId = this.getNodeParameter("messageId", 0) as string;
					responseData = await listMessagingTargets(appwriteClient, messageId);
					returnData.push(responseData);
				}
			} else if (resource === "avatars") {
				if (operation === "getAvatarsBrowserFavicon") {
					const browser = this.getNodeParameter("browser", 0) as string;
					const additionalFields = this.getNodeParameter("additionalFields", 0) as any;
					const width = additionalFields?.width || 100;
					const height = additionalFields?.height || 100;
					responseData = await getAvatarsBrowserFavicon(appwriteClient, browser as Browser, width, height);
					returnData.push({ data: responseData });
				} else if (operation === "getAvatarsCreditCardIcon") {
					const code = this.getNodeParameter("code", 0) as string;
					const additionalFields = this.getNodeParameter("additionalFields", 0) as any;
					const width = additionalFields?.width || 100;
					const height = additionalFields?.height || 100;
					responseData = await getAvatarsCreditCardIcon(appwriteClient, code as CreditCard, width, height);
					returnData.push({ data: responseData });
				} else if (operation === "getAvatarsFavicon") {
					const url = this.getNodeParameter("url", 0) as string;
					responseData = await getAvatarsFavicon(appwriteClient, url);
					returnData.push({ data: responseData });
				} else if (operation === "getAvatarsFlag") {
					const code = this.getNodeParameter("code", 0) as string;
					const additionalFields = this.getNodeParameter("additionalFields", 0) as any;
					const width = additionalFields?.width || 100;
					const height = additionalFields?.height || 100;
					responseData = await getAvatarsFlag(appwriteClient, code as Flag, width, height);
					returnData.push({ data: responseData });
				} else if (operation === "getAvatarsImage") {
					const url = this.getNodeParameter("url", 0) as string;
					const additionalFields = this.getNodeParameter("additionalFields", 0) as any;
					const width = additionalFields?.width || 100;
					const height = additionalFields?.height || 100;
					responseData = await getAvatarsImage(appwriteClient, url, width, height);
					returnData.push({ data: responseData });
				} else if (operation === "getAvatarsInitials") {
					const name = this.getNodeParameter("name", 0) as string;
					const additionalFields = this.getNodeParameter("additionalFields", 0) as any;
					const width = additionalFields?.width || 100;
					const height = additionalFields?.height || 100;
					const background = additionalFields?.background || "";
					responseData = await getAvatarsInitials(appwriteClient, name, width, height, background);
					returnData.push({ data: responseData });
				} else if (operation === "getAvatarsQR") {
					const text = this.getNodeParameter("text", 0) as string;
					const additionalFields = this.getNodeParameter("additionalFields", 0) as any;
					const size = additionalFields?.size || 400;
					const margin = additionalFields?.margin || 1;
					const download = additionalFields?.download || false;
					responseData = await getAvatarsQR(appwriteClient, text, size, margin, download);
					returnData.push({ data: responseData });
				}
			} else if (resource === "locale") {
				if (operation === "getUserLocale") {
					responseData = await getLocaleUserLocale(appwriteClient);
					returnData.push(responseData);
				} else if (operation === "listLocaleCodes") {
					responseData = await getLocaleCodes(appwriteClient);
					returnData.push(responseData);
				} else if (operation === "listContinents") {
					responseData = await getLocaleContinents(appwriteClient);
					returnData.push(responseData);
				} else if (operation === "listCountries") {
					responseData = await getLocaleCountries(appwriteClient);
					returnData.push(responseData);
				} else if (operation === "listCountriesEU") {
					responseData = await getLocaleEUCountries(appwriteClient);
					returnData.push(responseData);
				} else if (operation === "listCountriesPhones") {
					responseData = await getLocaleCountriesPhones(appwriteClient);
					returnData.push(responseData);
				} else if (operation === "listCurrencies") {
					responseData = await getLocaleCurrencies(appwriteClient);
					returnData.push(responseData);
				} else if (operation === "listLanguages") {
					responseData = await getLocaleLanguages(appwriteClient);
					returnData.push(responseData);
				}
			} else if (resource === "tokens") {
				if (operation === "createFileToken") {
					const bucketId = this.getNodeParameter("bucketId", 0) as string;
					const fileId = this.getNodeParameter("fileId", 0) as string;
					const expire = this.getNodeParameter("expire", 0) as string;
					responseData = await createFileToken(
						appwriteClient, 
						bucketId, 
						fileId, 
						expire || undefined
					);
					returnData.push(responseData);
				} else if (operation === "deleteToken") {
					const tokenId = this.getNodeParameter("tokenId", 0) as string;
					responseData = await deleteToken(appwriteClient, tokenId);
					returnData.push({ success: { message: "Token deleted successfully" } });
				} else if (operation === "getToken") {
					const tokenId = this.getNodeParameter("tokenId", 0) as string;
					responseData = await getToken(appwriteClient, tokenId);
					returnData.push(responseData);
				} else if (operation === "listTokens") {
					const bucketId = this.getNodeParameter("bucketId", 0) as string;
					const fileId = this.getNodeParameter("fileId", 0) as string;
					responseData = await listTokens(appwriteClient, bucketId, fileId);
					returnData.push(responseData);
				} else if (operation === "updateToken") {
					const tokenId = this.getNodeParameter("tokenId", 0) as string;
					const expire = this.getNodeParameter("expire", 0) as string;
					responseData = await updateToken(
						appwriteClient, 
						tokenId, 
						expire || undefined
					);
					returnData.push(responseData);
				}
			} else {
				throw new NodeApiError(this.getNode(), { Error: "Resource not found" });
			}
		} catch (error: any) {
			if (this.continueOnFail()) {
				returnData.push({ error: error.message });
			} else {
				throw error;
			}
		}

		// Map data to n8n data
		return [this.helpers.returnJsonArray(returnData)];
	}
}
