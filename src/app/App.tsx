import { ConfigProvider } from 'antd';
import { Layout } from './Layout';
import { DashboardPage } from '../pages/dashboard';

const theme = {
  token: {
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    borderRadius: 6,
  },
};

const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <DashboardPage />
      </Layout>
    </ConfigProvider>
  );
};

export default App; 