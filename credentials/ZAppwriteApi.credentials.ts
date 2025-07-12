import {
	IAuthenticate,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ZAppwriteApi implements ICredentialType {
	name = 'zAppwriteApi';
	displayName = 'Appwrite API';
	documentationUrl = 'https://appwrite.io/';
	properties: INodeProperties[] = [
		{
			displayName: 'Appwrite Server URL',
			name: 'url',
			type: 'string',
			default: '',
			placeholder: 'https://api.appwrite.io',
		},
		{
			displayName: 'Project ID',
			name: 'projectId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	// This allows the credential to be used by other parts of n8n
	// stating how this credential is injected as part of the request
	// An example is the Http Request node that can make generic calls
	// reusing this credential
	authenticate: IAuthenticate = {
		type: 'generic',
		properties: {
			headers: {
				'X-Appwrite-Project': '={{$credentials.projectId}}',
				'Content-Type': 'application/json',
				'X-Appwrite-Key': '={{$credentials.apiKey}}',
			},
		},
	};
	test = {
		request: {
			baseURL: '={{$credentials?.url}}',
			url: '/health',
		},
	};
}