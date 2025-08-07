import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Check if the Firebase API Key is set
if (!firebaseConfig.apiKey || firebaseConfig.apiKey === "undefined") {
  console.warn("Firebase API Key is not set. Please check your environment variables.");
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics (optional)
export const analytics = getAnalytics(app);

// Configure Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Email verification function
export const sendVerificationEmail = async (user: any) => {
  try {
    await sendEmailVerification(user);
    return { success: true };
  } catch (error) {
    console.error("Error sending verification email:", error);
    return { success: false, error };
  }
};

export default app;
