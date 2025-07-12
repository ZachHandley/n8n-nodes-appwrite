import { INodeProperties } from "n8n-workflow";

export const avatarsOperations: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		noDataExpression: true,
		type: "options",
		options: [
			{
				name: "Get Browser Favicon",
				displayName: "Get Browser Favicon",
				value: "getBrowserFavicon",
				action: "Get browser favicon",
				description: "Get browser favicon icon",
			},
			{
				name: "Get Credit Card Icon",
				displayName: "Get Credit Card Icon",
				value: "getCreditCardIcon",
				action: "Get credit card icon",
				description: "Get credit card provider icon",
			},
			{
				name: "Get Favicon",
				displayName: "Get Favicon",
				value: "getFavicon",
				action: "Get favicon from URL",
				description: "Get favicon from a website URL",
			},
			{
				name: "Get Flag Icon",
				displayName: "Get Flag Icon",
				value: "getFlagIcon",
				action: "Get country flag icon",
				description: "Get country flag icon",
			},
			{
				name: "Get Image From URL",
				displayName: "Get Image from URL",
				value: "getImageFromUrl",
				action: "Get image from URL",
				description: "Get image from external URL",
			},
			{
				name: "Get Initials",
				displayName: "Get Initials",
				value: "getInitials",
				action: "Get initials avatar",
				description: "Generate initials avatar",
			},
			{
				name: "Get QR Code",
				displayName: "Get QR Code",
				value: "getQrCode",
				action: "Get QR code",
				description: "Generate QR code",
			},
		],
		default: "getFavicon",
		displayOptions: {
			show: {
				resource: ["avatars"],
			},
		},
	},
];

export const avatarsFields: INodeProperties[] = [
	// Browser Code
	{
		displayName: "Browser Code",
		name: "code",
		type: "options",
		required: true,
		options: [
			{
				name: "Chrome",
				value: "ch",
			},
			{
				name: "Edge",
				value: "eg",
			},
			{
				name: "Firefox",
				value: "ff",
			},
			{
				name: "Internet Explorer",
				value: "ie",
			},
			{
				name: "Opera",
				value: "op",
			},
			{
				name: "Safari",
				value: "sf",
			},
		],
		default: "ch",
		description: "Browser code for favicon",
		displayOptions: {
			show: {
				resource: ["avatars"],
				operation: ["getBrowserFavicon"],
			},
		},
	},

	// Credit Card Code
	{
		displayName: "Credit Card Code",
		name: "code",
		type: "options",
		required: true,
		options: [
			{
				name: "American Express",
				value: "amex",
			},
			{
				name: "Diners Club",
				value: "diners",
			},
			{
				name: "Discover",
				value: "discover",
			},
			{
				name: "JCB",
				value: "jcb",
			},
			{
				name: "Mastercard",
				value: "mastercard",
			},
			{
				name: "UnionPay",
				value: "unionpay",
			},
			{
				name: "Visa",
				value: "visa",
			},
		],
		default: "visa",
		description: "Credit card provider code",
		displayOptions: {
			show: {
				resource: ["avatars"],
				operation: ["getCreditCardIcon"],
			},
		},
	},

	// Country Code for Flag
	{
		displayName: "Country Code",
		name: "code",
		type: "string",
		required: true,
		default: "",
		placeholder: "US",
		description: "Two-letter country code (ISO 3166-1 alpha-2)",
		displayOptions: {
			show: {
				resource: ["avatars"],
				operation: ["getFlagIcon"],
			},
		},
	},

	// URL Fields
	{
		displayName: "URL",
		name: "url",
		type: "string",
		required: true,
		default: "",
		placeholder: "https://example.com",
		description: "Website URL to get favicon from",
		displayOptions: {
			show: {
				resource: ["avatars"],
				operation: ["getFavicon"],
			},
		},
	},

	{
		displayName: "Image URL",
		name: "url",
		type: "string",
		required: true,
		default: "",
		placeholder: "https://example.com/image.jpg",
		description: "Image URL to process",
		displayOptions: {
			show: {
				resource: ["avatars"],
				operation: ["getImageFromUrl"],
			},
		},
	},

	// Name for Initials
	{
		displayName: "Name",
		name: "name",
		type: "string",
		default: "",
		placeholder: "John Doe",
		description: "Name to generate initials from (optional)",
		displayOptions: {
			show: {
				resource: ["avatars"],
				operation: ["getInitials"],
			},
		},
	},

	// QR Code Text
	{
		displayName: "Text",
		name: "text",
		type: "string",
		required: true,
		default: "",
		placeholder: "Hello World",
		description: "Text to encode in QR code",
		displayOptions: {
			show: {
				resource: ["avatars"],
				operation: ["getQrCode"],
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
				displayName: "Background Color",
				name: "background",
				type: "string",
				default: "",
				placeholder: "#FF0000",
				description: "Background color for initials avatar (hex color)",
			},
			{
				displayName: "Download",
				name: "download",
				type: "boolean",
				default: false,
				description: "Whether to force download",
			},
			{
				displayName: "Height",
				name: "height",
				type: "number",
				default: 100,
				description: "Image height in pixels",
			},
			{
				displayName: "Margin",
				name: "margin",
				type: "number",
				default: 1,
				description: "QR code margin",
			},
			{
				displayName: "Quality",
				name: "quality",
				type: "number",
				default: 100,
				description: "Image quality (0-100)",
				typeOptions: {
					minValue: 0,
					maxValue: 100,
				},
			},
			{
				displayName: "Size",
				name: "size",
				type: "number",
				default: 400,
				description: "QR code size in pixels",
			},
			{
				displayName: "Width",
				name: "width",
				type: "number",
				default: 100,
				description: "Image width in pixels",
			},
		],
		displayOptions: {
			show: {
				resource: ["avatars"],
			},
		},
	},
];
