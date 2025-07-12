import { INodeProperties } from "n8n-workflow";

export const messagingOperations: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		noDataExpression: true,
		type: "options",
		options: [
			// Message Operations
			{
				name: "Create Email",
				displayName: "Create Email",
				value: "createEmail",
				action: "Create email message",
				description: "Create a new email message",
			},
			// Provider Operations
			{
				name: "Create Provider",
				displayName: "Create Provider",
				value: "createProvider",
				action: "Create messaging provider",
				description: "Create a new messaging provider",
			},
			{
				name: "Create Push",
				displayName: "Create Push",
				value: "createPush",
				action: "Create push notification",
				description: "Create a new push notification",
			},
			{
				name: "Create SMS",
				displayName: "Create SMS",
				value: "createSms",
				action: "Create SMS message",
				description: "Create a new SMS message",
			},
			// Subscriber Operations
			{
				name: "Create Subscriber",
				displayName: "Create Subscriber",
				value: "createSubscriber",
				action: "Create subscriber",
				description: "Create a new subscriber",
			},
			// Topic Operations
			{
				name: "Create Topic",
				displayName: "Create Topic",
				value: "createTopic",
				action: "Create topic",
				description: "Create a new topic",
			},
			{
				name: "Delete Message",
				displayName: "Delete Message",
				value: "deleteMessage",
				action: "Delete message",
				description: "Delete a message by its unique ID",
			},
			{
				name: "Delete Provider",
				displayName: "Delete Provider",
				value: "deleteProvider",
				action: "Delete provider",
				description: "Delete a provider by its unique ID",
			},
			{
				name: "Delete Subscriber",
				displayName: "Delete Subscriber",
				value: "deleteSubscriber",
				action: "Delete subscriber",
				description: "Delete a subscriber by its unique ID",
			},
			{
				name: "Delete Topic",
				displayName: "Delete Topic",
				value: "deleteTopic",
				action: "Delete topic",
				description: "Delete a topic by its unique ID",
			},
			{
				name: "Get Message",
				displayName: "Get Message",
				value: "getMessage",
				action: "Get message by ID",
				description: "Get a message by its unique ID",
			},
			{
				name: "Get Provider",
				displayName: "Get Provider",
				value: "getProvider",
				action: "Get provider by ID",
				description: "Get a provider by its unique ID",
			},
			{
				name: "Get Subscriber",
				displayName: "Get Subscriber",
				value: "getSubscriber",
				action: "Get subscriber by ID",
				description: "Get a subscriber by its unique ID",
			},
			{
				name: "Get Topic",
				displayName: "Get Topic",
				value: "getTopic",
				action: "Get topic by ID",
				description: "Get a topic by its unique ID",
			},
			{
				name: "List Message Logs",
				displayName: "List Message Logs",
				value: "listMessageLogs",
				action: "List message logs",
				description: "Get the message activity logs",
			},
			{
				name: "List Messages",
				displayName: "List Messages",
				value: "listMessages",
				action: "List all messages",
				description: "Get a list of all messages",
			},
			{
				name: "List Provider Logs",
				displayName: "List Provider Logs",
				value: "listProviderLogs",
				action: "List provider logs",
				description: "Get the provider activity logs",
			},
			{
				name: "List Providers",
				displayName: "List Providers",
				value: "listProviders",
				action: "List all providers",
				description: "Get a list of all providers",
			},
			{
				name: "List Subscriber Logs",
				displayName: "List Subscriber Logs",
				value: "listSubscriberLogs",
				action: "List subscriber logs",
				description: "Get the subscriber activity logs",
			},
			{
				name: "List Subscribers",
				displayName: "List Subscribers",
				value: "listSubscribers",
				action: "List all subscribers",
				description: "Get a list of all subscribers",
			},
			{
				name: "List Targets",
				displayName: "List Targets",
				value: "listTargets",
				action: "List message targets",
				description: "Get a list of the targets associated with a message",
			},
			{
				name: "List Topic Logs",
				displayName: "List Topic Logs",
				value: "listTopicLogs",
				action: "List topic logs",
				description: "Get the topic activity logs",
			},
			{
				name: "List Topics",
				displayName: "List Topics",
				value: "listTopics",
				action: "List all topics",
				description: "Get a list of all topics",
			},
			{
				name: "Update Email",
				displayName: "Update Email",
				value: "updateEmail",
				action: "Update email message",
				description: "Update an email message",
			},
			{
				name: "Update Provider",
				displayName: "Update Provider",
				value: "updateProvider",
				action: "Update provider",
				description: "Update a provider by its unique ID",
			},
			{
				name: "Update Push",
				displayName: "Update Push",
				value: "updatePush",
				action: "Update push notification",
				description: "Update a push notification",
			},
			{
				name: "Update SMS",
				displayName: "Update SMS",
				value: "updateSms",
				action: "Update SMS message",
				description: "Update an SMS message",
			},
			{
				name: "Update Topic",
				displayName: "Update Topic",
				value: "updateTopic",
				action: "Update topic",
				description: "Update a topic by its unique ID",
			},
		],
		default: "listProviders",
		displayOptions: {
			show: {
				resource: ["messaging"],
			},
		},
	},
];

export const messagingFields: INodeProperties[] = [
	// Provider Type Selection
	{
		displayName: "Provider Type",
		name: "providerType",
		type: "options",
		required: true,
		options: [
			{
				name: "APNS (Apple Push)",
				value: "apns",
			},
			{
				name: "FCM (Firebase)",
				value: "fcm",
			},
			{
				name: "Mailgun",
				value: "mailgun",
			},
			{
				name: "MSG91",
				value: "msg91",
			},
			{
				name: "Sendgrid",
				value: "sendgrid",
			},
			{
				name: "SMTP",
				value: "smtp",
			},
			{
				name: "Telesign",
				value: "telesign",
			},
			{
				name: "Textmagic",
				value: "textmagic",
			},
			{
				name: "Twilio",
				value: "twilio",
			},
			{
				name: "Vonage",
				value: "vonage",
			},
		],
		default: "smtp",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
			},
		},
	},

	// Provider ID
	{
		displayName: "Provider ID",
		name: "providerId",
		type: "string",
		required: true,
		default: "unique()",
		description:
			"Provider ID. Use unique() to generate a random ID or provide custom ID.",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: [
					"createProvider",
					"getProvider",
					"updateProvider",
					"deleteProvider",
					"listProviderLogs",
				],
			},
		},
	},

	// Provider Name
	{
		displayName: "Provider Name",
		name: "providerName",
		type: "string",
		required: true,
		default: "",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
			},
		},
	},

	// SMTP Provider Fields
	{
		displayName: "Host",
		name: "host",
		type: "string",
		required: true,
		default: "",
		description: "SMTP server host",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["smtp"],
			},
		},
	},

	{
		displayName: "Port",
		name: "port",
		type: "number",
		default: 587,
		description: "SMTP server port",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["smtp"],
			},
		},
	},

	{
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "SMTP username",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["smtp"],
			},
		},
	},

	{
		displayName: "Password",
		name: "password",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "SMTP password",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["smtp"],
			},
		},
	},

	// Mailgun Provider Fields
	{
		displayName: "API Key",
		name: "apiKey",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Mailgun API Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["mailgun"],
			},
		},
	},

	{
		displayName: "Domain",
		name: "domain",
		type: "string",
		default: "",
		description: "Mailgun domain",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["mailgun"],
			},
		},
	},

	// MSG91 Provider Fields
	{
		displayName: "Sender ID",
		name: "senderId",
		type: "string",
		default: "",
		description: "MSG91 Sender ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["msg91"],
			},
		},
	},

	{
		displayName: "Auth Key",
		name: "authKey",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "MSG91 Auth Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["msg91"],
			},
		},
	},

	// Sendgrid Provider Fields
	{
		displayName: "API Key",
		name: "apiKey",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Sendgrid API Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["sendgrid"],
			},
		},
	},

	// FCM Provider Fields
	{
		displayName: "Service Account JSON",
		name: "serviceAccountJSON",
		type: "json",
		default: "{}",
		description: "Firebase service account JSON",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["fcm"],
			},
		},
	},

	// APNS Provider Fields
	{
		displayName: "Auth Key",
		name: "authKey",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "APNS Auth Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["apns"],
			},
		},
	},

	{
		displayName: "Auth Key ID",
		name: "authKeyId",
		type: "string",
		default: "",
		description: "APNS Auth Key ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["apns"],
			},
		},
	},

	{
		displayName: "Team ID",
		name: "teamId",
		type: "string",
		default: "",
		description: "APNS Team ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["apns"],
			},
		},
	},

	{
		displayName: "Bundle ID",
		name: "bundleId",
		type: "string",
		default: "",
		description: "APNS Bundle ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["apns"],
			},
		},
	},

	{
		displayName: "Sandbox",
		name: "sandbox",
		type: "boolean",
		default: false,
		description: "Whether to use APNS sandbox environment",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["apns"],
			},
		},
	},

	// Telesign Provider Fields
	{
		displayName: "From",
		name: "from",
		type: "string",
		default: "",
		description: "Phone number to send from",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider"],
				providerType: ["telesign"],
			},
		},
	},

	{
		displayName: "Customer ID",
		name: "customerId",
		type: "string",
		default: "",
		description: "Telesign Customer ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["telesign"],
			},
		},
	},

	{
		displayName: "API Key",
		name: "apiKey",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Telesign API Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["telesign"],
			},
		},
	},

	// Textmagic Provider Fields
	{
		displayName: "From",
		name: "from",
		type: "string",
		default: "",
		description: "Phone number to send from",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider"],
				providerType: ["textmagic"],
			},
		},
	},

	{
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "Textmagic username",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["textmagic"],
			},
		},
	},

	{
		displayName: "API Key",
		name: "apiKey",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Textmagic API Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["textmagic"],
			},
		},
	},

	// Twilio Provider Fields
	{
		displayName: "From",
		name: "from",
		type: "string",
		default: "",
		description: "Phone number to send from",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider"],
				providerType: ["twilio"],
			},
		},
	},

	{
		displayName: "Account SID",
		name: "accountSid",
		type: "string",
		default: "",
		description: "Twilio Account SID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["twilio"],
			},
		},
	},

	{
		displayName: "Auth Token",
		name: "authToken",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Twilio Auth Token",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["twilio"],
			},
		},
	},

	// Vonage Provider Fields
	{
		displayName: "From",
		name: "from",
		type: "string",
		default: "",
		description: "Phone number to send from",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider"],
				providerType: ["vonage"],
			},
		},
	},

	{
		displayName: "API Key",
		name: "apiKey",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Vonage API Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["vonage"],
			},
		},
	},

	{
		displayName: "API Secret",
		name: "apiSecret",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Vonage API Secret",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider"],
				providerType: ["vonage"],
			},
		},
	},

	// Topic Fields
	{
		displayName: "Topic ID",
		name: "topicId",
		type: "string",
		required: true,
		default: "unique()",
		description:
			"Topic ID. Use unique() to generate a random ID or provide custom ID.",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: [
					"createTopic",
					"getTopic",
					"updateTopic",
					"deleteTopic",
					"listTopicLogs",
					"createSubscriber",
					"getSubscriber",
					"listSubscribers",
					"deleteSubscriber",
				],
			},
		},
	},

	{
		displayName: "Topic Name",
		name: "topicName",
		type: "string",
		required: true,
		default: "",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createTopic", "updateTopic"],
			},
		},
	},

	// Subscriber Fields
	{
		displayName: "Subscriber ID",
		name: "subscriberId",
		type: "string",
		required: true,
		default: "unique()",
		description:
			"Subscriber ID. Use unique() to generate a random ID or provide custom ID.",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: [
					"createSubscriber",
					"getSubscriber",
					"deleteSubscriber",
					"listSubscriberLogs",
				],
			},
		},
	},

	{
		displayName: "Target ID",
		name: "targetId",
		type: "string",
		required: true,
		default: "",
		description: "Target ID for the subscriber",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSubscriber"],
			},
		},
	},

	// Message Fields
	{
		displayName: "Message ID",
		name: "messageId",
		type: "string",
		required: true,
		default: "unique()",
		description:
			"Message ID. Use unique() to generate a random ID or provide custom ID.",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: [
					"createEmail",
					"createPush",
					"createSms",
					"getMessage",
					"updateEmail",
					"updatePush",
					"updateSms",
					"deleteMessage",
					"listMessageLogs",
					"listTargets",
				],
			},
		},
	},

	// Email Fields
	{
		displayName: "Subject",
		name: "subject",
		type: "string",
		required: true,
		default: "",
		description: "Email subject",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createEmail", "updateEmail"],
			},
		},
	},

	{
		displayName: "Content",
		name: "content",
		type: "string",
		required: true,
		default: "",
		description: "Message content",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createEmail", "updateEmail", "createSms", "updateSms"],
			},
		},
	},

	// Push Notification Fields
	{
		displayName: "Title",
		name: "title",
		type: "string",
		required: true,
		default: "",
		description: "Push notification title",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createPush", "updatePush"],
			},
		},
	},

	{
		displayName: "Body",
		name: "body",
		type: "string",
		required: true,
		default: "",
		description: "Push notification body",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createPush", "updatePush"],
			},
		},
	},

	// Additional Fields
	{
		displayName: "Additional Fields",
		name: "additionalFields",
		type: "collection",
		placeholder: "Add Field",
		default: {},
		options: [
			{
				displayName: "BCC",
				name: "bcc",
				type: "string",
				default: "",
				description: "Comma-separated list of BCC email addresses",
			},
			{
				displayName: "CC",
				name: "cc",
				type: "string",
				default: "",
				description: "Comma-separated list of CC email addresses",
			},
			{
				displayName: "Draft",
				name: "draft",
				type: "boolean",
				default: false,
				description: "Whether message is a draft",
			},
			{
				displayName: "Enabled",
				name: "enabled",
				type: "boolean",
				default: true,
				description: "Whether provider is enabled",
			},
			{
				displayName: "From Email",
				name: "fromEmail",
				type: "string",
				default: "",
				description: "Sender email address",
			},
			{
				displayName: "From Name",
				name: "fromName",
				type: "string",
				default: "",
				description: "Sender name",
			},
			{
				displayName: "HTML",
				name: "html",
				type: "boolean",
				default: false,
				description: "Whether email content is HTML",
			},
			{
				displayName: "Scheduled At",
				name: "scheduledAt",
				type: "string",
				default: "",
				description: "Scheduled delivery time in ISO 8601 format",
			},
			{
				displayName: "Targets",
				name: "targets",
				type: "string",
				default: "",
				description: "Comma-separated list of target IDs",
			},
			{
				displayName: "Topics",
				name: "topics",
				type: "string",
				default: "",
				description: "Comma-separated list of topic IDs",
			},
			{
				displayName: "Users",
				name: "users",
				type: "string",
				default: "",
				description: "Comma-separated list of user IDs",
			},
		],
		displayOptions: {
			show: {
				resource: ["messaging"],
			},
		},
	},

	// Queries field for listing operations
	{
		displayName: "Additional Fields",
		name: "additionalFields",
		type: "collection",
		placeholder: "Add Query",
		description: "Queries to filter the results by",
		default: {},
		options: [
			{
				displayName: "Queries",
				name: "queries",
				placeholder: "Add Query",
				type: "fixedCollection",
				typeOptions: {
					multipleValues: true,
				},
				options: [
					{
						name: "queriesData",
						displayName: "Queries Data",
						values: [
							{
								displayName: "Index to Select",
								name: "index",
								type: "string",
								default: "",
								hint: "Index to select, if needed",
								requiresDataPath: "single",
							},
							{
								displayName: "Value 1",
								name: "value1",
								type: "string",
								default: "",
								requiresDataPath: "multiple",
								hint: "First value for queries",
							},
							{
								displayName: "Value 2",
								name: "value2",
								type: "string",
								default: "",
								requiresDataPath: "single",
								hint: "Second value for between queries",
							},
							{
								displayName: "Query",
								name: "query",
								type: "options",
								default: "equal",
								options: [
									{
										name: "Equal",
										value: "equal",
										description:
											"Returns document if attribute is equal to value",
									},
									{
										name: "Greater Than",
										value: "greater_than",
										description:
											"Returns document if attribute is greater than value",
									},
									{
										name: "Less Than",
										value: "less_than",
										description:
											"Returns document if attribute is less than value",
									},
									{
										name: "Limit",
										value: "limit",
										description: "Limits the number of results returned",
									},
									{
										name: "Not Equal",
										value: "not_equal",
										description:
											"Returns document if attribute is not equal to value",
									},
									{
										name: "Offset",
										value: "offset",
										description:
											"Offset the results returned by skipping some results",
									},
									{
										name: "Order Ascending",
										value: "order_ascending",
										description:
											"Orders results in ascending order by attribute",
									},
									{
										name: "Order Descending",
										value: "order_descending",
										description:
											"Orders results in descending order by attribute",
									},
									{
										name: "Search",
										value: "search",
										description:
											"Searches string attributes for provided keywords",
									},
								],
							},
						],
					},
				],
				default: {},
				description: "A query to filter the data by",
			},
		],
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: [
					"listProviders",
					"listTopics",
					"listSubscribers",
					"listMessages",
					"listProviderLogs",
					"listTopicLogs",
					"listSubscriberLogs",
					"listMessageLogs",
					"listTargets",
				],
			},
		},
	},
];
