import { INodeProperties } from "n8n-workflow";

export const usersOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		type: 'options',
		required: true,
		options: [
			{
				name: 'Create User',
				displayName: "Create User",
				value: 'createUser',
				action: 'Create a user',
				description: 'Create a new user in the current project',
			},
			{
				name: 'Delete User',
				displayName: "Delete User",
				value: 'deleteUser',
				action: 'Delete a user',
				description: 'Delete a specified user by user ID from the current project',
			},
			{
				name: 'Delete User Session',
				displayName: "Delete User Session",
				value: 'deleteUserSession',
				action: 'Delete a user session',
				description: 'Delete a specified user\'s session by user ID from the current project',
			},
			{
				name: 'Delete User Sessions',
				displayName: "Delete User Sessions",
				value: 'deleteUserSessions',
				action: 'Delete a users sessions',
				description: 'Delete a specified user\'s sessions (multiple) by user ID from the current project',
			},
			{
				name: 'Get User',
				displayName: "Get User",
				value: 'getUser',
				action: 'Get a user',
				description: 'Get a specified user by user ID from the current project',
			},
			{
				name: 'Get User Preferences',
				displayName: "Get User Preferences",
				value: 'getUserPreferences',
				action: 'Get a users preferences',
				description: 'Get a specified user\'s preferences by user ID from the current project',
			},
			{
				name: 'List User Identities',
				displayName: "List User Identities",
				value: 'listUserIdentities',
				action: 'List a users identities',
				description: 'List a specified user\'s identities by user ID from the current project',
			},
			{
				name: 'List User Logs',
				displayName: "List User Logs",
				value: 'listUserLogs',
				action: 'List a users logs',
				description: 'List a specified user\'s logs by user ID from the current project',
			},
			{
				name: 'List User Memberships',
				displayName: "List User Memberships",
				value: 'listUserMemberships',
				action: 'List a users memberships',
				description: 'List a specified user\'s memberships by user ID from the current project',
			},
			{
				name: 'List User Sessions',
				displayName: "List User Sessions",
				value: 'listUserSessions',
				action: 'List a users sessions',
				description: 'List a specified user\'s sessions by user ID from the current project',
			},
			{
				name: 'List Users',
				displayName: "List Users",
				value: 'listUsers',
				action: 'List users',
				description: 'List Users in the current project',
			},
			{
				name: 'Update User',
				displayName: "Update User",
				value: 'updateUser',
				action: 'Update a user',
				description: 'Update a specified user by user ID from the current project',
			},
		],
		default: 'getUser',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
			},
		},
	},
];

export const usersFields: INodeProperties[] = [
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		requiresDataPath: 'single',
		description: 'User ID to perform operation on',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'deleteUser',
					'deleteUserSession',
					'deleteUserSessions',
					'getUser',
					'getUserPreferences',
					'listUserIdentities',
					'listUserLogs',
					'listUserMemberships',
					'listUserSessions',
					'updateUser',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'User ID (Optional)',
		name: 'userIdOptional',
		type: 'string',
		requiresDataPath: 'single',
		description: 'Optional parameter to create user with specific ID, otherwise randomly generated ID will be used',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'createUser',
				],
			},
		},
		default: 'unique',
	},
	{
		displayName: 'Session ID',
		name: 'sessionId',
		type: 'string',
		required: true,
		requiresDataPath: 'single',
		description: 'Session ID to perform operation on',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'deleteUserSession',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@example.com',
		required: true,
		requiresDataPath: 'single',
		description: 'Email to create or update user with',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'createUser',
					'updateUser',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Verify Email?',
		name: 'verifyEmail',
		type: 'boolean',
		default: false,
		required: true,
		requiresDataPath: 'single',
		description: 'Whether or not to verify the email',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'createUser',
					'updateUser',
				],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		placeholder: 'John Doe',
		requiresDataPath: 'single',
		description: 'Name to create or update user with',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'createUser',
					'updateUser',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		placeholder: '+1 555 555 5555',
		requiresDataPath: 'single',
		description: 'Phone to create or update user with',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'createUser',
					'updateUser',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Verify Phone?',
		name: 'verifyPhone',
		type: 'boolean',
		default: false,
		required: true,
		requiresDataPath: 'single',
		description: 'Whether or not to verify the phone',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'createUser',
					'updateUser',
				],
			},
		},
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: {
			password: true,
		},
		placeholder: 'Password',
		required: true,
		requiresDataPath: 'single',
		description: 'Password to create or update user with',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'createUser',
					'updateUser',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'New Password',
		name: 'newPassword',
		type: 'string',
		typeOptions: {
			password: true,
		},
		placeholder: 'New Password',
		requiresDataPath: 'single',
		description: 'New Password to update user with',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'updateUser',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Preferences',
		name: 'preferences',
		type: 'json',
		placeholder: '{ "key": "value" }',
		requiresDataPath: 'multiple',
		description: 'Preferences to create or update user with',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'updateUser',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Labels',
		name: 'labels',
		type: 'json',
		placeholder: '[ "label1", "label2" ]',
		requiresDataPath: 'single',
		description: 'Labels to create or update user with',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'updateUser',
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'boolean',
		default: false,
		required: true,
		requiresDataPath: 'single',
		description: 'Whether or not the user is enabled (e.g. "fake deleted")',
		displayOptions: {
			show: {
				resource: [
					'users',
				],
				operation: [
					'updateUser',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Queries',
		description: 'Queries to filter the documents by. [learn more about filtering](https://appwrite.io/docs/filters).',
		default: {},
		options: [
			{
				displayName: 'Queries',
				name: 'queries',
				placeholder: 'Add Query',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				options: [
					{
						name: 'queriesData',
						displayName: 'Queries Data',
						values: [
							{
								displayName: 'Index to Select',
								name: 'index',
								type: 'string',
								default: '',
								hint: 'Index to select, if needed',
								requiresDataPath: 'single',
							},
							{
								displayName: 'Value 1',
								name: 'value1',
								type: 'string',
								default: '',
								requiresDataPath: 'multiple',
								hint: 'First value for queries, such as what the index is equal to, or the first value of a between',
							},
							{
								displayName: 'Value 2',
								name: 'value2',
								type: 'string',
								default: '',
								requiresDataPath: 'single',
								hint: 'Second value for between and a few other queries, ignore if not needed',
							},
							{
								displayName: 'Query',
								name: 'query',
								type: 'options',
								default: 'equal',
								options: [
									{
										name: 'Between',
										value: 'between',
										description: 'Returns document if attribute value falls between the two values. The boundary values are inclusive and can be strings or numbers.',
									},
									{
										name: 'Cursor After',
										value: 'cursor_after',
										description: 'Places the cursor after the specified resource ID. Used for pagination.',
									},
									{
										name: 'Cursor Before',
										value: 'cursor_before',
										description: 'Places the cursor before the specified resource ID. Used for pagination.',
									},
									{
										name: 'Ends With',
										value: 'ends_with',
										description: 'Returns documents if a string attributes ends with a substring',
									},
									{
										name: 'Equal',
										value: 'equal',
										description: 'Returns document if attribute is equal to any value in the provided array',
									},
									{
										name: 'Greater Than',
										value: 'greater_than',
										description: 'Returns document if attribute is greater than the provided value',
									},
									{
										name: 'Greater Than or Equal',
										value: 'greater_than_or_equal',
										description: 'Returns document if attribute is greater than or equal to the provided value',
									},
									{
										name: 'Is Not Null',
										value: 'is_not_null',
										description: 'Returns documents where attribute value is not null',
									},
									{
										name: 'Is Null',
										value: 'is_null',
										description: 'Returns documents where attribute value is null',
									},
									{
										name: 'Less Than',
										value: 'less_than',
										description: 'Returns document if attribute is less than the provided value',
									},
									{
										name: 'Less Than or Equal',
										value: 'less_than_or_equal',
										description: 'Returns document if attribute is less than or equal to the provided value',
									},
									{
										name: 'Limit',
										value: 'limit',
										description: 'Limits the number of results returned by the query. Used for pagination. If the limit query is not used, the limit defaults to 25 results.',
									},
									{
										name: 'Not Equal',
										value: 'not_equal',
										description: 'Returns document if attribute is not equal to any value in the provided array',
									},
									{
										name: 'Offset',
										value: 'offset',
										description: 'Offset the results returned by skipping some of the results. Used for pagination.',
									},
									{
										name: 'Order Ascending',
										value: 'order_ascending',
										description: 'Orders results in ascending order by attribute. Attribute must be indexed. Pass in an empty string to return in natural order.',
									},
									{
										name: 'Order Descending',
										value: 'order_descending',
										description: 'Orders results in descending order by attribute. Attribute must be indexed. Pass in an empty string to return in natural order.',
									},
									{
										name: 'Search',
										value: 'search',
										description: 'Searches string attributes for provided keywords. Requires a Full-text index on queried attributes.',
									},
									{
										name: 'Select',
										value: 'select',
										description: 'Select which attributes should be returned from a document',
									},
									{
										name: 'Starts With',
										value: 'starts_with',
										description: 'Returns documents if a string attributes starts with a substring',
									},
								],
							},
						],
					},
				],
				default: {},
				description: 'A query to filter the data by',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'users'
				],
				operation: [
					'listUsers',
				],
			},
		},
	},
];
