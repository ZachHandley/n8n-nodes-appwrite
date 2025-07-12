import { INodeProperties } from "n8n-workflow";

export const tokensOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		required: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'tokens',
				],
			},
		},
		options: [
			{
				name: 'Create File Token',
				value: 'createFileToken',
				action: 'Create a file token',
				description: 'Create a new token for a specific file',
			},
			{
				name: 'Delete Token',
				value: 'deleteToken',
				action: 'Delete a token',
				description: 'Delete a token by its unique ID',
			},
			{
				name: 'Get Token',
				value: 'getToken',
				action: 'Get a token',
				description: 'Get a token by its unique ID',
			},
			{
				name: 'List Tokens',
				value: 'listTokens',
				action: 'List tokens',
				description: 'List all tokens created for a specific file',
			},
			{
				name: 'Update Token',
				value: 'updateToken',
				action: 'Update a token',
				description: 'Update a token by its unique ID',
			},
		],
		default: 'listTokens',
	},
];

export const tokensFields: INodeProperties[] = [
	{
		displayName: 'Bucket ID',
		name: 'bucketId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'tokens',
				],
				operation: [
					'createFileToken',
					'listTokens',
				],
			},
		},
		default: '',
		description: 'Storage bucket unique ID. You can create a new storage bucket using the Storage service.',
	},
	{
		displayName: 'Expire',
		name: 'expire',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'tokens',
				],
				operation: [
					'createFileToken',
					'updateToken',
				],
			},
		},
		default: '',
		description: 'Token expiry date in ISO 8601 format (optional)',
	},
	{
		displayName: 'File ID',
		name: 'fileId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'tokens',
				],
				operation: [
					'createFileToken',
					'listTokens',
				],
			},
		},
		default: '',
		description: 'File unique ID',
	},
	{
		displayName: 'Token ID',
		name: 'tokenId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'tokens',
				],
				operation: [
					'deleteToken',
					'getToken',
					'updateToken',
				],
			},
		},
		default: '',
		description: 'Token unique ID',
	},
];