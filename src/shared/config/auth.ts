// Config for Google OAuth
export const AUTH_CONFIG = {
  // Replace with your real Google Client ID
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,

  // OAuth settings
  GOOGLE_SCOPE: "email profile",

  // Redirect URL after authorization
  REDIRECT_URI: import.meta.env.VITE_REDIRECT_URI,
};
