import React from 'react';
import {
  Layout as AntLayout,
  Typography,
  Avatar,
  Dropdown,
  Button,
  Space,
  Select,
} from 'antd';
import {
  UserOutlined,
  BellOutlined,
} from '@ant-design/icons';

const { Header, Content } = AntLayout;
const { Title } = Typography;

interface LayoutProps {
  children: React.ReactNode;
}

const companies = [
  { value: 'company1', label: 'Company A' },
  { value: 'company2', label: 'Company B' },
  { value: 'company3', label: 'Company C' },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const userMenuItems = [
    {
      key: 'profile',
      label: 'Profile',
    },
    {
      key: 'settings',
      label: 'Settings',
    },
    {
      key: 'logout',
      label: 'Logout',
    },
  ];

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header style={{ 
        padding: '0 16px', 
        background: '#fff', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
          AdManager
        </Title>
        <Space>
          <Select
            defaultValue="company1"
            style={{ width: 150 }}
            options={companies}
            placeholder="Select Company"
          />
          <Button type="text" icon={<BellOutlined />} />
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <Avatar icon={<UserOutlined />} />
          </Dropdown>
        </Space>
      </Header>
      <Content style={{ padding: '24px', background: '#f0f2f5' }}>
        {children}
      </Content>
    </AntLayout>
  );
};
