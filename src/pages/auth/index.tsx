import React, { useState, useEffect } from "react";
import { Card, Button, Typography, Divider, Space, Alert, Spin } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useAuth } from "../../shared/hooks/useAuth";

const { Title, Text } = Typography;

export const AuthPage: React.FC = () => {
  const { loginWithGoogle, isAuthenticated, isLoading: globalLoading } = useAuth();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto redirect when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/dashboard";
    }
  }, [isAuthenticated]);

  const handleGoogleLogin = async () => {
    setError(null);
    setIsFormLoading(true);
    
    try {
      await loginWithGoogle();
      // Success - redirect will happen automatically via useEffect
    } catch (error) {
      console.error("Google login failed:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred during login. Please try again."
      );
    } finally {
      setIsFormLoading(false);
    }
  };

  // Show loading spinner while checking authentication status
  if (globalLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <Spin size="large" />
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
            loading={isFormLoading}
            disabled={isFormLoading}
            style={{
              width: "100%",
              height: 48,
              background: "#4285f4",
              borderColor: "#4285f4",
            }}
          >
            {isFormLoading ? "Signing in..." : "Sign in with Google"}
          </Button>

          <Divider>
            <Text type="secondary">or</Text>
          </Divider>

          {error && (
            <Alert
              message="Authentication Error"
              description={error}
              type="error"
              showIcon
              closable
              onClose={() => setError(null)}
              style={{ marginBottom: 16 }}
            />
          )}

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
