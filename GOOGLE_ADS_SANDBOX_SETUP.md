# Настройка Google Ads API Sandbox для разработки

## Что такое Google Ads API Sandbox?

Google Ads API Sandbox - это тестовая среда, которая позволяет разработчикам тестировать интеграцию с Google Ads API без использования реальных данных или расходования бюджета.

## Преимущества использования Sandbox:

- ✅ Безопасное тестирование без риска
- ✅ Не требует реального бюджета
- ✅ Доступ к тестовым данным
- ✅ Быстрая настройка

## Пошаговая настройка Sandbox:

### 1. Получение Sandbox Access

1. Перейдите в [Google Ads API Center](https://ads.google.com/apis)
2. Заполните форму для получения Developer Token
3. В форме укажите, что планируете использовать Sandbox
4. Дождитесь одобрения (обычно быстрее, чем для продакшена)

### 2. Настройка Sandbox Customer ID

В Sandbox используются специальные Customer ID:
- `1234567890` - стандартный тестовый ID
- `9876543210` - альтернативный тестовый ID

### 3. Обновление конфигурации

В файле `.env` добавьте:

```env
# Google Ads API Sandbox
VITE_GOOGLE_ADS_SANDBOX_MODE=true
VITE_GOOGLE_ADS_CLIENT_ID=your_client_id
VITE_GOOGLE_ADS_CLIENT_SECRET=your_client_secret
VITE_GOOGLE_ADS_DEVELOPER_TOKEN=your_sandbox_developer_token
VITE_GOOGLE_ADS_LOGIN_CUSTOMER_ID=1234567890
```

### 4. Обновление API сервиса

В `src/shared/api/googleAdsApi.ts` добавьте поддержку Sandbox:

```typescript
private async makeRequest(endpoint: string, data?: any) {
  const accessToken = await this.getAccessToken();
  const isSandbox = import.meta.env.VITE_GOOGLE_ADS_SANDBOX_MODE === 'true';
  
  const baseUrl = isSandbox 
    ? 'https://googleads.googleapis.com/v14/sandbox'
    : 'https://googleads.googleapis.com/v14';

  try {
    const response = await axios.post(
      `${baseUrl}/${endpoint}`,
      data,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'developer-token': this.config?.developerToken,
          'login-customer-id': this.config?.loginCustomerId,
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Google Ads API Error:', error);
    throw new Error('Failed to fetch data from Google Ads API');
  }
}
```

## Тестовые данные в Sandbox:

- **Кампании**: Предустановленные тестовые кампании
- **Метрики**: Реалистичные тестовые данные
- **Ключевые слова**: Примеры ключевых слов
- **Объявления**: Тестовые объявления

## Переход на продакшен:

Когда будете готовы к продакшену:

1. Получите продакшен Developer Token
2. Обновите Customer ID на реальный
3. Отключите Sandbox режим
4. Протестируйте с реальными данными

## Полезные ссылки:

- [Google Ads API Sandbox Documentation](https://developers.google.com/google-ads/api/docs/sandbox)
- [Google Ads API Center](https://ads.google.com/apis)
- [Sandbox Testing Guide](https://developers.google.com/google-ads/api/docs/sandbox/testing) 