import React, { useState } from 'react';
import { Card, Input, Button, Form, message, Spin, Typography, Space } from 'antd';
import { SearchOutlined, BarChartOutlined } from '@ant-design/icons';
import { googleAdsApiService, CampaignAnalysis } from '../shared/api/googleAdsApi';

const { Title, Text } = Typography;

interface AnalysisResult {
  campaignData?: any;
  loading: boolean;
  error?: string;
}

export const UrlAnalyzer: React.FC = () => {
  const [form] = Form.useForm();
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult>({
    loading: false
  });

  const handleAnalyze = async (values: { url: string }) => {
    setAnalysisResult({ loading: true });
    
    try {
      const analysis: CampaignAnalysis = await googleAdsApiService.analyzeUrl(values.url);
      
      setAnalysisResult({
        loading: false,
        campaignData: analysis.campaignData
      });
      
      message.success('Анализ завершен успешно!');
    } catch (error) {
      setAnalysisResult({
        loading: false,
        error: error instanceof Error ? error.message : 'Ошибка при анализе URL'
      });
      message.error('Ошибка при анализе URL');
    }
  };

  return (
    <Card title="Анализ маркетинговых кампаний" style={{ margin: '20px' }}>
      <Form
        form={form}
        onFinish={handleAnalyze}
        layout="vertical"
      >
        <Form.Item
          name="url"
          label="URL для анализа"
          rules={[
            { required: true, message: 'Пожалуйста, введите URL' },
            { type: 'url', message: 'Пожалуйста, введите корректный URL' }
          ]}
        >
          <Input 
            placeholder="https://example.com" 
            prefix={<SearchOutlined />}
            size="large"
          />
        </Form.Item>
        
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            icon={<BarChartOutlined />}
            size="large"
            loading={analysisResult.loading}
            block
          >
            Анализировать кампанию
          </Button>
        </Form.Item>
      </Form>

      {analysisResult.loading && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <Spin size="large" />
          <div style={{ marginTop: '16px' }}>
            <Text>Анализируем кампанию...</Text>
          </div>
        </div>
      )}

      {analysisResult.campaignData && !analysisResult.loading && (
        <Card title="Результаты анализа" style={{ marginTop: '20px' }}>
          <div>
            <Title level={4}>Метрики кампании</Title>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <Card size="small">
                <Text strong>Показы</Text>
                <div>{analysisResult.campaignData.impressions.toLocaleString()}</div>
              </Card>
              <Card size="small">
                <Text strong>Клики</Text>
                <div>{analysisResult.campaignData.clicks.toLocaleString()}</div>
              </Card>
              <Card size="small">
                <Text strong>CTR</Text>
                <div>{analysisResult.campaignData.ctr.toFixed(1)}%</div>
              </Card>
              <Card size="small">
                <Text strong>CPC</Text>
                <div>${analysisResult.campaignData.cpc.toFixed(2)}</div>
              </Card>
              <Card size="small">
                <Text strong>Конверсии</Text>
                <div>{analysisResult.campaignData.conversions}</div>
              </Card>
              <Card size="small">
                <Text strong>Конверсионная ставка</Text>
                <div>{analysisResult.campaignData.conversionRate.toFixed(2)}%</div>
              </Card>
              <Card size="small">
                <Text strong>Расходы</Text>
                <div>${analysisResult.campaignData.spend.toFixed(2)}</div>
              </Card>
              {analysisResult.campaignData.qualityScore && (
                <Card size="small">
                  <Text strong>Качество объявлений</Text>
                  <div>{analysisResult.campaignData.qualityScore}/10</div>
                </Card>
              )}
            </div>
          </div>
        </Card>
      )}

      {analysisResult.error && (
        <Card title="Ошибка" style={{ marginTop: '20px' }}>
          <Text type="danger">{analysisResult.error}</Text>
        </Card>
      )}
    </Card>
  );
}; 