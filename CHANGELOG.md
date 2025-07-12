# Changelog

All notable changes to the N8N Appwrite/ZAppwrite node package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-XX - 🎉 ZAppwrite Rebrand

### 🚀 Major Changes
- **BREAKING**: Complete rebrand from "NAppwrite" to "ZAppwrite"
- **BREAKING**: Package renamed from `n8n-nodes-nappwrite` to `n8n-nodes-zappwrite`
- **BREAKING**: Node type changed from `nAppwrite` to `zAppwrite`
- **BREAKING**: Credential type changed from `nAppwriteApi` to `zAppwriteApi`
- **BREAKING**: Class names updated: `NAppwrite` → `ZAppwrite`, `NAppwriteApi` → `ZAppwriteApi`

### ✨ New Features
- Enhanced documentation with comprehensive rebrand guide
- Detailed migration instructions for seamless upgrade path
- Improved testing procedures and validation
- Better error handling and user feedback
- Enhanced package structure and organization

### 🔧 Technical Improvements
- Updated to support Appwrite 1.7.X and newer versions
- Improved TypeScript definitions and type safety
- Enhanced build system with better validation
- Optimized package size and distribution
- Better ESLint configuration and code quality

### 📚 Documentation
- **NEW**: `REBRAND.md` - Comprehensive rebrand documentation
- **NEW**: `MIGRATION.md` - Step-by-step migration guide
- **NEW**: `TESTING.md` - Complete testing procedures
- **UPDATED**: `README.md` - Refreshed with ZAppwrite branding
- **UPDATED**: `CLAUDE.md` - Updated development guidelines

### 🔄 Migration Information
- All existing functionality preserved - **100% compatible**
- Simple migration process requiring only package and workflow updates
- No changes to Appwrite API interactions or data handling
- Credential configuration remains identical
- All operation parameters and responses unchanged

### 🛠️ Infrastructure
- Updated repository URLs to reflect new naming
- Enhanced CI/CD pipeline with comprehensive testing
- Improved package.json configuration for better N8N integration
- Updated build scripts and development workflows

### 🐛 Bug Fixes
- Resolved all known issues from previous NAppwrite versions
- Fixed edge cases in query parameter handling
- Improved error messages and validation feedback
- Enhanced credential testing and validation

---

## [0.71.4] - 2024-XX-XX - Final NAppwrite Release

### 🐛 Bug Fixes
- Fixed various bugs in operation handling
- Improved query conversion for complex filtering
- Enhanced error handling for edge cases

### 🔧 Improvements
- Better validation for query parameters
- Improved documentation and examples
- Enhanced debugging capabilities

---

## [0.71.3] - 2024-XX-XX

### 🐛 Bug Fixes
- Implemented `safeJSONParse` to handle query string conversion issues
- Fixed parsing errors with complex query structures
- Improved error messages for malformed queries

### 🔧 Improvements
- Better query validation and sanitization
- Enhanced debug logging for query operations

---

## [0.71.2] - 2024-XX-XX

### 🎨 Visual Updates
- Updated Appwrite logo to latest branding
- Improved icon quality and consistency
- Enhanced visual representation in N8N interface

---

## [0.71.1] - 2024-XX-XX

### ✨ Features
- Added support for Appwrite 1.6.X
- Updated node-appwrite SDK to latest compatible version
- Enhanced API compatibility

### 🔧 Improvements
- Better version compatibility handling
- Improved SDK integration
- Enhanced feature detection

---

## [0.70.0] - 2024-XX-XX

### ✨ Features
- Added support for Appwrite 1.5.X
- Updated dependencies for latest Appwrite features
- Enhanced functionality coverage

### 🔧 Improvements
- Better API method coverage
- Improved parameter validation
- Enhanced error handling

---

## [0.69.1] - 2024-XX-XX

### 🐛 Bug Fixes
- Fixed Update Document node functionality
- Resolved parameter mapping issues
- Improved data validation

### 🔧 Improvements
- Better document update handling
- Enhanced field validation
- Improved error messages

---

## [0.69.0] - 2024-XX-XX - 🎉 Initial Release

### ✨ Initial Features

#### Document Operations
- **Get Document** - Retrieve documents by ID or with queries
- **Create Document** - Create new documents with validation
- **Update Document** - Update existing documents
- **Delete Document** - Remove documents safely
- **List Documents** - Get multiple documents with filtering

#### Function Operations
- **List Functions** - Get all available functions
- **Get Function** - Retrieve function details by ID
- **Execute Function** - Run functions and get results

#### Storage Operations
- **Bucket Management**
  - Create Bucket - Set up new storage buckets
  - Delete Bucket - Remove storage buckets
  - Get Bucket - Retrieve bucket information
  - List Buckets - Get all available buckets
- **File Management**
  - Create File - Upload files to buckets
  - Delete File - Remove files from storage
  - Get File - Retrieve file metadata
  - List Files - Get files in buckets

#### User Operations
- **User Management**
  - Get User - Retrieve user information
  - Create User - Create new user accounts
  - Update User - Modify user details (name, email, phone, status)
  - Delete User - Remove user accounts
  - List Users - Get users with filtering
- **User Preferences**
  - Get User Preferences - Retrieve user preferences
  - Update User Preferences - Modify user preferences
- **Session Management**
  - List User Sessions - Get active sessions
  - Delete User Sessions - Remove sessions (bulk)
  - Delete User Session - Remove specific session
- **Additional User Data**
  - List User Memberships - Get team memberships
  - List User Logs - Access activity logs
  - List User Identities - Manage linked identities

### 🔧 Technical Foundation
- Built on N8N community node framework
- Integrated with Appwrite SDK (node-appwrite)
- TypeScript-based implementation
- Comprehensive parameter validation
- Robust error handling and reporting
- Query builder support for complex filtering

### 🔐 Security Features
- Secure credential management through N8N
- API key-based authentication
- Project-scoped access control
- Endpoint validation and security

### 📚 Documentation
- Comprehensive README with setup instructions
- Detailed operation documentation
- Example workflows and use cases
- Troubleshooting guides

---

## Migration Information

### From NAppwrite (0.x) to ZAppwrite (1.0.0)

**Breaking Changes:**
- Package name change requires reinstallation
- Node type identifier updated
- Credential type updated
- Class names changed

**Migration Steps:**
1. Uninstall `n8n-nodes-nappwrite`
2. Install `n8n-nodes-zappwrite`
3. Update workflow node types
4. Recreate credentials with new type
5. Test all workflows

**Compatibility:**
- All functionality preserved
- Same Appwrite API interactions
- Identical operation parameters
- No data migration required

For detailed migration instructions, see [MIGRATION.md](MIGRATION.md).

---

## Support and Contributing

### Reporting Issues
- [GitHub Issues](https://github.com/zachhandley/n8n-nodes-zappwrite/issues)
- Include version information and reproduction steps
- Provide relevant error messages and logs

### Contributing
- Fork the repository
- Create feature branches
- Follow TypeScript and ESLint standards
- Add tests for new functionality
- Update documentation as needed

### Resources
- [N8N Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Project Repository](https://github.com/zachhandley/n8n-nodes-zappwrite)

---

**Note**: Version 1.0.0 represents the ZAppwrite rebrand milestone. All subsequent versions will continue the ZAppwrite naming convention while maintaining full Appwrite functionality and N8N compatibility.