import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Layout } from "./Layout";
import { AuthProvider } from "../shared/hooks/useAuth";
import { GoogleOAuthProvider } from "../shared/components/GoogleOAuthProvider";
import { ProtectedRoute } from "../shared/components/ProtectedRoute";
import { AUTH_CONFIG } from "../shared/config/auth";
import { DashboardPage } from "../pages/dashboard";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1890ff",
    },
    success: {
      main: "#52c41a",
    },
    warning: {
      main: "#faad14",
    },
    error: {
      main: "#ff4d4f",
    },
  },
  shape: {
    borderRadius: 6,
  },
});

const App = () => {
  return (
    <GoogleOAuthProvider clientId={AUTH_CONFIG.GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ProtectedRoute>
            <Layout>
              <DashboardPage />
            </Layout>
          </ProtectedRoute>
        </ThemeProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
