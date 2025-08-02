import React from "react";
import {
  Layout as AntLayout,
  Typography,
  Space,
  Button,
  Dropdown,
  Avatar,
} from "antd";
import { UserOutlined, BellOutlined, LogoutOutlined } from "@ant-design/icons";
import { useAuth } from "../shared/hooks/useAuth";

const { Header, Content } = AntLayout;
const { Title } = Typography;

interface LayoutProps {
  children: React.ReactNode;
}

const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  background: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  width: "100%",
};

const headerContentStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: 1350,
  margin: "0 auto",
  width: "100%",
};

const contentStyle: React.CSSProperties = {
  padding: "16px",
  minHeight: "calc(100vh - 64px)",
  background: "#f5f5f5",
  marginTop: 64,
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();

  const userMenuItems = [
    {
      key: "profile",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      label: "Sign Out",
      icon: <LogoutOutlined />,
      onClick: logout,
    },
  ];

  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <div style={{ background: "#fff" }}>
        <Header style={headerStyle}>
          <div style={headerContentStyle}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Title level={3} style={{ margin: 0, color: "#1890ff" }}>
                AdManager
              </Title>
            </div>
            <Space>
              <Button type="text" icon={<BellOutlined />} />
              <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
                <Avatar
                  src={user?.picture}
                  icon={!user?.picture ? <UserOutlined /> : undefined}
                  style={{ cursor: "pointer" }}
                />
              </Dropdown>
            </Space>
          </div>
        </Header>
      </div>
      <Content style={contentStyle}>{children}</Content>
    </AntLayout>
  );
};
