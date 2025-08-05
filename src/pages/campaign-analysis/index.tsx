import React from 'react';
import { UrlAnalyzer } from '../../components/UrlAnalyzer';
import { Typography } from 'antd';

const { Title } = Typography;

export const CampaignAnalysisPage: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: '24px' }}>
        Анализ маркетинговых кампаний
      </Title>
      <UrlAnalyzer />
    </div>
  );
}; 