import { ConfigProvider } from 'antd';
import { Layout } from './Layout';
import { DashboardPage } from '../pages/dashboard';
import { AuthProvider } from '../shared/hooks/useAuth';
import { GoogleOAuthProvider } from '../shared/components/GoogleOAuthProvider';
import { ProtectedRoute } from '../shared/components/ProtectedRoute';
import { AUTH_CONFIG } from '../shared/config/auth';

const theme = {
  token: {
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    borderRadius: 6,
  },
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId={AUTH_CONFIG.GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <ConfigProvider theme={theme}>
          <ProtectedRoute>
            <Layout>
              <DashboardPage />
            </Layout>
          </ProtectedRoute>
        </ConfigProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App; 