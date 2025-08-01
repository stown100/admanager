import React from 'react';
import { Layout as AntLayout, Typography, Space, Button, Dropdown, Avatar } from 'antd';
import {
  UserOutlined,
  BellOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useAuth } from '../shared/hooks/useAuth';

const { Header, Content } = AntLayout;
const { Title } = Typography;

interface LayoutProps {
  children: React.ReactNode;
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 24px',
  background: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const contentStyle: React.CSSProperties = {
  padding: '24px',
  minHeight: 'calc(100vh - 64px)',
  background: '#f5f5f5',
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();

  const userMenuItems = [
    {
      key: 'profile',
      label: 'Profile',
      icon: <UserOutlined />,
    },
    {
      key: 'settings',
      label: 'Settings',
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      label: 'Sign Out',
      icon: <LogoutOutlined />,
      onClick: logout,
    },
  ];

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
            AdManager
          </Title>
        </div>
        <Space>
          <Button type="text" icon={<BellOutlined />} />
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <Avatar
              src={user?.picture}
              icon={!user?.picture ? <UserOutlined /> : undefined}
              style={{ cursor: 'pointer' }}
            />
          </Dropdown>
        </Space>
      </Header>
      <Content style={contentStyle}>
        {children}
      </Content>
    </AntLayout>
  );
};
