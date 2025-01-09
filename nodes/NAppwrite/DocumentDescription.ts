import { INodeProperties } from "n8n-workflow";

export const documentOperations: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		noDataExpression: true,
		type: "options",
		options: [
			{
				name: "Create",
				displayName: "Create Document",
				value: "createDoc",
				action: "Create document",
				description: "Create a document in collection",
			},
			{
				name: "Delete",
				displayName: "Delete Document",
				value: "deleteDoc",
				action: "Delete document",
				description: "Delete document in collection",
			},
			{
				name: "Get",
				displayName: "Get Document",
				value: "getDoc",
				action: "Get document by id",
				description: "Get a document in collection",
			},
			{
				name: "Get All",
				displayName: "Get All Documents",
				value: "getAllDocs",
				action: "Get all documents with optional queries",
				description: "Get all documents in collection",
			},
			{
				name: "Update",
				displayName: "Update Document",
				value: "updateDoc",
				action: "Update document",
				description: "Get all documents in collection",
			},
		],
		default: "getAllDocs",
		displayOptions: {
			show: {
				resource: ["document"],
			},
		},
	},
];

export const documentFields: INodeProperties[] = [
	{
		displayName: "Database ID",
		name: "databaseId",
		type: "string",
		required: true,
		default: "",
		requiresDataPath: "single",
		description: "Database ID in which transaction will be performed",
		displayOptions: {
			show: {
				resource: ["document"],
				operation: [
					"createDoc",
					"getAllDocs",
					"getDoc",
					"updateDoc",
					"deleteDoc",
				],
			},
		},
	},
	{
		displayName: "Collection ID",
		name: "collectionId",
		type: "string",
		required: true,
		default: "",
		requiresDataPath: "single",
		description: "Collection to list/create documents in",
		displayOptions: {
			show: {
				resource: ["document"],
				operation: [
					"createDoc",
					"getAllDocs",
					"getDoc",
					"updateDoc",
					"deleteDoc",
				],
			},
		},
	},
	{
		displayName: "Document ID",
		name: "documentId",
		type: "string",
		default: "unique()",
		requiresDataPath: "single",
		description:
			"ID for collection | For creating, unique is used for generating unique ID, it can be modified for custom document ID",
		displayOptions: {
			show: {
				resource: ["document"],
				operation: ["createDoc", "getDoc", "updateDoc", "deleteDoc"],
			},
		},
	},
	{
		displayName: "Body",
		name: "body",
		type: "json",
		required: true,
		requiresDataPath: "multiple",
		default:
			'{"attributeName1":"attribute-value1", "attributeName2":"attribute-value2"}',
		description: "Body to create or update document with",
		displayOptions: {
			show: {
				resource: ["document"],
				operation: ["createDoc", "updateDoc"],
			},
		},
	},
	{
		displayName: "Additional Fields",
		name: "additionalFields",
		type: "collection",
		placeholder: "Add Queries",
		description:
			"Queries to filter the documents by. [learn more about filtering](https://appwrite.io/docs/filters).",
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
								hint: "First value for queries, such as what the index is equal to, or the first value of a between",
							},
							{
								displayName: "Value 2",
								name: "value2",
								type: "string",
								default: "",
								requiresDataPath: "single",
								hint: "Second value for between and a few other queries, ignore if not needed",
							},
							{
								displayName: "Query",
								name: "query",
								type: "options",
								default: "equal",
								options: [
									{
										name: "Between",
										value: "between",
										description:
											"Returns document if attribute value falls between the two values. The boundary values are inclusive and can be strings or numbers.",
									},
									{
										name: "Contains",
										value: "contains",
										description:
											"Returns documents if attribute contains the provided value",
									},
									{
										name: "Cursor After",
										value: "cursor_after",
										description:
											"Places the cursor after the specified resource ID. Used for pagination.",
									},
									{
										name: "Cursor Before",
										value: "cursor_before",
										description:
											"Places the cursor before the specified resource ID. Used for pagination.",
									},
									{
										name: "Ends With",
										value: "ends_with",
										description:
											"Returns documents if a string attributes ends with a substring",
									},
									{
										name: "Equal",
										value: "equal",
										description:
											"Returns document if attribute is equal to any value in the provided array",
									},
									{
										name: "Greater Than",
										value: "greater_than",
										description:
											"Returns document if attribute is greater than the provided value",
									},
									{
										name: "Greater Than or Equal",
										value: "greater_than_or_equal",
										description:
											"Returns document if attribute is greater than or equal to the provided value",
									},
									{
										name: "Is Not Null",
										value: "is_not_null",
										description:
											"Returns documents where attribute value is not null",
									},
									{
										name: "Is Null",
										value: "is_null",
										description:
											"Returns documents where attribute value is null",
									},
									{
										name: "Less Than",
										value: "less_than",
										description:
											"Returns document if attribute is less than the provided value",
									},
									{
										name: "Less Than or Equal",
										value: "less_than_or_equal",
										description:
											"Returns document if attribute is less than or equal to the provided value",
									},
									{
										name: "Limit",
										value: "limit",
										description:
											"Limits the number of results returned by the query. Used for pagination. If the limit query is not used, the limit defaults to 25 results.",
									},
									{
										name: "Not Equal",
										value: "not_equal",
										description:
											"Returns document if attribute is not equal to any value in the provided array",
									},
									{
										name: "Offset",
										value: "offset",
										description:
											"Offset the results returned by skipping some of the results. Used for pagination.",
									},
									{
										name: "Order Ascending",
										value: "order_ascending",
										description:
											"Orders results in ascending order by attribute. Attribute must be indexed. Pass in an empty string to return in natural order.",
									},
									{
										name: "Order Descending",
										value: "order_descending",
										description:
											"Orders results in descending order by attribute. Attribute must be indexed. Pass in an empty string to return in natural order.",
									},
									{
										name: "Search",
										value: "search",
										description:
											"Searches string attributes for provided keywords. Requires a Full-text index on queried attributes.",
									},
									{
										name: "Select",
										value: "select",
										description:
											"Select which attributes should be returned from a document",
									},
									{
										name: "Starts With",
										value: "starts_with",
										description:
											"Returns documents if a string attributes starts with a substring",
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
				resource: ["document"],
				operation: ["getAllDocs", "getDoc"],
			},
		},
	},
];
