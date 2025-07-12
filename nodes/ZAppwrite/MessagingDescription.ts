import { INodeProperties } from "n8n-workflow";

export const messagingOperations: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		noDataExpression: true,
		type: "options",
		options: [
			{
				name: "Create APNS Provider",
				displayName: "Create APNS Provider",
				value: "createApnsProvider",
				action: "Create APNS provider",
				description: "Create a new Apple Push Notification service provider",
			},
			{
				name: "Create Email",
				displayName: "Create Email",
				value: "createEmail",
				action: "Create email message",
				description: "Create a new email message",
			},
			{
				name: "Create FCM Provider",
				displayName: "Create FCM Provider",
				value: "createFcmProvider",
				action: "Create FCM provider",
				description: "Create a new Firebase Cloud Messaging provider",
			},
			{
				name: "Create Mailgun Provider",
				displayName: "Create Mailgun Provider",
				value: "createMailgunProvider",
				action: 'Create mailgun provider',
				description: "Create a new Mailgun provider",
			},
			{
				name: "Create MSG91 Provider",
				displayName: "Create MSG91 Provider",
				value: "createMsg91Provider",
				action: "Create MSG91 provider",
				description: "Create a new MSG91 provider",
			},
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
				name: "Create Sendgrid Provider",
				displayName: "Create Sendgrid Provider",
				value: "createSendgridProvider",
				action: 'Create sendgrid provider',
				description: "Create a new Sendgrid provider",
			},
			{
				name: "Create SMS",
				displayName: "Create SMS",
				value: "createSms",
				action: "Create SMS message",
				description: "Create a new SMS message",
			},
			{
				name: "Create SMTP Provider",
				displayName: "Create SMTP Provider",
				value: "createSmtpProvider",
				action: "Create SMTP provider",
				description: "Create a new SMTP provider",
			},
			{
				name: "Create Subscriber",
				displayName: "Create Subscriber",
				value: "createSubscriber",
				action: "Create subscriber",
				description: "Create a new subscriber",
			},
			{
				name: "Create Telesign Provider",
				displayName: "Create Telesign Provider",
				value: "createTelesignProvider",
				action: 'Create telesign provider',
				description: "Create a new Telesign provider",
			},
			{
				name: "Create Textmagic Provider",
				displayName: "Create Textmagic Provider",
				value: "createTextmagicProvider",
				action: 'Create textmagic provider',
				description: "Create a new Textmagic provider",
			},
			{
				name: "Create Topic",
				displayName: "Create Topic",
				value: "createTopic",
				action: "Create topic",
				description: "Create a new topic",
			},
			{
				name: "Create Twilio Provider",
				displayName: "Create Twilio Provider",
				value: "createTwilioProvider",
				action: 'Create twilio provider',
				description: "Create a new Twilio provider",
			},
			{
				name: "Create Vonage Provider",
				displayName: "Create Vonage Provider",
				value: "createVonageProvider",
				action: 'Create vonage provider',
				description: "Create a new Vonage provider",
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
				name: "Update APNS Provider",
				displayName: "Update APNS Provider",
				value: "updateApnsProvider",
				action: "Update APNS provider",
				description: "Update an Apple Push Notification service provider",
			},
			{
				name: "Update Email",
				displayName: "Update Email",
				value: "updateEmail",
				action: "Update email message",
				description: "Update an email message",
			},
			{
				name: "Update FCM Provider",
				displayName: "Update FCM Provider",
				value: "updateFcmProvider",
				action: "Update FCM provider",
				description: "Update a Firebase Cloud Messaging provider",
			},
			{
				name: "Update Mailgun Provider",
				displayName: "Update Mailgun Provider",
				value: "updateMailgunProvider",
				action: 'Update mailgun provider',
				description: "Update a Mailgun provider",
			},
			{
				name: "Update MSG91 Provider",
				displayName: "Update MSG91 Provider",
				value: "updateMsg91Provider",
				action: "Update MSG91 provider",
				description: "Update a MSG91 provider",
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
				name: "Update Sendgrid Provider",
				displayName: "Update Sendgrid Provider",
				value: "updateSendgridProvider",
				action: 'Update sendgrid provider',
				description: "Update a Sendgrid provider",
			},
			{
				name: "Update SMS",
				displayName: "Update SMS",
				value: "updateSms",
				action: "Update SMS message",
				description: "Update an SMS message",
			},
			{
				name: "Update SMTP Provider",
				displayName: "Update SMTP Provider",
				value: "updateSmtpProvider",
				action: "Update SMTP provider",
				description: "Update a SMTP provider",
			},
			{
				name: "Update Telesign Provider",
				displayName: "Update Telesign Provider",
				value: "updateTelesignProvider",
				action: 'Update telesign provider',
				description: "Update a Telesign provider",
			},
			{
				name: "Update Textmagic Provider",
				displayName: "Update Textmagic Provider",
				value: "updateTextmagicProvider",
				action: 'Update textmagic provider',
				description: "Update a Textmagic provider",
			},
			{
				name: "Update Topic",
				displayName: "Update Topic",
				value: "updateTopic",
				action: "Update topic",
				description: "Update a topic by its unique ID",
			},
			{
				name: "Update Twilio Provider",
				displayName: "Update Twilio Provider",
				value: "updateTwilioProvider",
				action: 'Update twilio provider',
				description: "Update a Twilio provider",
			},
			{
				name: "Update Vonage Provider",
				displayName: "Update Vonage Provider",
				value: "updateVonageProvider",
				action: 'Update vonage provider',
				description: "Update a Vonage provider",
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
					"createApnsProvider",
					"createFcmProvider", 
					"createMailgunProvider",
					"createMsg91Provider",
					"createSendgridProvider",
					"createSmtpProvider",
					"createTelesignProvider",
					"createTextmagicProvider",
					"createTwilioProvider",
					"createVonageProvider",
					"getProvider",
					"updateProvider",
					"updateApnsProvider",
					"updateFcmProvider",
					"updateMailgunProvider",
					"updateMsg91Provider",
					"updateSendgridProvider",
					"updateSmtpProvider",
					"updateTelesignProvider",
					"updateTextmagicProvider",
					"updateTwilioProvider",
					"updateVonageProvider",
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
				operation: [
					"createProvider",
					"createApnsProvider",
					"createFcmProvider", 
					"createMailgunProvider",
					"createMsg91Provider",
					"createSendgridProvider",
					"createSmtpProvider",
					"createTelesignProvider",
					"createTextmagicProvider",
					"createTwilioProvider",
					"createVonageProvider",
					"updateProvider",
					"updateApnsProvider",
					"updateFcmProvider",
					"updateMailgunProvider",
					"updateMsg91Provider",
					"updateSendgridProvider",
					"updateSmtpProvider",
					"updateTelesignProvider",
					"updateTextmagicProvider",
					"updateTwilioProvider",
					"updateVonageProvider",
				],
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
				operation: ["createProvider", "updateProvider", "createSmtpProvider", "updateSmtpProvider"],
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
				operation: ["createProvider", "updateProvider", "createSmtpProvider", "updateSmtpProvider"],
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
				operation: ["createProvider", "updateProvider", "createSmtpProvider", "updateSmtpProvider"],
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
				operation: ["createProvider", "updateProvider", "createSmtpProvider", "updateSmtpProvider"],
				providerType: ["smtp"],
			},
		},
	},

	{
		displayName: "Encryption",
		name: "encryption",
		type: "options",
		options: [
			{
				name: "None",
				value: "none",
			},
			{
				name: "SSL",
				value: "ssl",
			},
			{
				name: "TLS",
				value: "tls",
			},
		],
		default: "none",
		description: "SMTP encryption type",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createSmtpProvider", "updateSmtpProvider"],
				providerType: ["smtp"],
			},
		},
	},

	{
		displayName: "Auto TLS",
		name: "autoTLS",
		type: "boolean",
		default: false,
		description: "Whether to enable auto TLS",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createSmtpProvider", "updateSmtpProvider"],
				providerType: ["smtp"],
			},
		},
	},

	{
		displayName: "Mailer",
		name: "mailer",
		type: "string",
		default: "",
		description: "SMTP mailer name",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createSmtpProvider", "updateSmtpProvider"],
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
				operation: ["createProvider", "updateProvider", "createMailgunProvider", "updateMailgunProvider"],
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
				operation: ["createProvider", "updateProvider", "createMailgunProvider", "updateMailgunProvider"],
				providerType: ["mailgun"],
			},
		},
	},

	{
		displayName: "EU Region",
		name: "isEuRegion",
		type: "boolean",
		default: false,
		description: "Whether to use Mailgun EU region",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createMailgunProvider", "updateMailgunProvider"],
				providerType: ["mailgun"],
			},
		},
	},

	{
		displayName: "From Name",
		name: "fromName",
		type: "string",
		default: "",
		description: "Sender name",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createMailgunProvider", "updateMailgunProvider"],
				providerType: ["mailgun"],
			},
		},
	},

	{
		displayName: "From Email",
		name: "fromEmail",
		type: "string",
		default: "",
		description: "Sender email address",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createMailgunProvider", "updateMailgunProvider"],
				providerType: ["mailgun"],
			},
		},
	},

	{
		displayName: "Reply To Name",
		name: "replyToName",
		type: "string",
		default: "",
		description: "Reply-to name",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createMailgunProvider", "updateMailgunProvider"],
				providerType: ["mailgun"],
			},
		},
	},

	{
		displayName: "Reply To Email",
		name: "replyToEmail",
		type: "string",
		default: "",
		description: "Reply-to email address",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createMailgunProvider", "updateMailgunProvider"],
				providerType: ["mailgun"],
			},
		},
	},

	// MSG91 Provider Fields
	{
		displayName: "Template ID",
		name: "templateId",
		type: "string",
		default: "",
		description: "MSG91 Template ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createMsg91Provider", "updateMsg91Provider"],
				providerType: ["msg91"],
			},
		},
	},

	{
		displayName: "Sender ID",
		name: "senderId",
		type: "string",
		default: "",
		description: "MSG91 Sender ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createMsg91Provider", "updateMsg91Provider"],
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
				operation: ["createProvider", "updateProvider", "createMsg91Provider", "updateMsg91Provider"],
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
				operation: ["createProvider", "updateProvider", "createSendgridProvider", "updateSendgridProvider"],
				providerType: ["sendgrid"],
			},
		},
	},

	{
		displayName: "From Name",
		name: "fromName",
		type: "string",
		default: "",
		description: "Sender name",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createSendgridProvider", "updateSendgridProvider"],
				providerType: ["sendgrid"],
			},
		},
	},

	{
		displayName: "From Email",
		name: "fromEmail",
		type: "string",
		default: "",
		description: "Sender email address",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createSendgridProvider", "updateSendgridProvider"],
				providerType: ["sendgrid"],
			},
		},
	},

	{
		displayName: "Reply To Name",
		name: "replyToName",
		type: "string",
		default: "",
		description: "Reply-to name",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createSendgridProvider", "updateSendgridProvider"],
				providerType: ["sendgrid"],
			},
		},
	},

	{
		displayName: "Reply To Email",
		name: "replyToEmail",
		type: "string",
		default: "",
		description: "Reply-to email address",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createProvider", "updateProvider", "createSendgridProvider", "updateSendgridProvider"],
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
				operation: ["createProvider", "updateProvider", "createFcmProvider", "updateFcmProvider"],
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
				operation: ["createProvider", "updateProvider", "createApnsProvider", "updateApnsProvider"],
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
				operation: ["createProvider", "updateProvider", "createApnsProvider", "updateApnsProvider"],
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
				operation: ["createProvider", "updateProvider", "createApnsProvider", "updateApnsProvider"],
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
				operation: ["createProvider", "updateProvider", "createApnsProvider", "updateApnsProvider"],
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
				operation: ["createProvider", "updateProvider", "createApnsProvider", "updateApnsProvider"],
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
				operation: ["createProvider", "updateProvider", "createTelesignProvider", "updateTelesignProvider"],
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
				operation: ["createProvider", "updateProvider", "createTelesignProvider", "updateTelesignProvider"],
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
				operation: ["createProvider", "updateProvider", "createTextmagicProvider", "updateTextmagicProvider"],
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
				operation: ["createProvider", "updateProvider", "createTextmagicProvider", "updateTextmagicProvider"],
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
				operation: ["createProvider", "updateProvider", "createTwilioProvider", "updateTwilioProvider"],
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
				operation: ["createProvider", "updateProvider", "createTwilioProvider", "updateTwilioProvider"],
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
				operation: ["createProvider", "updateProvider", "createVonageProvider", "updateVonageProvider"],
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
				operation: ["createProvider", "updateProvider", "createVonageProvider", "updateVonageProvider"],
				providerType: ["vonage"],
			},
		},
	},

	// Provider-specific fields for direct operations (without providerType selector)
	
	// APNS Provider fields for specific operations
	{
		displayName: "Auth Key",
		name: "authKeyDirect",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "APNS Auth Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createApnsProvider", "updateApnsProvider"],
			},
		},
	},
	{
		displayName: "Auth Key ID",
		name: "authKeyIdDirect",
		type: "string",
		default: "",
		description: "APNS Auth Key ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createApnsProvider", "updateApnsProvider"],
			},
		},
	},
	{
		displayName: "Team ID",
		name: "teamIdDirect",
		type: "string",
		default: "",
		description: "APNS Team ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createApnsProvider", "updateApnsProvider"],
			},
		},
	},
	{
		displayName: "Bundle ID",
		name: "bundleIdDirect",
		type: "string",
		default: "",
		description: "APNS Bundle ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createApnsProvider", "updateApnsProvider"],
			},
		},
	},
	{
		displayName: "Sandbox",
		name: "sandboxDirect",
		type: "boolean",
		default: false,
		description: "Whether to use APNS sandbox environment",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createApnsProvider", "updateApnsProvider"],
			},
		},
	},

	// FCM Provider fields for specific operations
	{
		displayName: "Service Account JSON",
		name: "serviceAccountJSONDirect",
		type: "json",
		default: "{}",
		description: "Firebase service account JSON",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createFcmProvider", "updateFcmProvider"],
			},
		},
	},

	// SMTP Provider fields for specific operations
	{
		displayName: "Host",
		name: "hostDirect",
		type: "string",
		required: true,
		default: "",
		description: "SMTP server host",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSmtpProvider", "updateSmtpProvider"],
			},
		},
	},
	{
		displayName: "Port",
		name: "portDirect",
		type: "number",
		default: 587,
		description: "SMTP server port",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSmtpProvider", "updateSmtpProvider"],
			},
		},
	},
	{
		displayName: "Username",
		name: "usernameDirect",
		type: "string",
		default: "",
		description: "SMTP username",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSmtpProvider", "updateSmtpProvider"],
			},
		},
	},
	{
		displayName: "Password",
		name: "passwordDirect",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "SMTP password",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSmtpProvider", "updateSmtpProvider"],
			},
		},
	},
	{
		displayName: "Encryption",
		name: "encryptionDirect",
		type: "options",
		options: [
			{
				name: "None",
				value: "none",
			},
			{
				name: "SSL",
				value: "ssl",
			},
			{
				name: "TLS",
				value: "tls",
			},
		],
		default: "none",
		description: "SMTP encryption type",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSmtpProvider", "updateSmtpProvider"],
			},
		},
	},
	{
		displayName: "Auto TLS",
		name: "autoTLSDirect",
		type: "boolean",
		default: false,
		description: "Whether to enable auto TLS",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSmtpProvider", "updateSmtpProvider"],
			},
		},
	},
	{
		displayName: "Mailer",
		name: "mailerDirect",
		type: "string",
		default: "",
		description: "SMTP mailer name",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSmtpProvider", "updateSmtpProvider"],
			},
		},
	},
	{
		displayName: "From Name",
		name: "fromNameDirect",
		type: "string",
		default: "",
		description: "Sender name",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSmtpProvider", "updateSmtpProvider"],
			},
		},
	},
	{
		displayName: "From Email",
		name: "fromEmailDirect",
		type: "string",
		default: "",
		description: "Sender email address",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSmtpProvider", "updateSmtpProvider"],
			},
		},
	},
	{
		displayName: "Reply To Name",
		name: "replyToNameDirect",
		type: "string",
		default: "",
		description: "Reply-to name",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSmtpProvider", "updateSmtpProvider"],
			},
		},
	},
	{
		displayName: "Reply To Email",
		name: "replyToEmailDirect",
		type: "string",
		default: "",
		description: "Reply-to email address",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSmtpProvider", "updateSmtpProvider"],
			},
		},
	},

	// Mailgun Provider fields for specific operations
	{
		displayName: "API Key",
		name: "apiKeyDirectMailgun",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Mailgun API Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createMailgunProvider", "updateMailgunProvider"],
			},
		},
	},
	{
		displayName: "Domain",
		name: "domainDirect",
		type: "string",
		default: "",
		description: "Mailgun domain",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createMailgunProvider", "updateMailgunProvider"],
			},
		},
	},
	{
		displayName: "EU Region",
		name: "isEuRegionDirect",
		type: "boolean",
		default: false,
		description: "Whether to use Mailgun EU region",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createMailgunProvider", "updateMailgunProvider"],
			},
		},
	},
	{
		displayName: "From Name",
		name: "fromNameDirectMailgun",
		type: "string",
		default: "",
		description: "Sender name",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createMailgunProvider", "updateMailgunProvider"],
			},
		},
	},
	{
		displayName: "From Email",
		name: "fromEmailDirectMailgun",
		type: "string",
		default: "",
		description: "Sender email address",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createMailgunProvider", "updateMailgunProvider"],
			},
		},
	},
	{
		displayName: "Reply To Name",
		name: "replyToNameDirectMailgun",
		type: "string",
		default: "",
		description: "Reply-to name",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createMailgunProvider", "updateMailgunProvider"],
			},
		},
	},
	{
		displayName: "Reply To Email",
		name: "replyToEmailDirectMailgun",
		type: "string",
		default: "",
		description: "Reply-to email address",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createMailgunProvider", "updateMailgunProvider"],
			},
		},
	},

	// Sendgrid Provider fields for specific operations
	{
		displayName: "API Key",
		name: "apiKeyDirectSendgrid",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Sendgrid API Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSendgridProvider", "updateSendgridProvider"],
			},
		},
	},
	{
		displayName: "From Name",
		name: "fromNameDirectSendgrid",
		type: "string",
		default: "",
		description: "Sender name",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSendgridProvider", "updateSendgridProvider"],
			},
		},
	},
	{
		displayName: "From Email",
		name: "fromEmailDirectSendgrid",
		type: "string",
		default: "",
		description: "Sender email address",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSendgridProvider", "updateSendgridProvider"],
			},
		},
	},
	{
		displayName: "Reply To Name",
		name: "replyToNameDirectSendgrid",
		type: "string",
		default: "",
		description: "Reply-to name",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSendgridProvider", "updateSendgridProvider"],
			},
		},
	},
	{
		displayName: "Reply To Email",
		name: "replyToEmailDirectSendgrid",
		type: "string",
		default: "",
		description: "Reply-to email address",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createSendgridProvider", "updateSendgridProvider"],
			},
		},
	},

	// MSG91 Provider fields for specific operations
	{
		displayName: "Template ID",
		name: "templateIdDirect",
		type: "string",
		default: "",
		description: "MSG91 Template ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createMsg91Provider", "updateMsg91Provider"],
			},
		},
	},
	{
		displayName: "Sender ID",
		name: "senderIdDirect",
		type: "string",
		default: "",
		description: "MSG91 Sender ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createMsg91Provider", "updateMsg91Provider"],
			},
		},
	},
	{
		displayName: "Auth Key",
		name: "authKeyDirectMsg91",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "MSG91 Auth Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createMsg91Provider", "updateMsg91Provider"],
			},
		},
	},

	// Telesign Provider fields for specific operations
	{
		displayName: "From",
		name: "fromDirectTelesign",
		type: "string",
		default: "",
		description: "Phone number to send from",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createTelesignProvider"],
			},
		},
	},
	{
		displayName: "Customer ID",
		name: "customerIdDirect",
		type: "string",
		default: "",
		description: "Telesign Customer ID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createTelesignProvider", "updateTelesignProvider"],
			},
		},
	},
	{
		displayName: "API Key",
		name: "apiKeyDirectTelesign",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Telesign API Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createTelesignProvider", "updateTelesignProvider"],
			},
		},
	},

	// Textmagic Provider fields for specific operations
	{
		displayName: "From",
		name: "fromDirectTextmagic",
		type: "string",
		default: "",
		description: "Phone number to send from",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createTextmagicProvider"],
			},
		},
	},
	{
		displayName: "Username",
		name: "usernameDirectTextmagic",
		type: "string",
		default: "",
		description: "Textmagic username",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createTextmagicProvider", "updateTextmagicProvider"],
			},
		},
	},
	{
		displayName: "API Key",
		name: "apiKeyDirectTextmagic",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Textmagic API Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createTextmagicProvider", "updateTextmagicProvider"],
			},
		},
	},

	// Twilio Provider fields for specific operations
	{
		displayName: "From",
		name: "fromDirectTwilio",
		type: "string",
		default: "",
		description: "Phone number to send from",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createTwilioProvider"],
			},
		},
	},
	{
		displayName: "Account SID",
		name: "accountSidDirect",
		type: "string",
		default: "",
		description: "Twilio Account SID",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createTwilioProvider", "updateTwilioProvider"],
			},
		},
	},
	{
		displayName: "Auth Token",
		name: "authTokenDirect",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Twilio Auth Token",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createTwilioProvider", "updateTwilioProvider"],
			},
		},
	},

	// Vonage Provider fields for specific operations
	{
		displayName: "From",
		name: "fromDirectVonage",
		type: "string",
		default: "",
		description: "Phone number to send from",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createVonageProvider"],
			},
		},
	},
	{
		displayName: "API Key",
		name: "apiKeyDirectVonage",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Vonage API Key",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createVonageProvider", "updateVonageProvider"],
			},
		},
	},
	{
		displayName: "API Secret",
		name: "apiSecretDirect",
		type: "string",
		typeOptions: { password: true },
		default: "",
		description: "Vonage API Secret",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: ["createVonageProvider", "updateVonageProvider"],
			},
		},
	},

	// Common provider fields for specific operations
	{
		displayName: "Enabled",
		name: "enabledDirect",
		type: "boolean",
		default: true,
		description: "Whether provider is enabled",
		displayOptions: {
			show: {
				resource: ["messaging"],
				operation: [
					"createApnsProvider",
					"createFcmProvider", 
					"createMailgunProvider",
					"createMsg91Provider",
					"createSendgridProvider",
					"createSmtpProvider",
					"createTelesignProvider",
					"createTextmagicProvider",
					"createTwilioProvider",
					"createVonageProvider",
					"updateApnsProvider",
					"updateFcmProvider",
					"updateMailgunProvider",
					"updateMsg91Provider",
					"updateSendgridProvider",
					"updateSmtpProvider",
					"updateTelesignProvider",
					"updateTextmagicProvider",
					"updateTwilioProvider",
					"updateVonageProvider",
				],
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