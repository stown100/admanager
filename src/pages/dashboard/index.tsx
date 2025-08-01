import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { MetricsOverview } from "../../widgets/metrics-overview";
import { PlatformComparison } from "../../widgets/platform-comparison";
import { PerformanceChart } from "../../widgets/performance-chart";
import { CampaignLauncher } from "../../features/campaign-launcher";

const { Title } = Typography;

export const DashboardPage: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={2}>Dashboard</Title>
        <Typography.Text type="secondary">
          Overview of your advertising campaigns and performance metrics
        </Typography.Text>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={24}>
          <MetricsOverview />
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card title="Platform Comparison" style={{ height: "100%" }}>
            <PlatformComparison />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Performance Trends" style={{ height: "100%" }}>
            <PerformanceChart />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={24}>
          <Card title="Campaign Management">
            <CampaignLauncher />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
