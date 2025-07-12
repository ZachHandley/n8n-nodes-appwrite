import { INodeProperties } from "n8n-workflow";

export const localeOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		noDataExpression: true,
		required: true,
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'locale',
				],
			},
		},
		options: [
			{
				name: 'Get User Locale',
				value: 'getUserLocale',
				action: 'Get user locale',
				description: 'Get the current user location based on IP. Returns country code, country name, continent name, continent code, IP address and suggested currency.',
			},
			{
				name: 'List Continents',
				value: 'listContinents',
				action: 'List continents',
				description: 'List of all continents. You can use the locale header to get the data in a supported language.',
			},
			{
				name: 'List Countries',
				value: 'listCountries',
				action: 'List countries',
				description: 'List of all countries. You can use the locale header to get the data in a supported language.',
			},
			{
				name: 'List Countries Phone Codes',
				value: 'listCountriesPhones',
				action: 'List countries phone codes',
				description: 'List of all countries phone codes. You can use the locale header to get the data in a supported language.',
			},
			{
				name: 'List Currencies',
				value: 'listCurrencies',
				action: 'List currencies',
				description: 'List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies',
			},
			{
				name: 'List EU Countries',
				value: 'listCountriesEU',
				action: 'List EU countries',
				description: 'List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.',
			},
			{
				name: 'List Languages',
				value: 'listLanguages',
				action: 'List languages',
				description: 'List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language',
			},
			{
				name: 'List Locale Codes',
				value: 'listLocaleCodes',
				action: 'List locale codes',
				description: 'List of all locale codes in ISO 639-1',
			},
		],
		default: 'getUserLocale',
	},
];

export const localeFields: INodeProperties[] = [
	// No additional fields needed as all locale operations are simple GET requests without parameters
];