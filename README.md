# n8n-nodes-zappwrite

<br />
<p align="center">
    <a href="https://n8n.io" target="_blank"><img width="260" height="" src="https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" alt="N8N Logo"></a>
    <br />
    <br />
    <b>Free and open fair-code licensed node based Workflow Automation Tool.</b>
    <br />
    <br />
</p>

<br />
<p align="center">
    <a href="https://appwrite.io" target="_blank"><img width="260" height="" src="https://appwrite.io/images/logos/appwrite.svg" alt="Appwrite Logo"></a>
    <br />
    <br />
    <b>A complete backend solution for your [Flutter / Vue / Angular / React / iOS / Android / *ANY OTHER*] app</b>
    <br />
    <br />
</p>

This is an n8n community node. It lets you use _Appwrite_ in your n8n workflows through the **ZAppwrite** integration.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Quick Links
- [Installation](#installation)
- [Operations](#operations)
- [Credentials](#credentials)
- [Compatibility](#compatibility)
- [Migration from NAppwrite](#migration-from-nappwrite)
- [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### NPM Installation
```bash
npm install n8n-nodes-zappwrite
```

### Note
This package replaces the previous `n8n-nodes-nappwrite` package. See the [migration section](#migration-from-nappwrite) for upgrade instructions.

## Operations

### Documents
- **Get** - Retrieve document by ID or with queries
- **Create** - Create new documents
- **Update** - Update existing documents
- **Delete** - Delete documents
- **Get All** - List documents with optional filtering

### Functions
- **List All** - Get all available functions
- **Get by ID** - Retrieve specific function details
- **Execute** - Execute function and return results

### Storage
- **Create Bucket** - Create new storage bucket
- **Delete Bucket** - Remove storage bucket
- **Get Bucket** - Retrieve bucket information
- **List Buckets** - Get all buckets
- **List Files** - Get files in bucket
- **Get File** - Retrieve file information
- **Create File** - Upload new files
- **Delete File** - Remove files

### Users
- **Get User** - Retrieve user information
- **Create User** - Create new user accounts
- **Update User** - Modify user details including:
  - Name, Email, Phone
  - Verification status
  - Password, Labels, Status
- **Get User Preferences** - Retrieve user preferences
- **Update User Preferences** - Modify user preferences
- **List Users** - Get users with optional filtering
- **Delete User** - Remove user accounts
- **Session Management** - List/delete user sessions
- **Memberships** - List user team memberships
- **Logs** - Access user activity logs
- **Identities** - Manage user identities

### Additional Services
- **Avatars** - Generate and retrieve user avatars
- **Locale** - Get locale and country information
- **Messaging** - Send messages and notifications
- **Tokens** - Manage authentication tokens

## Credentials

### Setup Steps
1. **Appwrite Instance**: Ensure you have Appwrite running
   - Self-hosted installation, or
   - Appwrite Cloud at [https://cloud.appwrite.io](https://cloud.appwrite.io)

2. **Create Project**: Set up a new project in Appwrite

3. **Generate API Key**:
   - Navigate to your project settings
   - Create a new API key
   - Grant necessary permissions:
     - **Functions** - For function operations
     - **Databases** - For document operations  
     - **Storage** - For file operations
     - **Users** - For user management

4. **Configure N8N Credentials**:
   - Create new "ZAppwrite API" credential in N8N
   - **Endpoint URL**: 
     - Appwrite Cloud: `https://cloud.appwrite.io/v1`
     - Self-hosted: `https://your-domain.com/v1`
   - **Project ID**: Copy from project settings
   - **API Key**: Paste your generated API key

### Security Best Practices
- Use minimum required permissions for API keys
- Rotate API keys regularly
- Store credentials securely in N8N
- Use separate API keys for different environments

## Compatibility

- **N8N**: Latest stable version
- **Appwrite**: 1.7.x and newer
- **Node.js**: 18+ recommended
- **node-appwrite**: 17.0.0+

## Migration from NAppwrite

### Upgrading from Previous Versions

#### 1. Package Installation
```bash
# Remove old package
npm uninstall n8n-nodes-nappwrite

# Install new package  
npm install n8n-nodes-zappwrite
```

#### 2. Update Workflows
- Change node type from "NAppwrite" to "ZAppwrite"
- Update credential type from "NAppwrite API" to "ZAppwrite API"
- Recreate credentials using new credential type

#### 3. Workflow JSON Updates
```json
// Old configuration
{
  "name": "NAppwrite",
  "type": "nAppwrite", 
  "credentials": {
    "nAppwriteApi": "credential-id"
  }
}

// New configuration
{
  "name": "ZAppwrite",
  "type": "zAppwrite",
  "credentials": {
    "zAppwriteApi": "credential-id"  
  }
}
```

#### 4. Functionality Verification
- Test all existing workflows
- Verify credentials work correctly
- Confirm operations produce expected results

**Note**: All functionality remains identical - only naming has changed.

## Advanced Usage

### Query Building
ZAppwrite supports Appwrite's query system for filtering and sorting:

```javascript
// Example queries in workflow expressions
[
  Query.equal('status', 'published'),
  Query.greaterThan('created_at', '2024-01-01'),
  Query.orderDesc('updated_at'),
  Query.limit(10)
]
```

### Error Handling
Implement proper error handling in your workflows:
- Check for authentication errors
- Handle network timeouts
- Validate required parameters
- Log errors for debugging

### Performance Tips
- Use query filters to limit data transfer
- Implement pagination for large datasets
- Cache frequently accessed data
- Monitor API rate limits

## Development

### Building from Source
```bash
# Clone repository
git clone https://github.com/zachhandley/n8n-nodes-appwrite.git
cd n8n-nodes-appwrite

# Install dependencies
pnpm install

# Build package
pnpm build

# Run linting
pnpm lint
```

### Contributing
1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Run build and lint checks
5. Submit pull request

## Resources

- **N8N Community Nodes**: [Documentation](https://docs.n8n.io/integrations/community-nodes/)
- **Appwrite**: [Website](https://appwrite.io) | [Documentation](https://appwrite.io/docs)
- **GitHub Repository**: [n8n-nodes-appwrite](https://github.com/zachhandley/n8n-nodes-appwrite)
- **Package Registry**: [NPM](https://www.npmjs.com/package/n8n-nodes-zappwrite)
- **Support**: [GitHub Issues](https://github.com/zachhandley/n8n-nodes-appwrite/issues)
- **Developer**: [Zachary Handley](https://zachhandley.com)

## Changelog

### 1.0.1 - Fix README.md links
- They were linking to what I thought I was gonna name the repository, not what I actually did

### 1.0.0 - ZAppwrite Rebrand
- **Complete rebrand** from NAppwrite to ZAppwrite
- **Maintained 100% compatibility** with existing functionality
- **Enhanced documentation** and migration guides
- **Updated package structure** and naming conventions
- **Improved testing** and validation procedures

### Previous Versions (NAppwrite Legacy)
- **0.71.4** - Bug fixes, query conversion improvements
- **0.71.3** - Safe JSON parsing for query strings  
- **0.71.2** - Updated Appwrite logo
- **0.71.1** - Appwrite 1.6.x support
- **0.70.0** - Appwrite 1.5.x support
- **0.69.1** - Document update fixes
- **0.69.0** - Initial release

## License

MIT License - see [LICENSE.md](LICENSE.md) for details.

## Support

For issues, questions, or contributions:
- **GitHub Issues**: [Report bugs or request features](https://github.com/zachhandley/n8n-nodes-appwrite/issues)
- **Documentation**: Check this README and [REBRAND.md](REBRAND.md)
- **N8N Community**: [N8N Community Forum](https://community.n8n.io/)
- **Appwrite Community**: [Appwrite Discord](https://appwrite.io/discord)