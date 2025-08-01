import React, { useEffect } from "react";

interface GoogleOAuthProviderProps {
  children: React.ReactNode;
  clientId: string;
}

export const GoogleOAuthProvider: React.FC<GoogleOAuthProviderProps> = ({
  children,
  clientId,
}) => {
  useEffect(() => {
    const loadGoogleIdentityServices = () => {
      return new Promise<void>((resolve, reject) => {
        // Check if script is already loaded
        const existingScript = document.querySelector(
          'script[src*="accounts.google.com/gsi/client"]'
        );
        if (existingScript) {
          resolve();
          return;
        }

        // Use Google Identity Services
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;

        script.onload = () => {
          resolve();
        };

        script.onerror = () => {
          reject(new Error("Failed to load Google Identity Services script"));
        };

        // Add script to head
        document.head.appendChild(script);
      });
    };

    const initializeGoogleAuth = async () => {
      try {
        await loadGoogleIdentityServices();

        // Wait for Google API to be available
        let attempts = 0;
        const maxAttempts = 50;

        const waitForGoogle = () => {
          if (window.google && window.google.accounts) {
            return;
          } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(waitForGoogle, 300);
          }
        };

        // Start checking after a small delay
        setTimeout(waitForGoogle, 500);
      } catch (error) {
        console.error("Error loading Google Identity Services:", error);
      }
    };

    // Start initialization
    initializeGoogleAuth();
  }, [clientId]);

  return <>{children}</>;
};
