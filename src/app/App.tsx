import { Layout } from "./Layout";
import { AuthProvider } from "../shared/hooks/useAuth";
import { ProtectedRoute } from "../shared/components/ProtectedRoute";
import { ThemeProvider } from "../shared/context/ThemeContext";
import { DashboardPage } from "../pages/dashboard";
import "../shared/config/firebase"; // Initialize Firebase

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProtectedRoute>
          <Layout>
            <DashboardPage />
          </Layout>
        </ProtectedRoute>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
