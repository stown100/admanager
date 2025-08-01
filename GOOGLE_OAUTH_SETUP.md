# Google OAuth Setup Guide

This guide will help you set up Google OAuth 2.0 for the AdManager application.

## Prerequisites

- Google account
- Access to [Google Cloud Console](https://console.cloud.google.com/)

## Step-by-Step Setup

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" at the top of the page
3. Click "New Project"
4. Enter a project name (e.g., "AdManager")
5. Click "Create"

### 2. Enable Google+ API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google+ API" or "Google Identity API"
3. Click on the API
4. Click "Enable"

### 3. Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. If prompted, configure the OAuth consent screen:
   - User Type: External
   - App name: AdManager
   - User support email: your email
   - Developer contact information: your email
   - Save and continue

4. Create OAuth 2.0 Client ID:
   - Application type: Web application
   - Name: AdManager Web Client
   - Authorized JavaScript origins:
     ```
     http://localhost:5173
     http://localhost:3000
     http://localhost
     ```
   - Authorized redirect URIs:
     ```
     http://localhost:5173
     http://localhost:3000
     http://localhost
     ```
   - Click "Create"

### 4. Copy Client ID

1. After creating the OAuth client, you'll see a popup with your credentials
2. Copy the "Client ID" (it looks like: `123456789-abcdefghijklmnop.apps.googleusercontent.com`)
3. This is your `VITE_GOOGLE_CLIENT_ID`

### 5. Configure Environment Variables

1. Create a `.env` file in your project root
2. Add the following variables:
   ```env
   VITE_GOOGLE_CLIENT_ID=your-client-id-here
   VITE_REDIRECT_URI=http://localhost:5173
   ```

### 6. Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:5173
3. Click "Sign in with Google"
4. You should see the Google sign-in popup

## Troubleshooting

### Common Issues

1. **"Error: redirect_uri_mismatch"**
   - Make sure your redirect URI in Google Cloud Console matches exactly
   - Check for trailing slashes

2. **"Error: invalid_client"**
   - Verify your Client ID is correct
   - Make sure you're using the Web application client type

3. **"Error: access_denied"**
   - Check that Google+ API is enabled
   - Verify your OAuth consent screen is configured

4. **CORS Issues**
   - Add all necessary origins to Authorized JavaScript origins
   - Include both http and https versions if needed

### Production Setup

For production deployment:

1. Add your production domain to Authorized JavaScript origins:
   ```
   https://your-domain.com
   ```

2. Add your production domain to Authorized redirect URIs:
   ```
   https://your-domain.com
   ```

3. Update your environment variables:
   ```env
   VITE_GOOGLE_CLIENT_ID=your-production-client-id
   VITE_REDIRECT_URI=https://your-domain.com
   ```

## Security Best Practices

1. **Never commit your Client ID to version control**
   - Use environment variables
   - Add `.env` to `.gitignore`

2. **Use HTTPS in production**
   - Google OAuth requires HTTPS for production

3. **Regularly rotate credentials**
   - Create new OAuth clients periodically
   - Remove unused credentials

4. **Monitor usage**
   - Check Google Cloud Console for unusual activity
   - Set up alerts for quota limits

## Additional Resources

- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Google Identity Services](https://developers.google.com/identity/gsi/web)
- [Google Cloud Console](https://console.cloud.google.com/)

---

**Note**: This setup is for development. For production, you'll need to configure additional security measures and domain verification. 