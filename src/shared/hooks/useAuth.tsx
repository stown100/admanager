import { useState, useEffect, createContext, useContext } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  picture: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
}

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
    
    // Set loading to false after a short delay to ensure Google services are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Check if Google Identity Services is loaded
      if (!window.google) {
        throw new Error(
          "Google Identity Services is not loaded. Please check your internet connection and refresh the page."
        );
      }

      const accounts = window.google.accounts;
      if (!accounts) {
        throw new Error(
          "Google Accounts is not available. Please refresh the page and try again."
        );
      }

      // Use new Google Identity Services API
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      if (!clientId) {
        throw new Error("Google Client ID is not configured. Please contact support.");
      }

      // Create Promise for handling authentication
      return new Promise<void>((resolve, reject) => {
        // Initialize Google Identity Services with simplified settings
        accounts.id.initialize({
          client_id: clientId,
          callback: (response: any) => {
            try {
              // Get user information from JWT token
              const payload = JSON.parse(
                atob(response.credential.split(".")[1])
              );

              const userData: User = {
                id: payload.sub,
                email: payload.email,
                name: payload.name,
                picture: payload.picture,
              };

              setUser(userData);
              localStorage.setItem("roiable_user", JSON.stringify(userData));
              setIsLoading(false);
              resolve();
            } catch (error) {
              console.error("Error processing Google response:", error);
              setIsLoading(false);
              reject(new Error("Failed to process user data. Please try again."));
            }
          },
          auto_select: false,
          cancel_on_tap_outside: true,
        });

        // Start authentication process directly
        try {
          accounts.id.prompt();
        } catch (error) {
          console.error("Error starting authentication:", error);
          setIsLoading(false);
          reject(new Error("Failed to start authentication process. Please try again."));
        }
      });
    } catch (error) {
      console.error("Google login error:", error);
      setIsLoading(false);

      // More detailed error messages
      if (error instanceof Error) {
        const errorMessage = error.message.toLowerCase();
        
        if (errorMessage.includes("popup_closed_by_user")) {
          throw new Error("Authentication window was closed. Please try again.");
        } else if (errorMessage.includes("access_denied")) {
          throw new Error("Access was denied. Please grant the required permissions and try again.");
        } else if (errorMessage.includes("immediate_failed")) {
          throw new Error("Authentication failed. Please check your credentials and try again.");
        } else if (errorMessage.includes("cors")) {
          throw new Error("Configuration error. Please contact support.");
        } else if (errorMessage.includes("network")) {
          throw new Error("Network error. Please check your internet connection and try again.");
        } else if (errorMessage.includes("timeout")) {
          throw new Error("Authentication timed out. Please try again.");
        } else if (errorMessage.includes("invalid_client")) {
          throw new Error("Configuration error. Please contact support.");
        } else if (errorMessage.includes("unauthorized_client")) {
          throw new Error("Authentication not authorized. Please contact support.");
        }
      }

      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoading(false);
    localStorage.removeItem("roiable_user");

    // Remove Google Sign-In container
    const container = document.getElementById("google-signin-container");
    if (container) {
      container.remove();
    }

    // Sign out from Google Identity Services
    if (window.google?.accounts?.id) {
      window.google.accounts.id.disableAutoSelect();
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    loginWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
