# Настройка Google Ads API

## Пошаговая инструкция

### 1. Создание проекта в Google Cloud Console

1. Перейдите в [Google Cloud Console](https://console.cloud.google.com/)
2. Создайте новый проект или выберите существующий
3. Запишите ID проекта (понадобится позже)

### 2. Включение Google Ads API

1. В Google Cloud Console перейдите в "APIs & Services" > "Library"
2. Найдите "Google Ads API" и включите его
3. Перейдите в "APIs & Services" > "Credentials"

### 3. Создание OAuth 2.0 credentials

1. Нажмите "Create Credentials" > "OAuth 2.0 Client IDs"
2. Выберите тип приложения "Web application"
3. Добавьте авторизованные URI перенаправления:
   - `http://localhost:5173` (для разработки)
   - `https://yourdomain.com` (для продакшена)
4. Запишите Client ID и Client Secret

### 4. Получение Developer Token

1. Перейдите в [Google Ads API Center](https://ads.google.com/apis)
2. Заполните форму для получения Developer Token
3. Дождитесь одобрения (может занять несколько дней)
4. Запишите Developer Token

### 5. Получение Customer ID

1. Войдите в [Google Ads](https://ads.google.com/)
2. Перейдите в настройки аккаунта
3. Найдите Customer ID (10-значный номер)

### 6. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
VITE_GOOGLE_ADS_CLIENT_ID=your_client_id
VITE_GOOGLE_ADS_CLIENT_SECRET=your_client_secret
VITE_GOOGLE_ADS_DEVELOPER_TOKEN=your_developer_token
VITE_GOOGLE_ADS_LOGIN_CUSTOMER_ID=your_customer_id
```

### 7. Настройка в приложении

1. Запустите приложение
2. Перейдите в "Настройки"
3. Заполните форму настройки Google Ads API
4. Нажмите "Настроить Google Ads API"

## Полезные ссылки

- [Google Ads API Documentation](https://developers.google.com/google-ads/api/docs/first-call/dev-token)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Google Ads API Center](https://ads.google.com/apis)

## Примечания

- Developer Token может занять несколько дней для одобрения
- Убедитесь, что у вас есть активный Google Ads аккаунт
- Для тестирования можно использовать тестовый аккаунт Google Ads 