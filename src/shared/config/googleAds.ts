export const GOOGLE_ADS_CONFIG = {
  // Эти значения нужно будет заменить на реальные после настройки Google Ads API
  CLIENT_ID: import.meta.env.VITE_GOOGLE_ADS_CLIENT_ID || '',
  CLIENT_SECRET: import.meta.env.VITE_GOOGLE_ADS_CLIENT_SECRET || '',
  DEVELOPER_TOKEN: import.meta.env.VITE_GOOGLE_ADS_DEVELOPER_TOKEN || '',
  LOGIN_CUSTOMER_ID: import.meta.env.VITE_GOOGLE_ADS_LOGIN_CUSTOMER_ID || '',
  
  // API endpoints
  API_BASE_URL: 'https://googleads.googleapis.com/v14',
  
  // Scopes для Google Ads API
  SCOPES: [
    'https://www.googleapis.com/auth/adwords',
    'https://www.googleapis.com/auth/userinfo.email'
  ]
};

// Инструкции по настройке Google Ads API
export const GOOGLE_ADS_SETUP_INSTRUCTIONS = `
Для настройки Google Ads API необходимо:

1. Создать проект в Google Cloud Console
2. Включить Google Ads API
3. Создать OAuth 2.0 credentials
4. Получить Developer Token от Google Ads
5. Настроить переменные окружения:

REACT_APP_GOOGLE_ADS_CLIENT_ID=your_client_id
REACT_APP_GOOGLE_ADS_CLIENT_SECRET=your_client_secret
REACT_APP_GOOGLE_ADS_DEVELOPER_TOKEN=your_developer_token
REACT_APP_GOOGLE_ADS_LOGIN_CUSTOMER_ID=your_customer_id

Подробная инструкция: https://developers.google.com/google-ads/api/docs/first-call/dev-token
`; 