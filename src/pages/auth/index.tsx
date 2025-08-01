import React, { useState } from "react";
import { Card, Button, Typography, Divider, Space, Alert } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useAuth } from "../../shared/hooks/useAuth";
import { AuthError } from "../../shared/components/AuthError";

const { Title, Text } = Typography;

export const AuthPage: React.FC = () => {
  const { loginWithGoogle, isAuthenticated, isLoading } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setError(null);
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error("Google login failed:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred during login"
      );
    }
  };

  if (isAuthenticated) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>Redirecting...</div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 400,
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          borderRadius: 12,
        }}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div style={{ textAlign: "center" }}>
            <Title level={2} style={{ marginBottom: 8 }}>
              Welcome
            </Title>
            <Text type="secondary">Sign in to access the dashboard</Text>
          </div>

          <Button
            type="primary"
            size="large"
            icon={<GoogleOutlined />}
            onClick={handleGoogleLogin}
            loading={isLoading}
            style={{
              width: "100%",
              height: 48,
              background: "#4285f4",
              borderColor: "#4285f4",
            }}
          >
            Sign in with Google
          </Button>

          <Divider>
            <Text type="secondary">or</Text>
          </Divider>

          {error && <AuthError error={error} onRetry={handleGoogleLogin} />}

          <Alert
            message="Secure Authentication"
            description="We use Google OAuth for secure authentication. Your data is protected."
            type="info"
            showIcon
          />

          <div style={{ marginTop: 16 }}>
            <Text type="secondary" style={{ fontSize: 12 }}>
              By signing in, you agree to our{" "}
              <a href="#" style={{ color: "#1890ff" }}>
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" style={{ color: "#1890ff" }}>
                Privacy Policy
              </a>
            </Text>
          </div>
        </Space>
      </Card>
    </div>
  );
};
