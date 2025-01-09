# n8n-nodes-appwrite

<br />
<p align="center">
    <a href="https://appwrite.io" target="_blank"><img width="260" height="" src="https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" alt="Appwrite Logo"></a>
    <br />
    <br />
    <b>Free and open fair-code licensed node based Workflow Automation Tool.</b>
    <br />
    <br />
</p>

<br />
<p align="center">
    <a href="https://appwrite.io" target="_blank"><img width="260" height="" src="https://appwrite.io/images/appwrite.svg" alt="Appwrite Logo"></a>
    <br />
    <br />
    <b>A complete backend solution for your [Flutter / Vue / Angular / React / iOS / Android / *ANY OTHER*] app</b>
    <br />
    <br />
</p>

This is an n8n community node. It lets you use _Appwrite_ in your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials) <!-- delete if no auth needed -->
[Compatibility](#compatibility)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### NOTE

This package is called `n8n-nodes-nappwrite` -- I apologize for having my other package, `n8n-nodes-appwriten8n`, I hated the extra `n8n` at the expense of the other guys package, called `n8n-nodes-appwrite`, and didn't mean to double post it

## Operations

- Documents
  - Get (by ID or with Queries)
  - Create
  - Update
  - Delete
  - Get All (incl. with Queries)
- Functions
  - List All
  - Get by ID
  - Execute and Output Result
- Storage
  - Create Bucket
  - Delete Bucket
  - Get Bucket by ID
  - List Buckets
  - List Files
  - Get File by ID
  - Create File
  - Delete File
- Users
  - Get User
  - Create User
    - I will implement the hashing algorithms soon, but for now hashed users are disabled
  - Update User
    - Can update the following
      - Name
      - Email
      - Email Verification Status (true or false)
      - Password
      - Phone
      - Phone Verification Status (true or false)
      - Labels
      - Status
  - Get User Prefs
  - Update User Prefs
  - List Users
    - Filterable with Queries
  - Delete User
  - List User Sessions
  - Delete User Sessions
  - Delete User Session
  - List User Memberships
  - List User Logs
  - List User Identities

## Credentials

1. Make sure you have an instance of Appwrite, either self-hosted or on Cloud at <https://cloud.appwrite.io>
2. Once in, create a project, and then scroll down and create an API key
3. Give it all securities you wish, only Functions, Databases, and Storage is required to use all functionality, however I will update it with more functionality as we go
4. After creating your API key, go to Credentials and create a new Appwrite API credential, and paste in
   `https://cloud.appwrite.io/v1` for your endpoint URL if you used Appwrite Cloud, otherwise use your endpoint
5. Put in your Project ID by copying it
6. Paste in your API key
7. You're good to go!

## Compatibility

- Currently up to date with N8N, Appwrite 1.4.x is required

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [appwrite website and documentation](https://appwrite.io)
- [github repository](https://github.com/zachhandley/n8n-nodes-appwrite)
- [my website](https://zachhandley.com)

## Changelog

- 0.71.3 -- Try fixing the Query strings via a `safeParseJSON`
- 0.71.2 -- Update appwrite logo
- 0.71.1 -- Update to support 1.6.x
- 0.70.0 -- Update to support 1.5.x
- 0.69.1 -- Fix to Update Document node
- 0.69.0 -- Initial Release
