import { Layout } from "./Layout";
import { AuthProvider } from "../shared/hooks/useAuth";
import { GoogleOAuthProvider } from "../shared/components/GoogleOAuthProvider";
import { ProtectedRoute } from "../shared/components/ProtectedRoute";
import { ThemeProvider } from "../shared/context/ThemeContext";
import { AUTH_CONFIG } from "../shared/config/auth";
import { DashboardPage } from "../pages/dashboard";

const App = () => {
  return (
    <ThemeProvider>
      <GoogleOAuthProvider clientId={AUTH_CONFIG.GOOGLE_CLIENT_ID}>
        <AuthProvider>
          <ProtectedRoute>
            <Layout>
              <DashboardPage />
            </Layout>
          </ProtectedRoute>
        </AuthProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default App;
