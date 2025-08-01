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

  useEffect(() => {
    const savedUser = localStorage.getItem("admanager_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing saved user:", error);
        localStorage.removeItem("admanager_user");
      }
    }
    setIsLoading(false);
  }, []);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Check if Google Identity Services is loaded
      if (!window.google) {
        throw new Error(
          "Google Identity Services is not loaded. Please check your internet connection."
        );
      }

      const accounts = window.google.accounts;
      if (!accounts) {
        throw new Error(
          "Google Accounts is not available. Please refresh the page."
        );
      }

      // Use new Google Identity Services API
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      if (!clientId) {
        throw new Error("Google Client ID is not configured.");
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
              localStorage.setItem("admanager_user", JSON.stringify(userData));
              setIsLoading(false);
              resolve();
            } catch (error) {
              console.error("Error processing Google response:", error);
              setIsLoading(false);
              reject(new Error("Error processing user data"));
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
          reject(new Error("Failed to start authentication process"));
        }
      });
    } catch (error) {
      console.error("Google login error:", error);
      setIsLoading(false);

      // More detailed error messages
      if (error instanceof Error) {
        if (error.message.includes("popup_closed_by_user")) {
          throw new Error(
            "Authentication window was closed. Please try again."
          );
        } else if (error.message.includes("access_denied")) {
          throw new Error("Access was denied. Please try again.");
        } else if (error.message.includes("immediate_failed")) {
          throw new Error("Authentication failed. Please try again.");
        } else if (error.message.includes("CORS")) {
          throw new Error(
            "CORS issue. Please check Google Cloud Console settings."
          );
        }
      }

      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("admanager_user");

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
