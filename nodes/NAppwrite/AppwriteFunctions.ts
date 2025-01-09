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
} from "node-appwrite";
import { InputFile } from "node-appwrite/dist/inputFile";

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
		//TODO: Implement this for all user types
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
				// @ts-ignore
				user = await users.createSHAUser(id, email, password, name, phone);
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
	data: any
): Promise<Models.Execution> {
	const functions = new Functions(client);
	return functions.createExecution(functionId, data);
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
	file: InputFile,
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
	if (typeof value === "number") return value;
	try {
		return JSON.parse(value);
	} catch {
		return value; // Return original value if not JSON
	}
};

export const convertStringToQuery = (
	query: string,
	index: string,
	value?: string | number,
	value2?: string
) => {
	switch (query.toLowerCase()) {
		case "select":
			if (value) {
				return Query.select(safeJSONParse(value));
			}
			return "";
		case "equal":
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
