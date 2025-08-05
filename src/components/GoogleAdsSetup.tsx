import React, { useState } from 'react';
import { Card, Form, Input, Button, Alert, Typography, Space, Divider } from 'antd';
import { SettingOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { googleAdsApiService } from '../shared/api/googleAdsApi';
import { GOOGLE_ADS_CONFIG, GOOGLE_ADS_SETUP_INSTRUCTIONS } from '../shared/config/googleAds';

const { Title, Text, Paragraph } = Typography;

export const GoogleAdsSetup: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);

  const handleSetup = async (values: {
    clientId: string;
    clientSecret: string;
    developerToken: string;
    loginCustomerId: string;
  }) => {
    setLoading(true);
    
    try {
      // Настраиваем Google Ads API сервис
      googleAdsApiService.setConfig({
        clientId: values.clientId,
        clientSecret: values.clientSecret,
        developerToken: values.developerToken,
        loginCustomerId: values.loginCustomerId
      });

      // TODO: Здесь нужно будет добавить получение access token через OAuth
      // Пока что используем моковый токен для тестирования
      googleAdsApiService.setAccessToken('mock_access_token');
      
      setSetupComplete(true);
    } catch (error) {
      console.error('Setup error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Настройка Google Ads API" style={{ margin: '20px' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        
        <Alert
          message="Инструкция по настройке"
          description={
            <div>
              <Paragraph>
                Для работы с Google Ads API необходимо выполнить следующие шаги:
              </Paragraph>
              <ol>
                <li>Создать проект в Google Cloud Console</li>
                <li>Включить Google Ads API</li>
                <li>Создать OAuth 2.0 credentials</li>
                <li>Получить Developer Token от Google Ads</li>
                <li>Настроить переменные окружения</li>
              </ol>
              <Paragraph>
                <Text code>Подробная инструкция: https://developers.google.com/google-ads/api/docs/first-call/dev-token</Text>
              </Paragraph>
            </div>
          }
          type="info"
          showIcon
          icon={<InfoCircleOutlined />}
        />

        <Divider />

        <Form
          form={form}
          onFinish={handleSetup}
          layout="vertical"
          initialValues={{
            clientId: GOOGLE_ADS_CONFIG.CLIENT_ID,
            clientSecret: GOOGLE_ADS_CONFIG.CLIENT_SECRET,
            developerToken: GOOGLE_ADS_CONFIG.DEVELOPER_TOKEN,
            loginCustomerId: GOOGLE_ADS_CONFIG.LOGIN_CUSTOMER_ID
          }}
        >
          <Form.Item
            name="clientId"
            label="Client ID"
            rules={[{ required: true, message: 'Введите Client ID' }]}
          >
            <Input placeholder="your_client_id" />
          </Form.Item>

          <Form.Item
            name="clientSecret"
            label="Client Secret"
            rules={[{ required: true, message: 'Введите Client Secret' }]}
          >
            <Input.Password placeholder="your_client_secret" />
          </Form.Item>

          <Form.Item
            name="developerToken"
            label="Developer Token"
            rules={[{ required: true, message: 'Введите Developer Token' }]}
          >
            <Input placeholder="your_developer_token" />
          </Form.Item>

          <Form.Item
            name="loginCustomerId"
            label="Login Customer ID"
            rules={[{ required: true, message: 'Введите Login Customer ID' }]}
          >
            <Input placeholder="1234567890" />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              icon={<SettingOutlined />}
              loading={loading}
              block
            >
              Настроить Google Ads API
            </Button>
          </Form.Item>
        </Form>

        {setupComplete && (
          <Alert
            message="Настройка завершена"
            description="Google Ads API успешно настроен. Теперь вы можете анализировать URL."
            type="success"
            showIcon
          />
        )}
      </Space>
    </Card>
  );
}; 