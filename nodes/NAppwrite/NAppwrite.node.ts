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
} from "./AppwriteFunctions";
import { ID } from "node-appwrite";

export class NAppwrite implements INodeType {
	description: INodeTypeDescription = {
		displayName: "NAppwrite",
		name: "nAppwrite",
		icon: "file:Appwrite.svg",
		group: ["transform"],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description: "Use Appwrite's API from inside N8N, updated by @ZachHandley",
		defaults: {
			name: "Appwrite",
		},
		// @ts-expect-error
		inputs: ["main"],
		// @ts-expect-error
		outputs: ["main"],
		credentials: [
			{
				name: "nAppwriteApi",
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
						name: "Document",
						value: "document",
					},
					{
						name: "Function",
						value: "function",
					},
					{
						name: "Storage",
						value: "storage",
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
			...documentOperations,
			...documentFields,
			...storageOperations,
			...storageFields,
			...functionOperations,
			...functionFields,
			...usersOperations,
			...usersFields,
		],
	};

	// The function below is responsible for actually doing whatever this node
	// is supposed to do.
	// You can make async calls and use `await`.
	async execute(
		this: IExecuteFunctions
	): Promise<INodeExecutionData[][] | NodeExecutionWithMetadata[][] | null> {
		const returnData: IDataObject[] = [];

		let responseData;
		const resource = this.getNodeParameter("resource", 0) as string;
		const operation = this.getNodeParameter("operation", 0) as string;
		const { url, projectId, apiKey } = (await this.getCredentials(
			"nAppwriteApi"
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
						body
					);
					returnData.push(responseData);
				}

				if (operation === "getAllDocs") {
					// get additional fields input
					const optionalFields = this.getNodeParameter(
						"additionalFields",
						0
					) as IDataObject;
					const queriesToSend: string[] = [];

					if (optionalFields.options) {
						const queries = optionalFields.query as IDataObject[];
						if (queries) {
							for (const query of queries) {
								queriesToSend.push(
									convertStringToQuery(
										`${query.index}`,
										query.value as string,
										(query.value2 as string) ?? undefined
									)
								);
							}
						}
					}

					responseData = await listAppwriteDocuments(
						appwriteClient,
						databaseId,
						collectionId,
						queriesToSend
					);
					returnData.push(responseData);
				}

				if (operation === "getDoc") {
					// get documentID input
					const documentId = this.getNodeParameter("documentId", 0) as string;
					const optionalFields = this.getNodeParameter(
						"additionalFields",
						0
					) as IDataObject;
					const queriesToSend: string[] = [];

					if (optionalFields.options) {
						const queries = optionalFields.query as IDataObject[];
						console.log(
							"Inside optional fields, options value: ",
							optionalFields.options
						);
						console.log("Queries found: ", queries);
						if (queries) {
							for (const query of queries) {
								queriesToSend.push(
									convertStringToQuery(
										`${query.index}`,
										query.value as string,
										(query.value2 as string) ?? undefined
									)
								);
							}
						}
					}
					responseData = await getAppwriteDocument(
						appwriteClient,
						databaseId,
						collectionId,
						documentId,
						queriesToSend
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
						body
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
						documentId
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
					responseData = await runAppwriteFunction(
						appwriteClient,
						functionId,
						data
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
						fileId
					);
					returnData.push(responseData);
				} else if (operation === "createBucket") {
					const name = this.getNodeParameter("name", 0) as string;
					const permissions = this.getNodeParameter("permissions", 0) as string;
					const fileSecurity = this.getNodeParameter(
						"fileSecurity",
						0
					) as boolean;
					const enabled = this.getNodeParameter("enabled", 0) as boolean;
					const maximumFileSize = this.getNodeParameter(
						"maximumFileSize",
						0
					) as number;
					const allowedFileExtensions = this.getNodeParameter(
						"allowedFileExtensions",
						0
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
						antivirus
					);
					returnData.push(responseData);
				} else if (operation === "createFile") {
					const bucketId = this.getNodeParameter("bucketId", 0) as string;
					const file = this.getNodeParameter("file", 0) as string;
					const fileName = this.getNodeParameter("fileName", 0) as string;
					const mimeType = this.getNodeParameter("mimeType", 0) as string;
					responseData = await createAppwriteStorageFile(
						appwriteClient,
						bucketId,
						file,
						fileName,
						mimeType.split(",").map((mimeType: string) => mimeType.trim())
					);
					returnData.push(responseData);
				} else if (operation === "deleteBucket") {
					const bucketId = this.getNodeParameter("bucketId", 0) as string;
					responseData = await deleteAppwriteStorageBucket(
						appwriteClient,
						bucketId
					);
					returnData.push({ success: responseData });
				} else if (operation === "deleteFile") {
					const bucketId = this.getNodeParameter("bucketId", 0) as string;
					const fileId = this.getNodeParameter("fileId", 0) as string;
					responseData = await deleteAppwriteStorageFile(
						appwriteClient,
						bucketId,
						fileId
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
						0
					) as boolean;
					const name = this.getNodeParameter("name", 0) as string;
					const phone = this.getNodeParameter("phone", 0) as string;
					const verifyPhone = this.getNodeParameter(
						"verifyPhone",
						0
					) as boolean;
					const password = this.getNodeParameter("password", 0) as string;
					responseData = await createAppwriteUser(
						appwriteClient,
						userId,
						email,
						password,
						phone,
						name
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
								verifyPhone
							);
						} else if (verifyEmail) {
							await updateAppwriteUser(
								appwriteClient,
								responseData.$id,
								undefined,
								verifyEmail
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
								verifyPhone
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
						sessionId
					);
					returnData.push({ success: responseData });
				} else if (operation === "deleteUserSessions") {
					const userId = this.getNodeParameter("userId", 0) as string;
					responseData = await deleteAppwriteUserSessions(
						appwriteClient,
						userId
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
						userId
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
						userId
					);
					returnData.push(responseData);
				} else if (operation === "listUserSessions") {
					const userId = this.getNodeParameter("userId", 0) as string;
					responseData = await listAppwriteUserSessions(appwriteClient, userId);
					returnData.push(responseData);
				} else if (operation === "listUsers") {
					const optionalFields = this.getNodeParameter(
						"additionalFields",
						0
					) as IDataObject;
					const queriesToSend: string[] = [];
					if (optionalFields.options) {
						const queries = optionalFields.query as IDataObject[];
						console.log(
							"Inside optional fields, options value: ",
							optionalFields.options
						);
						console.log("Queries found: ", queries);
						if (queries) {
							for (const query of queries) {
								queriesToSend.push(
									convertStringToQuery(
										`${query.index}`,
										query.value as string,
										(query.value2 as string) ?? undefined
									)
								);
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
						status
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
