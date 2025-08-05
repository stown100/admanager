import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { AuthProvider } from "../shared/hooks/useAuth";
import { GoogleOAuthProvider } from "../shared/components/GoogleOAuthProvider";
import { ProtectedRoute } from "../shared/components/ProtectedRoute";
import { AUTH_CONFIG } from "../shared/config/auth";
import { DashboardPage } from "../pages/dashboard";
import { CampaignAnalysisPage } from "../pages/campaign-analysis";
import { SettingsPage } from "../pages/settings";

const theme = {
  token: {
    colorPrimary: "#1890ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    borderRadius: 6,
  },
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId={AUTH_CONFIG.GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <ConfigProvider theme={theme}>
          <Router>
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/campaign-analysis" element={<CampaignAnalysisPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          </Router>
        </ConfigProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
