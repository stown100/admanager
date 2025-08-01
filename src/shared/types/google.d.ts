declare global {
  interface Window {
    google: {
      auth2: {
        init(config: any): Promise<any>;
        getAuthInstance(): GoogleAuth;
      };
      accounts: {
        id: {
          initialize(config: any): void;
          renderButton(element: HTMLElement, options: any): void;
          prompt(): void;
          disableAutoSelect(): void;
        };
        oauth2: {
          initTokenClient(config: any): any;
          hasGrantedAllScopes(tokenResponse: any, ...scopes: string[]): boolean;
        };
      };
    };
  }
}

interface GoogleAuth {
  signIn(): Promise<GoogleUser>;
  signOut(): Promise<void>;
  isSignedIn: {
    get(): boolean;
    listen(listener: (signedIn: boolean) => void): void;
  };
  currentUser: {
    get(): GoogleUser;
    listen(listener: (user: GoogleUser) => void): void;
  };
}

interface GoogleUser {
  getId(): string;
  getBasicProfile(): GoogleProfile;
  getAuthResponse(): GoogleAuthResponse;
}

interface GoogleProfile {
  getId(): string;
  getName(): string;
  getGivenName(): string;
  getFamilyName(): string;
  getImageUrl(): string;
  getEmail(): string;
}

interface GoogleAuthResponse {
  access_token: string;
  id_token: string;
  scope: string;
  expires_in: number;
  first_issued_at: number;
  expires_at: number;
}

export {}; 