import { User as FirebaseUser } from 'firebase/auth';

export interface User {
  id: string;
  email: string;
  name: string;
  picture: string;
  emailVerified: boolean;
  isNewUser: boolean;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoggingIn: boolean;
  isEmailVerified: boolean;
  isNewUser: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  sendVerificationEmail: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

export interface FirebaseAuthError {
  code: string;
  message: string;
}
