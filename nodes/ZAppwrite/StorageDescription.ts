import { INodeProperties } from "n8n-workflow";

export const storageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		required: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
			},
		},
		options: [
			{
				name: 'Create Bucket',
				value: 'createBucket',
				action: 'Create a storage bucket',
				description: 'Create a bucket in the current project',
			},
			{
				name: 'Create File',
				value: 'createFile',
				action: 'Create a file in bucket',
				description: 'Create a file in a given bucket',
			},
			{
				name: 'Delete Bucket',
				value: 'deleteBucket',
				action: 'Delete a storage bucket',
				description: 'Delete a bucket from the current project',
			},
			{
				name: 'Delete File',
				value: 'deleteFile',
				action: 'Delete a file from bucket by id',
				description: 'Delete a file from a given bucket',
			},
			{
				name: 'Get File',
				value: 'getFile',
				action: 'Get a file from bucket by id',
				description: 'Get a file from a given bucket',
			},
			{
				name: 'List Buckets',
				value: 'listBuckets',
				action: 'List storage buckets',
				description: 'List your Storage Buckets in the current project',
			},
			{
				name: 'List Files',
				value: 'listFiles',
				action: 'List files in bucket',
				description: 'List files in a given bucket',
			},
		],
		default: 'listFiles',
	},
];

export const storageFields: INodeProperties[] = [
	{
		displayName: 'Bucket ID',
		name: 'bucketId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'listFiles',
					'getFile',
					'createFile',
					'deleteFile',
					'deleteBucket',
				],
			},
		},
		default: '',
		description: 'Bucket ID to perform operation on',
	},
	{
		displayName: 'File ID',
		name: 'fileId',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'getFile',
					'deleteFile',
				],
			},
		},
		default: '',
		description: 'File ID to perform operation on',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'createFile',
				],
			},
		},
		default: '',
		description: 'File name to create',
	},
	{
		displayName: 'File',
		name: 'file',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'createFile',
				],
			},
		},
		default: '',
		description: 'File to upload',
	},
	{
		displayName: 'Mime Type',
		name: 'mimeType',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'createFile',
				],
			},
		},
		default: '',
		description: 'Mime type of file to upload',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'createBucket',
				],
			},
		},

		default: '',
		description: 'Name of bucket to create',
	},
	{
		displayName: 'Permissions',
		name: 'permissions',
		type: 'multiOptions',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'createBucket',
				],
			},
		},
		options: [
			{
				name: 'Read',
				value: 'read',
				description: 'Read from bucket',
			},
			{
				name: 'Write',
				value: 'write',
				description: 'Write to bucket',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete from bucket',
			},
		],
		default: [],
		description: 'Permissions to set on bucket',
	},
	{
		displayName: 'File Security',
		name: 'fileSecurity',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'createBucket',
				],
			},
		},
		default: false,
		description: 'Whether to enable file security on bucket',
	},
	{
		displayName: 'Enabled',
		name: 'enabled',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'createBucket',
				],
			},
		},
		default: true,
		description: 'Whether to enable bucket',
	},
	{
		displayName: 'Maximum File Size',
		name: 'maximumFileSize',
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'createBucket',
				],
			},
		},
		default: 0,
		description: 'Maximum file size in bytes',
	},
	{
		displayName: 'Allowed File Extensions',
		name: 'allowedFileExtensions',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'createBucket',
				],
			},
		},
		default: '',
		description: 'Allowed file extensions, comma-separated',
	},
	{
		displayName: 'Compression',
		name: 'compression',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'createBucket',
				],
			},
		},
		options: [
			{
				name: 'Gzip',
				value: 'gzip',
				description: 'Gzip compression',
			},
			{
				name: 'None',
				value: '',
				description: 'No compression',
			},
			{
				name: 'Zstd',
				value: 'zstd',
				description: 'Zstd compression',
			},
		],
		default: '',
		description: 'Compression to use on bucket',
	},
	{
		displayName: 'Encryption',
		name: 'encryption',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'createBucket',
				],
			},
		},
		default: false,
		description: 'Whether to enable encryption on bucket',
	},
	{
		displayName: 'Antivirus',
		name: 'antivirus',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [
					'storage',
				],
				operation: [
					'createBucket',
				],
			},
		},
		default: false,
		description: 'Whether to enable antivirus on bucket',
	},
];
