import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';

const scopes = [
	'https://www.googleapis.com/auth/userinfo.email',
	'https://www.googleapis.com/auth/firebase.database',
	'https://www.googleapis.com/auth/firebase',
];

export class GoogleFirebaseRealtimeDatabaseOAuth2Api implements ICredentialType {
	name = 'googleFirebaseRealtimeDatabaseOAuth2Api';
	extends = [
		'googleOAuth2Api',
	];
	displayName = 'Google Firebase Realtime Database OAuth2 API';
	documentationUrl = 'google';
	properties = [
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden' as NodePropertyTypes,
			default: scopes.join(' '),
		},
	];
}
