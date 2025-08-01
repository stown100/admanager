import React from "react";
import { Alert, Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

interface AuthErrorProps {
  error: string;
  onRetry?: () => void;
}

export const AuthError: React.FC<AuthErrorProps> = ({ error, onRetry }) => {
  return (
    <Alert
      message="Authentication Error"
      description={error}
      type="error"
      showIcon
      action={
        onRetry && (
          <Button
            size="small"
            danger
            icon={<ReloadOutlined />}
            onClick={onRetry}
          >
            Try Again
          </Button>
        )
      }
      style={{ marginBottom: 16 }}
    />
  );
};
