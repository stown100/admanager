import React from "react";
import { Typography, Card, Row, Col, Statistic, Tabs } from "antd";
import {
  EyeOutlined,
  AimOutlined,
  DollarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { PlatformComparison } from "../../widgets/platform-comparison";
import { PerformanceChart } from "../../widgets/performance-chart";
import { CampaignLauncher } from "../../features/campaign-launcher";

const { Title } = Typography;

export const DashboardPage: React.FC = () => {
  const metrics = [
    {
      title: "Total Impressions",
      value: 2400000,
      prefix: <EyeOutlined />,
      suffix: "M",
      valueStyle: { color: "#3f8600" },
      precision: 1,
    },
    {
      title: "Total Clicks",
      value: 45200,
      prefix: <AimOutlined />,
      suffix: "K",
      valueStyle: { color: "#3f8600" },
      precision: 1,
    },
    {
      title: "Total Spend",
      value: 12400,
      prefix: <DollarOutlined />,
      suffix: "K",
      valueStyle: { color: "#cf1322" },
      precision: 1,
    },
    {
      title: "Active Users",
      value: 8500,
      prefix: <UserOutlined />,
      suffix: "K",
      valueStyle: { color: "#3f8600" },
      precision: 1,
    },
  ];

  const tabItems = [
    {
      key: 'overview',
      label: 'Overview',
      children: (
        <>
          <Row gutter={[16, 16]}>
            {metrics.map((metric, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card>
                  <Statistic
                    title={metric.title}
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    valueStyle={metric.valueStyle}
                    precision={metric.precision}
                  />
                </Card>
              </Col>
            ))}
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            <Col span={24}>
              <PlatformComparison />
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            <Col span={24}>
              <PerformanceChart />
            </Col>
          </Row>
        </>
      ),
    },
    {
      key: 'campaigns',
      label: 'Campaigns',
      children: <CampaignLauncher />,
    },
  ];

  return (
    <div>
      <Title level={2}>AdManager Dashboard</Title>
      
      <Tabs 
        defaultActiveKey="overview" 
        items={tabItems}
        size="large"
        style={{ marginTop: 16 }}
      />
    </div>
  );
};
