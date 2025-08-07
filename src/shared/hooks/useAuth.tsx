import { useState, useEffect, createContext, useContext } from "react";
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  User as FirebaseUser,
  sendEmailVerification
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { User, AuthContextType } from "../types/firebase";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  // Convert Firebase user to our User interface
  const convertFirebaseUser = (firebaseUser: FirebaseUser): User => {
    return {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      name: firebaseUser.displayName || '',
      picture: firebaseUser.photoURL || '',
      emailVerified: firebaseUser.emailVerified,
      isNewUser: isNewUser,
    };
  };

  // Check for existing user data on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("roiable_user");
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error("Error parsing saved user data:", error);
        localStorage.removeItem("roiable_user");
      }
    }
    
    // Set loading to false after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userData = convertFirebaseUser(firebaseUser);
        setUser(userData);
        localStorage.setItem("roiable_user", JSON.stringify(userData));
        
        // Check if this is a new user (first time login)
        const isFirstTime = !localStorage.getItem(`user_${firebaseUser.uid}_visited`);
        setIsNewUser(isFirstTime);
        
        if (isFirstTime) {
          localStorage.setItem(`user_${firebaseUser.uid}_visited`, 'true');
        }
      } else {
        setUser(null);
        setIsNewUser(false);
        localStorage.removeItem("roiable_user");
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    setIsLoggingIn(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      // Check if this is a new user by checking if email is verified
      // New users typically have unverified emails
      const isFirstTime = !result.user.emailVerified;
      setIsNewUser(isFirstTime);
      
      if (isFirstTime) {
        // Send verification email for new users
        await sendEmailVerification(result.user);
      }
      
      setIsLoggingIn(false);
    } catch (error: any) {
      console.error("Google login error:", error);
      setIsLoggingIn(false);

      // Handle specific Firebase auth errors with detailed messages
      let errorMessage = "Authentication failed. Please try again.";
      
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = "Authentication window was closed. Please try again.";
          break;
        case 'auth/popup-blocked':
          errorMessage = "Popup was blocked by browser. Please allow popups and try again.";
          break;
        case 'auth/cancelled-popup-request':
          errorMessage = "Authentication was cancelled. Please try again.";
          break;
        case 'auth/account-exists-with-different-credential':
          errorMessage = "An account already exists with this email using a different sign-in method.";
          break;
        case 'auth/network-request-failed':
          errorMessage = "Network error. Please check your internet connection and try again.";
          break;
        case 'auth/configuration-not-found':
          errorMessage = "Firebase configuration not found. Please check domain settings in Firebase Console.";
          break;
        case 'auth/unauthorized-client':
          errorMessage = "Unauthorized client. Please check Google OAuth settings in Firebase Console.";
          break;
        case 'auth/operation-not-allowed':
          errorMessage = "Google sign-in is not enabled. Please enable it in Firebase Console.";
          break;
        case 'auth/domain-not-allowed':
          errorMessage = "Domain not allowed. Please add localhost to authorized domains in Firebase Console.";
          break;
        case 'auth/invalid-api-key':
          errorMessage = "Invalid API key. Please check Firebase configuration.";
          break;
        default:
          if (error.message) {
            errorMessage = error.message;
          }
      }

      throw new Error(errorMessage);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsNewUser(false);
      localStorage.removeItem("roiable_user");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const sendVerificationEmailHandler = async () => {
    if (!user) {
      console.error('No user found for email verification');
      throw new Error('No user found for email verification');
    }
    
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.error('No current user in Firebase auth');
        throw new Error('No current user in Firebase auth');
      }

      console.log('Attempting to send verification email to:', currentUser.email);
      console.log('User email verified status:', currentUser.emailVerified);
      
      // Check if email is already verified
      if (currentUser.emailVerified) {
        console.log('Email is already verified');
        throw new Error('Email is already verified');
      }

      // Send verification email
      await sendEmailVerification(currentUser);
      console.log('Verification email sent successfully');
    } catch (error) {
      console.error('Error sending verification email:', error);
      
      // Provide more specific error messages
      if (error instanceof Error) {
        if (error.message.includes('auth/too-many-requests')) {
          throw new Error('Too many verification email requests. Please wait before trying again.');
        } else if (error.message.includes('auth/user-not-found')) {
          throw new Error('User not found. Please sign in again.');
        } else if (error.message.includes('auth/network-request-failed')) {
          throw new Error('Network error. Please check your internet connection.');
        } else {
          throw new Error(`Failed to send verification email: ${error.message}`);
        }
      }
      
      throw error;
    }
  };

  const refreshUser = async () => {
    if (auth.currentUser) {
      await auth.currentUser.reload();
      const userData = convertFirebaseUser(auth.currentUser);
      setUser(userData);
      localStorage.setItem("roiable_user", JSON.stringify(userData));
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    isLoggingIn,
    isEmailVerified: user?.emailVerified || false,
    isNewUser,
    loginWithGoogle,
    logout,
    sendVerificationEmail: sendVerificationEmailHandler,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
