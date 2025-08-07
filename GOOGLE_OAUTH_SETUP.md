# Google OAuth 2.0 Setup Guide

This guide will help you set up Google OAuth 2.0 for the ROIable application.

## Prerequisites

- Google account
- Access to Google Cloud Console

## Step-by-Step Setup

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" at the top
3. Click "New Project"
4. Enter a project name (e.g., "ROIable")
5. Click "Create"

### 2. Enable Google+ API

1. In your project, go to "APIs & Services" > "Library"
2. Search for "Google+ API"
3. Click on it and press "Enable"

### 3. Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. If prompted, configure the OAuth consent screen:
   - App name: ROIable
   - User support email: your email
   - Developer contact information: your email
4. Click "Save and Continue" through the steps
5. Back to "Credentials", click "Create Credentials" > "OAuth client ID"
6. Choose "Web application"
7. Configure:
   - Name: ROIable Web Client
   - Authorized JavaScript origins: `http://localhost:5173`
   - Authorized redirect URIs: `http://localhost:5173`
8. Click "Create"

### 4. Copy Client ID

Copy the generated Client ID and add it to your `.env.local` file:

```env
VITE_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
```

## Testing

1. Start your development server: `npm run dev`
2. Open `http://localhost:5173`
3. Try signing in with Google
4. Check browser console for any errors

## Troubleshooting

### Common Issues

1. **"Invalid client" error**
   - Make sure Client ID is correct in `.env.local`
   - Check that the project is active in Google Cloud Console

2. **"Redirect URI mismatch" error**
   - Verify `http://localhost:5173` is in Authorized redirect URIs
   - Check for extra spaces or typos

3. **"Origin not allowed" error**
   - Add `http://localhost:5173` to Authorized JavaScript origins
   - Make sure the URL matches exactly

### Production Setup

For production deployment:

1. Add your domain to Authorized JavaScript origins
2. Add your domain to Authorized redirect URIs
3. Update `VITE_GOOGLE_CLIENT_ID` in production environment

## Security Notes

- Never commit your Client ID to version control
- Use environment variables for sensitive data
- Regularly rotate credentials if needed 