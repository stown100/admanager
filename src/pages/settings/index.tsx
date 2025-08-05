import React from 'react';
import { GoogleAdsSetup } from '../../components/GoogleAdsSetup';
import { Typography } from 'antd';

const { Title } = Typography;

export const SettingsPage: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: '24px' }}>
        Настройки
      </Title>
      <GoogleAdsSetup />
    </div>
  );
}; 