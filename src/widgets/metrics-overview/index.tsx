import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import {
  EyeOutlined,
  AimOutlined,
  DollarOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const MetricsOverview: React.FC = () => {
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

  return (
    <Row gutter={[12, 12]}>
      {metrics.map((metric, index) => (
        <Col xs={24} sm={12} lg={6} key={index}>
          <Card size="small">
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
  );
};
