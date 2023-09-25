import { Client, Databases, Functions, Storage, InputFile, Models, Query } from 'node-appwrite';

export async function getAppwriteClient(endpoint: string, projectId: string, apiKey: string,): Promise<Client> {
	const client = new Client().setEndpoint(endpoint).setProject(projectId).setKey(apiKey);
	console.log("Appwrite client created");
	return client;
}

export async function getAppwriteDatabase(client: Client, databaseId?: string): Promise<Databases> {
	const database = new Databases(client);
	return database;
}

export async function listAppwriteDatabases(client: Client): Promise<Models.DatabaseList> {
	const database = await getAppwriteDatabase(client);
	return database.list();
}

export async function getAppwriteCollection(client: Client, databaseId: string, collectionId: string): Promise<Models.Collection> {
	const database = await getAppwriteDatabase(client);
	return database.getCollection(databaseId, collectionId);
}

export async function getAppwriteCollectionIndices(client: Client, databaseId: string, collectionId: string): Promise<Models.IndexList> {
	const database = await getAppwriteDatabase(client);
	return database.listIndexes(databaseId, collectionId);
}

export async function listAppwriteCollections(client: Client, databaseId: string): Promise<Models.CollectionList> {
	const database = await getAppwriteDatabase(client);
	return database.listCollections(databaseId);
}

export async function getAppwriteDocument(client: Client, databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Models.Document> {
	const database = await getAppwriteDatabase(client);
	if (queries !== undefined && queries.length > 0) {
		return database.getDocument(databaseId, collectionId, documentId, queries);
	}
	return database.getDocument(databaseId, collectionId, documentId);
}

export async function listAppwriteDocuments(client: Client, databaseId: string, collectionId: string, queries?: string[]): Promise<Models.DocumentList<Models.Document>> {
	const database = await getAppwriteDatabase(client);
	if (queries !== undefined && queries.length > 0) {
		return database.listDocuments(databaseId, collectionId, queries);
	}
	return database.listDocuments(databaseId, collectionId);
}

export async function createAppwriteDocument(client: Client, databaseId: string, collectionId: string, documentId: string, data: any): Promise<Models.Document> {
	const database = await getAppwriteDatabase(client);
	return database.createDocument(databaseId, collectionId, documentId, data);
}

export async function updateAppwriteDocument(client: Client, databaseId: string, collectionId: string, documentId: string, data: any): Promise<Models.Document> {
	const database = await getAppwriteDatabase(client);
	return database.updateDocument(databaseId, collectionId, documentId, data);
}

export async function deleteAppwriteDocument(client: Client, databaseId: string, collectionId: string, documentId: string): Promise<string> {
	const database = await getAppwriteDatabase(client);
	return database.deleteDocument(databaseId, collectionId, documentId);
}

export async function getAppwriteFunction(client: Client, functionId: string): Promise<Models.Function> {
	const functions = new Functions(client);
	return functions.get(functionId);
}

export async function listAppwriteFunctions(client: Client): Promise<Models.FunctionList> {
	const functions = new Functions(client);
	return functions.list();
}

export async function runAppwriteFunction(client: Client, functionId: string, data: any): Promise<Models.Execution> {
	const functions = new Functions(client);
	return functions.createExecution(functionId, data);
}

export async function getAppwriteStorageFile(client: Client, bucketId: string, fileId: string): Promise<Models.File> {
	const storage = new Storage(client);
	return storage.getFile(bucketId, fileId);
}

export async function listAppwriteBuckets(client: Client): Promise<Models.BucketList> {
	const storage = new Storage(client);
	return storage.listBuckets();
}

export async function listAppwriteStorage(client: Client, bucketId: string): Promise<Models.FileList> {
	const storage = new Storage(client);
	return storage.listFiles(bucketId);
}

export async function createAppwriteStorageFile(client: Client, bucketId: string, file: InputFile, fileName: string, mimeType: string[]): Promise<Models.File> {
	const storage = new Storage(client);
	return storage.createFile(bucketId, fileName, file, mimeType);
}

export async function createAppwriteStorageBucket(client: Client, bucketId: string, name: string, permissions?: string[], fileSecurity?: boolean | undefined, enabled?: boolean | undefined, maximumFileSize?: number, allowedFileExtensions?: string[] | undefined, compression?: string, encryption?: boolean | undefined, antivirus?: boolean | undefined,): Promise<Models.Bucket> {
	const storage = new Storage(client);
	return storage.createBucket(bucketId, name, permissions, fileSecurity, enabled, maximumFileSize, allowedFileExtensions, compression, encryption, antivirus);
}

export async function deleteAppwriteStorageFile(client: Client, bucketId: string, fileId: string): Promise<string> {
	const storage = new Storage(client);
	return storage.deleteFile(bucketId, fileId);
}

export async function deleteAppwriteStorageBucket(client: Client, bucketId: string): Promise<string> {
	const storage = new Storage(client);
	return storage.deleteBucket(bucketId);
}

export const convertStringToQuery = (query: string, index: string, value?: string | number, value2?: string) => {
	switch (query) {
		case 'select':
			if (value) {
				return Query.select(JSON.parse(value.toString()));
			}
		case 'equal':
			if (value) {
				return Query.equal(index, JSON.parse(value.toString()));
			}
		case 'not_equal':
			if (value) {
				return Query.notEqual(index.toString(), JSON.parse(value.toString()));
			}
		case 'less_than':
			if (value) {
				return Query.lessThan(index.toString(), JSON.parse(value.toString()));
			}
		case 'greater_than':
			if (value) {
				return Query.greaterThan(index.toString(), JSON.parse(value.toString()));
			}
		case 'less_than_or_equal':
			if (value) {
				return Query.lessThanEqual(index.toString(), JSON.parse(value.toString()));
			}
		case 'greater_than_or_equal':
			if (value) {
				return Query.greaterThanEqual(index.toString(), JSON.parse(value.toString()));
			}
		case 'greater_than':
			if (value) {
				return Query.greaterThan(value.toString(), JSON.parse(value.toString()));
			}
		case 'between':
			if (index && value && value2) {
				return Query.between(index.toString(), value.toString(), JSON.parse(value2.toString()));
			}
		case 'is_null':
			if (value) {
				return Query.isNull(index.toString());
			}
		case 'is_not_null':
			if (value) {
				return Query.isNotNull(index.toString());
			}
		case 'starts_with':
			if (value) {
				return Query.startsWith(index.toString(), JSON.parse(value.toString()));
			}
		case 'ends_with':
			if (value) {
				return Query.endsWith(index.toString(), JSON.parse(value.toString()));
			}
		case 'search':
			if (value) {
				return Query.search(index.toString(), JSON.parse(value.toString()));
			}
		case 'order_descending':
			if (value) {
				return Query.orderDesc(index.toString());
			}
		case 'order_ascending':
			if (value) {
				return Query.orderAsc(index.toString());
			}
		case 'limit':
			if (value) {
				return Query.limit(JSON.parse(value.toString()));
			}
		case 'offset':
			if (value) {
				return Query.offset(JSON.parse(value.toString()));
			}
		case 'cursor_after':
			if (value) {
				return Query.cursorAfter(JSON.parse(value.toString()));
			}
		case 'cursor_before':
			if (value) {
				return Query.cursorBefore(JSON.parse(value.toString()));
			}
		default:
			return "";
	}
}
