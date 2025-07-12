import {
	Client,
	Databases,
	Functions,
	Storage,
	Models,
	Query,
	Users,
	ID,
	Compression,
	Messaging,
	Avatars,
	Locale,
	Tokens,
	PasswordHash,
	ExecutionMethod,
	Browser,
	CreditCard,
	Flag,
	SmtpEncryption,
} from "node-appwrite";

export async function getAppwriteClient(
	endpoint: string,
	projectId: string,
	apiKey: string
): Promise<Client> {
	const client = new Client()
		.setEndpoint(endpoint)
		.setProject(projectId)
		.setKey(apiKey);
	return client;
}

export async function getAppwriteDatabase(
	client: Client,
	databaseId?: string
): Promise<Databases> {
	const database = new Databases(client);
	return database;
}

export async function getAppwriteUsers(client: Client): Promise<Users> {
	const users = new Users(client);
	return users;
}

export async function listAppwriteUsers(
	client: Client,
	queries?: string[]
): Promise<Models.UserList<Models.Preferences>> {
	const users = new Users(client);
	if (queries) {
		return users.list(queries);
	}
	return users.list();
}

export async function createAppwriteUser(
	client: Client,
	id: string = ID.unique(),
	email: string,
	password: string,
	name?: string,
	phone?: string,
	userType?:
		| "AlgoArgon2"
		| "AlgoBcrypt"
		| "AlgoMd5"
		| "AlgoPhpass"
		| "AlgoScryptModified"
		| "AlgoSha"
): Promise<Models.User<Models.Preferences>> {
	const users = new Users(client);
	if (userType) {
		let user: Models.User<Models.Preferences>;
		switch (userType) {
			case "AlgoArgon2":
				user = await users.createArgon2User(id, email, password, name);
				if (phone) {
					await users.updatePhone(user.$id, phone);
				}
				break;
			case "AlgoBcrypt":
				user = await users.createBcryptUser(id, email, password, name);
				if (phone) {
					await users.updatePhone(user.$id, phone);
				}
				break;
			case "AlgoMd5":
				user = await users.createMD5User(id, email, password, name);
				if (phone) {
					await users.updatePhone(user.$id, phone);
				}
				break;
			case "AlgoPhpass":
				user = await users.createPHPassUser(id, email, password, name);
				if (phone) {
					await users.updatePhone(user.$id, phone);
				}
				break;
			case "AlgoSha":
				user = await users.createSHAUser(id, email, password, PasswordHash.Sha256, name);
				if (phone) {
					await users.updatePhone(user.$id, phone);
				}
				break;
			default:
				user = await users.create(id, email, password, name, phone);
				if (phone) {
					await users.updatePhone(user.$id, phone);
				}
				break;
		}
		return user;
	} else {
		const user = await users.create(id, email, password, name);
		if (phone) {
			await users.updatePhone(user.$id, phone);
		}
		return user;
	}
}

export async function getAppwriteUser(
	client: Client,
	userId: string
): Promise<Models.User<Models.Preferences>> {
	const users = new Users(client);
	return users.get(userId);
}

export async function updateAppwriteUser(
	client: Client,
	userId: string,
	email?: string,
	emailVerification?: boolean,
	name?: string,
	password?: string,
	newPassword?: string,
	prefs?: Models.Preferences,
	phone?: string,
	phoneVerification?: boolean,
	labels?: string[],
	status?: boolean
): Promise<Models.User<Models.Preferences>> {
	const users = new Users(client);
	if (email) {
		await users.updateEmail(userId, email);
	}
	if (name) {
		await users.updateName(userId, name);
	}
	if (password && newPassword) {
		await users.updatePassword(userId, newPassword);
	}
	if (prefs) {
		await users.updatePrefs(userId, prefs);
	}
	if (phone) {
		await users.updatePhone(userId, phone);
	}
	if (phoneVerification) {
		await users.updatePhoneVerification(userId, phoneVerification);
	}
	if (emailVerification) {
		await users.updateEmailVerification(userId, emailVerification);
	}
	if (labels) {
		await users.updateLabels(userId, labels);
	}
	if (status) {
		await users.updateStatus(userId, status);
	}
	return getAppwriteUser(client, userId);
}

export async function deleteAppwriteUser(
	client: Client,
	userId: string
): Promise<{}> {
	const users = new Users(client);
	return users.delete(userId);
}

export async function deleteAppwriteUserSession(
	client: Client,
	userId: string,
	sessionId: string
): Promise<{}> {
	const users = new Users(client);
	return users.deleteSession(userId, sessionId);
}

export async function deleteAppwriteUserSessions(
	client: Client,
	userId: string
): Promise<{}> {
	const users = new Users(client);
	return users.deleteSessions(userId);
}

export async function getAppwriteUserPrefs(
	client: Client,
	userId: string
): Promise<Models.Preferences> {
	const users = new Users(client);
	return users.getPrefs(userId);
}

export async function listAppwriteUserSessions(
	client: Client,
	userId: string
): Promise<Models.SessionList> {
	const users = new Users(client);
	return users.listSessions(userId);
}

export async function listAppwriteUserIdentities(
	client: Client,
	userId: string
): Promise<Models.IdentityList> {
	const users = new Users(client);
	return users.listIdentities([Query.equal("userId", userId)]);
}

export async function listAppwriteUserLogs(
	client: Client,
	userId: string
): Promise<Models.LogList> {
	const users = new Users(client);
	return users.listLogs(userId);
}

export async function listAppwriteUserMemberships(
	client: Client,
	userId: string
): Promise<Models.MembershipList> {
	const users = new Users(client);
	return users.listMemberships(userId);
}

export async function listAppwriteDatabases(
	client: Client
): Promise<Models.DatabaseList> {
	const database = await getAppwriteDatabase(client);
	return database.list();
}

export async function getAppwriteCollection(
	client: Client,
	databaseId: string,
	collectionId: string
): Promise<Models.Collection> {
	const database = await getAppwriteDatabase(client);
	return database.getCollection(databaseId, collectionId);
}

export async function getAppwriteCollectionIndices(
	client: Client,
	databaseId: string,
	collectionId: string
): Promise<Models.IndexList> {
	const database = await getAppwriteDatabase(client);
	return database.listIndexes(databaseId, collectionId);
}

export async function listAppwriteCollections(
	client: Client,
	databaseId: string
): Promise<Models.CollectionList> {
	const database = await getAppwriteDatabase(client);
	return database.listCollections(databaseId);
}

export async function getAppwriteDocument(
	client: Client,
	databaseId: string,
	collectionId: string,
	documentId: string,
	queries?: string[]
): Promise<Models.Document> {
	const database = await getAppwriteDatabase(client);
	if (queries !== undefined && queries.length > 0) {
		return database.getDocument(databaseId, collectionId, documentId, queries);
	}
	return database.getDocument(databaseId, collectionId, documentId);
}

export async function listAppwriteDocuments(
	client: Client,
	databaseId: string,
	collectionId: string,
	queries?: string[]
): Promise<Models.DocumentList<Models.Document>> {
	const database = await getAppwriteDatabase(client);
	if (queries !== undefined && queries.length > 0) {
		return database.listDocuments(databaseId, collectionId, queries);
	}
	return database.listDocuments(databaseId, collectionId);
}

export async function createAppwriteDocument(
	client: Client,
	databaseId: string,
	collectionId: string,
	documentId: string,
	data: any
): Promise<Models.Document> {
	const database = await getAppwriteDatabase(client);
	console.log("Inside creation function, function data received: ", data);
	return database.createDocument(databaseId, collectionId, documentId, data);
}

export async function updateAppwriteDocument(
	client: Client,
	databaseId: string,
	collectionId: string,
	documentId: string,
	data: any
): Promise<Models.Document> {
	const database = await getAppwriteDatabase(client);
	return database.updateDocument(databaseId, collectionId, documentId, data);
}

export async function deleteAppwriteDocument(
	client: Client,
	databaseId: string,
	collectionId: string,
	documentId: string
): Promise<{}> {
	const database = await getAppwriteDatabase(client);
	return database.deleteDocument(databaseId, collectionId, documentId);
}

export async function getAppwriteFunction(
	client: Client,
	functionId: string
): Promise<Models.Function> {
	const functions = new Functions(client);
	return functions.get(functionId);
}

export async function listAppwriteFunctions(
	client: Client
): Promise<Models.FunctionList> {
	const functions = new Functions(client);
	return functions.list();
}

export async function runAppwriteFunction(
	client: Client,
	functionId: string,
	data: any,
	async?: boolean,
	xpath?: string,
	method?: string,
	headers?: object,
	scheduledAt?: string
): Promise<Models.Execution> {
	const functions = new Functions(client);
	return functions.createExecution(
		functionId,
		data,
		async,
		xpath,
		method as ExecutionMethod,
		headers,
		scheduledAt
	);
}

export async function getAppwriteStorageFile(
	client: Client,
	bucketId: string,
	fileId: string
): Promise<Models.File> {
	const storage = new Storage(client);
	return storage.getFile(bucketId, fileId);
}

export async function listAppwriteBuckets(
	client: Client
): Promise<Models.BucketList> {
	const storage = new Storage(client);
	return storage.listBuckets();
}

export async function listAppwriteStorage(
	client: Client,
	bucketId: string
): Promise<Models.FileList> {
	const storage = new Storage(client);
	return storage.listFiles(bucketId);
}

export async function createAppwriteStorageFile(
	client: Client,
	bucketId: string,
	file: File,
	fileName: string,
	mimeType: string[]
): Promise<Models.File> {
	const storage = new Storage(client);
	return storage.createFile(bucketId, fileName, file, mimeType);
}

export async function createAppwriteStorageBucket(
	client: Client,
	bucketId: string,
	name: string,
	permissions?: string[],
	fileSecurity?: boolean | undefined,
	enabled?: boolean | undefined,
	maximumFileSize?: number,
	allowedFileExtensions?: string[] | undefined,
	compression?: string,
	encryption?: boolean | undefined,
	antivirus?: boolean | undefined
): Promise<Models.Bucket> {
	const storage = new Storage(client);
	return storage.createBucket(
		bucketId,
		name,
		permissions,
		fileSecurity,
		enabled,
		maximumFileSize,
		allowedFileExtensions,
		compression as Compression,
		encryption,
		antivirus
	);
}

export async function deleteAppwriteStorageFile(
	client: Client,
	bucketId: string,
	fileId: string
): Promise<{}> {
	const storage = new Storage(client);
	return storage.deleteFile(bucketId, fileId);
}

export async function deleteAppwriteStorageBucket(
	client: Client,
	bucketId: string
): Promise<{}> {
	const storage = new Storage(client);
	return storage.deleteBucket(bucketId);
}

const safeJSONParse = (value: string | number): any => {
	console.log("Safe JSON Parse: ", value);
	if (typeof value === "number") return value;
	try {
		console.log("Trying to parse: ", value);
		return JSON.parse(value);
	} catch {
		console.log("Failed to parse: ", value);
		return value; // Return original value if not JSON
	}
};

export const convertStringToQuery = (
	query: string,
	index: string,
	value?: string | number,
	value2?: string
) => {
	console.log("Converting Query: ", query);
	switch (query) {
		case "select":
			if (value) {
				return Query.select(safeJSONParse(value));
			}
			return "";
		case "equal":
			console.log("Equal Query: ", value, value2);
			if (value && value2) {
				return Query.equal(index, [
					safeJSONParse(value),
					safeJSONParse(value2),
				]);
			} else if (value) {
				return Query.equal(index, safeJSONParse(value));
			} else if (value2) {
				return Query.equal(index, safeJSONParse(value2));
			} else {
				return "";
			}
		case "not_equal":
			if (value && value2) {
				return Query.notEqual(index, [
					safeJSONParse(value),
					safeJSONParse(value2),
				]);
			} else if (value) {
				return Query.notEqual(index, safeJSONParse(value));
			} else if (value2) {
				return Query.notEqual(index, safeJSONParse(value2));
			} else {
				return "";
			}
		case "less_than":
			if (value && value2) {
				return Query.lessThan(index, [
					safeJSONParse(value),
					safeJSONParse(value2),
				]);
			} else if (value) {
				return Query.lessThan(index, safeJSONParse(value));
			} else if (value2) {
				return Query.lessThan(index, safeJSONParse(value2));
			} else {
				return "";
			}
		case "contains":
			if (value && value2) {
				return Query.contains(index, [
					safeJSONParse(value),
					safeJSONParse(value2),
				]);
			} else if (value) {
				return Query.contains(index, safeJSONParse(value));
			} else if (value2) {
				return Query.contains(index, safeJSONParse(value2));
			} else {
				return "";
			}
		case "greater_than":
			if (value && value2) {
				return Query.greaterThan(index, [
					safeJSONParse(value),
					safeJSONParse(value2),
				]);
			} else if (value) {
				return Query.greaterThan(index, safeJSONParse(value));
			} else if (value2) {
				return Query.greaterThan(index, safeJSONParse(value2));
			} else {
				return "";
			}
		case "less_than_or_equal":
			if (value && value2) {
				return Query.lessThanEqual(index, [
					safeJSONParse(value),
					safeJSONParse(value2),
				]);
			} else if (value) {
				return Query.lessThanEqual(index, safeJSONParse(value));
			} else if (value2) {
				return Query.lessThanEqual(index, safeJSONParse(value2));
			} else {
				return "";
			}
		case "greater_than_or_equal":
			if (value && value2) {
				return Query.greaterThanEqual(index, [
					safeJSONParse(value),
					safeJSONParse(value2),
				]);
			} else if (value) {
				return Query.greaterThanEqual(index, safeJSONParse(value));
			} else if (value2) {
				return Query.greaterThanEqual(index, safeJSONParse(value2));
			} else {
				return "";
			}
		case "greater_than":
			if (value && value2) {
				return Query.greaterThan(index, [
					safeJSONParse(value),
					safeJSONParse(value2),
				]);
			} else if (value) {
				return Query.greaterThan(index, safeJSONParse(value));
			} else if (value2) {
				return Query.greaterThan(index, safeJSONParse(value2));
			} else {
				return "";
			}
		case "between":
			if (index && value && value2) {
				return Query.between(index, value, safeJSONParse(value2));
			}
		case "is_null":
			if (value) {
				return Query.isNull(index);
			}
		case "is_not_null":
			if (value) {
				return Query.isNotNull(index);
			}
		case "starts_with":
			if (value) {
				return Query.startsWith(index, safeJSONParse(value));
			}
		case "ends_with":
			if (value) {
				return Query.endsWith(index, safeJSONParse(value));
			}
		case "search":
			if (value) {
				return Query.search(index, safeJSONParse(value));
			}
		case "order_descending":
			if (value) {
				return Query.orderDesc(index);
			}
		case "order_ascending":
			if (value) {
				return Query.orderAsc(index);
			}
		case "limit":
			if (value) {
				return Query.limit(safeJSONParse(value));
			}
		case "offset":
			if (value) {
				return Query.offset(safeJSONParse(value));
			}
		case "cursor_after":
			if (value) {
				return Query.cursorAfter(safeJSONParse(value));
			}
		case "cursor_before":
			if (value) {
				return Query.cursorBefore(safeJSONParse(value));
			}
		default:
			return "";
	}
};

/**
 * MESSAGING SHIT
 * 
 */

// MESSAGING FUNCTIONS

// Provider-specific creation functions
export async function createApnsProvider(
	client: Client,
	providerId: string,
	name: string,
	authKey?: string,
	authKeyId?: string,
	teamId?: string,
	bundleId?: string,
	sandbox?: boolean,
	enabled?: boolean
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.createApnsProvider(providerId, name, authKey, authKeyId, teamId, bundleId, sandbox, enabled);
}

export async function createFcmProvider(
	client: Client,
	providerId: string,
	name: string,
	serviceAccountJSON?: object,
	enabled?: boolean
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.createFcmProvider(providerId, name, serviceAccountJSON, enabled);
}

export async function createMailgunProvider(
	client: Client,
	providerId: string,
	name: string,
	apiKey?: string,
	domain?: string,
	isEuRegion?: boolean,
	fromName?: string,
	fromEmail?: string,
	replyToName?: string,
	replyToEmail?: string,
	enabled?: boolean
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.createMailgunProvider(providerId, name, apiKey, domain, isEuRegion, fromName, fromEmail, replyToName, replyToEmail, enabled);
}

export async function createMsg91Provider(
	client: Client,
	providerId: string,
	name: string,
	templateId?: string,
	senderId?: string,
	authKey?: string,
	enabled?: boolean
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.createMsg91Provider(providerId, name, templateId, senderId, authKey, enabled);
}

export async function createSendgridProvider(
	client: Client,
	providerId: string,
	name: string,
	apiKey?: string,
	fromName?: string,
	fromEmail?: string,
	replyToName?: string,
	replyToEmail?: string,
	enabled?: boolean
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.createSendgridProvider(providerId, name, apiKey, fromName, fromEmail, replyToName, replyToEmail, enabled);
}

export async function createSmtpProvider(
	client: Client,
	providerId: string,
	name: string,
	host: string,
	port?: number,
	username?: string,
	password?: string,
	encryption?: SmtpEncryption,
	autoTLS?: boolean,
	mailer?: string,
	fromName?: string,
	fromEmail?: string,
	replyToName?: string,
	replyToEmail?: string,
	enabled?: boolean
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.createSmtpProvider(
		providerId, 
		name,
		host, 
		port, 
		username, 
		password, 
		encryption, 
		autoTLS, 
		mailer, 
		fromName, 
		fromEmail, 
		replyToName, 
		replyToEmail, 
		enabled
	);
}

export async function createTelesignProvider(
	client: Client,
	providerId: string,
	name: string,
	from?: string,
	customerId?: string,
	apiKey?: string,
	enabled?: boolean
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.createTelesignProvider(providerId, name, from, customerId, apiKey, enabled);
}

export async function createTextmagicProvider(
	client: Client,
	providerId: string,
	name: string,
	from?: string,
	username?: string,
	apiKey?: string,
	enabled?: boolean
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.createTextmagicProvider(providerId, name, from, username, apiKey, enabled);
}

export async function createTwilioProvider(
	client: Client,
	providerId: string,
	name: string,
	from?: string,
	accountSid?: string,
	authToken?: string,
	enabled?: boolean
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.createTwilioProvider(providerId, name, from, accountSid, authToken, enabled);
}

export async function createVonageProvider(
	client: Client,
	providerId: string,
	name: string,
	from?: string,
	apiKey?: string,
	apiSecret?: string,
	enabled?: boolean
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.createVonageProvider(providerId, name, from, apiKey, apiSecret, enabled);
}

// Generic provider creation function (kept for backward compatibility)
export async function createMessagingProvider(
	client: Client,
	providerId: string,
	name: string,
	providerType: string,
	config: object
): Promise<Models.Provider> {
	// This is a placeholder - the actual Appwrite SDK uses specific provider functions
	// This function should not be used directly in the new implementation
	throw new Error("Use specific provider creation functions like createApnsProvider, createFcmProvider, etc.");
}

export async function getMessagingProvider(
	client: Client,
	providerId: string
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.getProvider(providerId);
}

export async function listMessagingProviders(
	client: Client,
	queries?: string[]
): Promise<Models.ProviderList> {
	const messaging = new Messaging(client);
	return messaging.listProviders(queries);
}

// Provider-specific update functions
export async function updateApnsProvider(
	client: Client,
	providerId: string,
	name?: string,
	enabled?: boolean,
	authKey?: string,
	authKeyId?: string,
	teamId?: string,
	bundleId?: string,
	sandbox?: boolean
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.updateApnsProvider(providerId, name, enabled, authKey, authKeyId, teamId, bundleId, sandbox);
}

export async function updateFcmProvider(
	client: Client,
	providerId: string,
	name?: string,
	enabled?: boolean,
	serviceAccountJSON?: object
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.updateFcmProvider(providerId, name, enabled, serviceAccountJSON);
}

export async function updateMailgunProvider(
	client: Client,
	providerId: string,
	name?: string,
	enabled?: boolean,
	apiKey?: string,
	domain?: string,
	isEuRegion?: boolean,
	fromName?: string,
	fromEmail?: string,
	replyToName?: string,
	replyToEmail?: string
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.updateMailgunProvider(providerId, name, apiKey, domain, isEuRegion, enabled, fromName, fromEmail, replyToName, replyToEmail);
}

export async function updateMsg91Provider(
	client: Client,
	providerId: string,
	name?: string,
	enabled?: boolean,
	templateId?: string,
	senderId?: string,
	authKey?: string
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.updateMsg91Provider(providerId, name, enabled, templateId, senderId, authKey);
}

export async function updateSendgridProvider(
	client: Client,
	providerId: string,
	name?: string,
	enabled?: boolean,
	apiKey?: string,
	fromName?: string,
	fromEmail?: string,
	replyToName?: string,
	replyToEmail?: string
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.updateSendgridProvider(providerId, name, enabled, apiKey, fromName, fromEmail, replyToName, replyToEmail);
}

export async function updateSmtpProvider(
	client: Client,
	providerId: string,
	name?: string,
	enabled?: boolean,
	host?: string,
	port?: number,
	username?: string,
	password?: string,
	encryption?: SmtpEncryption,
	autoTLS?: boolean,
	mailer?: string,
	fromName?: string,
	fromEmail?: string,
	replyToName?: string,
	replyToEmail?: string
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.updateSmtpProvider(
		providerId, 
		name, 
		host, 
		port, 
		username, 
		password, 
		encryption, 
		autoTLS, 
		mailer, 
		fromName, 
		fromEmail, 
		replyToName, 
		replyToEmail,
		enabled,
	);
}

export async function updateTelesignProvider(
	client: Client,
	providerId: string,
	name?: string,
	enabled?: boolean,
	from?: string,
	customerId?: string,
	apiKey?: string
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.updateTelesignProvider(providerId, name, enabled, from, customerId, apiKey);
}

export async function updateTextmagicProvider(
	client: Client,
	providerId: string,
	name?: string,
	enabled?: boolean,
	from?: string,
	username?: string,
	apiKey?: string
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.updateTextmagicProvider(providerId, name, enabled, from, username, apiKey);
}

export async function updateTwilioProvider(
	client: Client,
	providerId: string,
	name?: string,
	enabled?: boolean,
	from?: string,
	accountSid?: string,
	authToken?: string
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.updateTwilioProvider(providerId, name, enabled, from, accountSid, authToken);
}

export async function updateVonageProvider(
	client: Client,
	providerId: string,
	name?: string,
	enabled?: boolean,
	from?: string,
	apiKey?: string,
	apiSecret?: string
): Promise<Models.Provider> {
	const messaging = new Messaging(client);
	return messaging.updateVonageProvider(providerId, name, enabled, from, apiKey, apiSecret);
}

// Generic provider update function (kept for backward compatibility)
export async function updateMessagingProvider(
	client: Client,
	providerId: string,
	name?: string,
	enabled?: boolean,
	config?: object
): Promise<Models.Provider> {
	// This is a placeholder - the actual Appwrite SDK uses specific provider functions
	// This function should not be used directly in the new implementation
	throw new Error("Use specific provider update functions like updateApnsProvider, updateFcmProvider, etc.");
}

export async function deleteMessagingProvider(
	client: Client,
	providerId: string
): Promise<{}> {
	const messaging = new Messaging(client);
	return messaging.deleteProvider(providerId);
}

export async function listMessagingProviderLogs(
	client: Client,
	providerId: string,
	queries?: string[]
): Promise<Models.LogList> {
	const messaging = new Messaging(client);
	return messaging.listProviderLogs(providerId, queries);
}

export async function createMessagingTopic(
	client: Client,
	topicId: string,
	name: string,
	subscribe?: string[]
): Promise<Models.Topic> {
	const messaging = new Messaging(client);
	return messaging.createTopic(topicId, name, subscribe);
}

export async function getMessagingTopic(
	client: Client,
	topicId: string
): Promise<Models.Topic> {
	const messaging = new Messaging(client);
	return messaging.getTopic(topicId);
}

export async function listMessagingTopics(
	client: Client,
	queries?: string[]
): Promise<Models.TopicList> {
	const messaging = new Messaging(client);
	return messaging.listTopics(queries);
}

export async function updateMessagingTopic(
	client: Client,
	topicId: string,
	name?: string,
	subscribe?: string[]
): Promise<Models.Topic> {
	const messaging = new Messaging(client);
	return messaging.updateTopic(topicId, name, subscribe);
}

export async function deleteMessagingTopic(
	client: Client,
	topicId: string
): Promise<{}> {
	const messaging = new Messaging(client);
	return messaging.deleteTopic(topicId);
}

export async function listMessagingTopicLogs(
	client: Client,
	topicId: string,
	queries?: string[]
): Promise<Models.LogList> {
	const messaging = new Messaging(client);
	return messaging.listTopicLogs(topicId, queries);
}

export async function createMessagingSubscriber(
	client: Client,
	topicId: string,
	subscriberId: string,
	targetId: string
): Promise<Models.Subscriber> {
	const messaging = new Messaging(client);
	return messaging.createSubscriber(topicId, subscriberId, targetId);
}

export async function getMessagingSubscriber(
	client: Client,
	topicId: string,
	subscriberId: string
): Promise<Models.Subscriber> {
	const messaging = new Messaging(client);
	return messaging.getSubscriber(topicId, subscriberId);
}

export async function listMessagingSubscribers(
	client: Client,
	topicId: string,
	queries?: string[]
): Promise<Models.SubscriberList> {
	const messaging = new Messaging(client);
	return messaging.listSubscribers(topicId, queries);
}

export async function deleteMessagingSubscriber(
	client: Client,
	topicId: string,
	subscriberId: string
): Promise<{}> {
	const messaging = new Messaging(client);
	return messaging.deleteSubscriber(topicId, subscriberId);
}

export async function listMessagingSubscriberLogs(
	client: Client,
	topicId: string,
	subscriberId: string,
	queries?: string[]
): Promise<Models.LogList> {
	const messaging = new Messaging(client);
	if (queries && queries.length > 0) {
		const finalQueries = new Set(...queries, [Query.equal("topic", topicId)]);
		return messaging.listSubscriberLogs(subscriberId, Array.from(finalQueries));
	}
	return messaging.listSubscriberLogs(subscriberId, [Query.equal("topic", topicId)]);
}

export async function createMessagingEmail(
	client: Client,
	messageId: string,
	subject: string,
	content: string,
	topics?: string[],
	users?: string[],
	targets?: string[],
	cc?: string[],
	bcc?: string[],
	attachments?: string[],
	draft?: boolean,
	html?: boolean,
	scheduledAt?: string
): Promise<Models.Message> {
	const messaging = new Messaging(client);
	return messaging.createEmail(
		messageId,
		subject,
		content,
		topics,
		users,
		targets,
		cc,
		bcc,
		attachments,
		draft,
		html,
		scheduledAt
	);
}

export async function createMessagingPush(
	client: Client,
	messageId: string,
	title: string,
	body: string,
	topics?: string[],
	users?: string[],
	targets?: string[],
	data?: object,
	action?: string,
	image?: string,
	icon?: string,
	sound?: string,
	color?: string,
	tag?: string,
	badge?: number,
	draft?: boolean,
	scheduledAt?: string
): Promise<Models.Message> {
	const messaging = new Messaging(client);
	return messaging.createPush(
		messageId,
		title,
		body,
		topics,
		users,
		targets,
		data,
		action,
		image,
		icon,
		sound,
		color,
		tag,
		badge,
		draft,
		scheduledAt
	);
}

export async function createMessagingSms(
	client: Client,
	messageId: string,
	content: string,
	topics?: string[],
	users?: string[],
	targets?: string[],
	draft?: boolean,
	scheduledAt?: string
): Promise<Models.Message> {
	const messaging = new Messaging(client);
	return messaging.createSms(
		messageId,
		content,
		topics,
		users,
		targets,
		draft,
		scheduledAt
	);
}

export async function getMessagingMessage(
	client: Client,
	messageId: string
): Promise<Models.Message> {
	const messaging = new Messaging(client);
	return messaging.getMessage(messageId);
}

export async function listMessagingMessages(
	client: Client,
	queries?: string[]
): Promise<Models.MessageList> {
	const messaging = new Messaging(client);
	return messaging.listMessages(queries);
}

export async function updateMessagingEmail(
	client: Client,
	messageId: string,
	topics?: string[],
	users?: string[],
	targets?: string[],
	subject?: string,
	content?: string,
	draft?: boolean,
	html?: boolean,
	cc?: string[],
	bcc?: string[],
	scheduledAt?: string
): Promise<Models.Message> {
	const messaging = new Messaging(client);
	return messaging.updateEmail(
		messageId,
		topics,
		users,
		targets,
		subject,
		content,
		draft,
		html,
		cc,
		bcc,
		scheduledAt
	);
}

export async function updateMessagingPush(
	client: Client,
	messageId: string,
	topics?: string[],
	users?: string[],
	targets?: string[],
	title?: string,
	body?: string,
	data?: object,
	action?: string,
	image?: string,
	icon?: string,
	sound?: string,
	color?: string,
	tag?: string,
	badge?: number,
	draft?: boolean,
	scheduledAt?: string
): Promise<Models.Message> {
	const messaging = new Messaging(client);
	return messaging.updatePush(
		messageId,
		topics,
		users,
		targets,
		title,
		body,
		data,
		action,
		image,
		icon,
		sound,
		color,
		tag,
		badge,
		draft,
		scheduledAt
	);
}

export async function updateMessagingSms(
	client: Client,
	messageId: string,
	topics?: string[],
	users?: string[],
	targets?: string[],
	content?: string,
	draft?: boolean,
	scheduledAt?: string
): Promise<Models.Message> {
	const messaging = new Messaging(client);
	return messaging.updateSms(
		messageId,
		topics,
		users,
		targets,
		content,
		draft,
		scheduledAt
	);
}

export async function deleteMessagingMessage(
	client: Client,
	messageId: string
): Promise<{}> {
	// Note: Appwrite doesn't support deleting messages directly
	// Messages are sent and cannot be recalled
	throw new Error("Appwrite does not support deleting messages after creation. Messages are automatically sent or scheduled.");
}

export async function listMessagingMessageLogs(
	client: Client,
	messageId: string,
	queries?: string[]
): Promise<Models.LogList> {
	const messaging = new Messaging(client);
	return messaging.listMessageLogs(messageId, queries);
}

export async function listMessagingTargets(
	client: Client,
	messageId: string,
	queries?: string[]
): Promise<Models.TargetList> {
	const messaging = new Messaging(client);
	if (queries && queries.length > 0) {
		return messaging.listTargets(messageId, queries);
	}
	return messaging.listTargets(messageId);
}

// AVATARS FUNCTIONS
export async function getAvatarsBrowserFavicon(
	client: Client,
	browser: Browser,
	width?: number,
	height?: number,
	quality?: number
): Promise<ArrayBuffer> {
	const avatars = new Avatars(client);
	return avatars.getBrowser(browser, width, height, quality);
}

export async function getAvatarsCreditCardIcon(
	client: Client,
	code: CreditCard,
	width?: number,
	height?: number
): Promise<ArrayBuffer> {
	const avatars = new Avatars(client);
	return avatars.getCreditCard(code, width, height);
}

export async function getAvatarsFavicon(
	client: Client,
	url: string
): Promise<ArrayBuffer> {
	const avatars = new Avatars(client);
	return avatars.getFavicon(url);
}

export async function getAvatarsFlag(
	client: Client,
	code: Flag,
	width?: number,
	height?: number,
	quality?: number
): Promise<ArrayBuffer> {
	const avatars = new Avatars(client);
	return avatars.getFlag(code, width, height, quality);
}

export async function getAvatarsImage(
	client: Client,
	url: string,
	width?: number,
	height?: number
): Promise<ArrayBuffer> {
	const avatars = new Avatars(client);
	return avatars.getImage(url, width, height);
}

export async function getAvatarsInitials(
	client: Client,
	name?: string,
	width?: number,
	height?: number,
	background?: string
): Promise<ArrayBuffer> {
	const avatars = new Avatars(client);
	return avatars.getInitials(name, width, height, background);
}

export async function getAvatarsQR(
	client: Client,
	text: string,
	size?: number,
	margin?: number,
	download?: boolean
): Promise<ArrayBuffer> {
	const avatars = new Avatars(client);
	return avatars.getQR(text, size, margin, download);
}

// LOCALE FUNCTIONS
export async function getLocaleUserLocale(
	client: Client
): Promise<Models.Locale> {
	const locale = new Locale(client);
	return locale.get();
}

export async function getLocaleCodes(
	client: Client
): Promise<Models.LocaleCodeList> {
	const locale = new Locale(client);
	return locale.listCodes();
}

export async function getLocaleContinents(
	client: Client
): Promise<Models.ContinentList> {
	const locale = new Locale(client);
	return locale.listContinents();
}

export async function getLocaleCountries(
	client: Client
): Promise<Models.CountryList> {
	const locale = new Locale(client);
	return locale.listCountries();
}

export async function getLocaleEUCountries(
	client: Client
): Promise<Models.CountryList> {
	const locale = new Locale(client);
	return locale.listCountriesEU();
}

export async function getLocaleCountriesPhones(
	client: Client
): Promise<Models.PhoneList> {
	const locale = new Locale(client);
	return locale.listCountriesPhones();
}

export async function getLocaleCurrencies(
	client: Client
): Promise<Models.CurrencyList> {
	const locale = new Locale(client);
	return locale.listCurrencies();
}

export async function getLocaleLanguages(
	client: Client
): Promise<Models.LanguageList> {
	const locale = new Locale(client);
	return locale.listLanguages();
}

// TOKENS FUNCTIONS
export async function createFileToken(
	client: Client,
	bucketId: string,
	fileId: string,
	expire?: string
): Promise<Models.ResourceToken> {
	const tokens = new Tokens(client);
	return tokens.createFileToken(bucketId, fileId, expire);
}

export async function deleteToken(
	client: Client,
	tokenId: string
): Promise<void> {
	const tokens = new Tokens(client);
	await tokens.delete(tokenId);
}

export async function getToken(
	client: Client,
	tokenId: string
): Promise<Models.ResourceToken> {
	const tokens = new Tokens(client);
	return tokens.get(tokenId);
}

export async function listTokens(
	client: Client,
	bucketId: string,
	fileId: string,
	queries?: string[]
): Promise<Models.ResourceTokenList> {
	const tokens = new Tokens(client);
	if (queries && queries.length > 0) {
		return tokens.list(bucketId, fileId, queries);
	}
	return tokens.list(bucketId, fileId);
}

export async function updateToken(
	client: Client,
	tokenId: string,
	expire?: string
): Promise<Models.ResourceToken> {
	const tokens = new Tokens(client);
	return tokens.update(tokenId, expire);
}
