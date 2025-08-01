import React from "react";
import { Card, Avatar, Typography, Space, Button } from "antd";
import { UserOutlined, MailOutlined, LogoutOutlined } from "@ant-design/icons";
import { useAuth } from "../hooks/useAuth";

const { Title, Text } = Typography;

export const UserProfile: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <Card style={{ width: 300 }}>
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <Avatar
            size={64}
            src={user.picture}
            icon={!user.picture ? <UserOutlined /> : undefined}
          />
          <Title level={4} style={{ marginTop: 16, marginBottom: 8 }}>
            {user.name}
          </Title>
          <Text type="secondary">
            <MailOutlined /> {user.email}
          </Text>
        </div>

        <div>
          <Text type="secondary" style={{ fontSize: 12 }}>
            ID пользователя: {user.id}
          </Text>
        </div>

        <Button
          type="primary"
          danger
          icon={<LogoutOutlined />}
          onClick={logout}
          style={{ width: "100%" }}
        >
          Выйти
        </Button>
      </Space>
    </Card>
  );
};
