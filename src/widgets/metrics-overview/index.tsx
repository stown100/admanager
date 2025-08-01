import React from "react";
import { Card, Row, Col, Statistic } from "antd";
import {
  EyeOutlined,
  DollarOutlined,
  UserOutlined,
  RiseOutlined,
  FallOutlined,
} from "@ant-design/icons";

interface MetricCardProps {
  title: string;
  value: number;
  prefix?: React.ReactNode;
  suffix?: string;
  valueStyle?: React.CSSProperties;
  precision?: number;
  change?: string;
  changeType?: "increase" | "decrease";
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  prefix,
  suffix,
  valueStyle,
  precision,
  change,
  changeType,
}) => (
  <Card>
    <Statistic
      title={title}
      value={value}
      prefix={prefix}
      suffix={suffix}
      valueStyle={valueStyle}
      precision={precision}
    />
    {change && (
      <div style={{ marginTop: 8 }}>
        {changeType === "increase" ? (
          <RiseOutlined style={{ color: "#3f8600", marginRight: 4 }} />
        ) : (
          <FallOutlined style={{ color: "#cf1322", marginRight: 4 }} />
        )}
        <span
          style={{
            color: changeType === "increase" ? "#3f8600" : "#cf1322",
            fontSize: "12px",
          }}
        >
          {change}
        </span>
      </div>
    )}
  </Card>
);

export const MetricsOverview: React.FC = () => {
  const metrics = [
    {
      title: "Total Impressions",
      value: 2400000,
      prefix: <EyeOutlined />,
      suffix: "M",
      valueStyle: { color: "#3f8600" },
      precision: 1,
      change: "+12.5%",
      changeType: "increase" as const,
    },
    {
      title: "Total Clicks",
      value: 45200,
      prefix: <EyeOutlined />,
      suffix: "K",
      valueStyle: { color: "#3f8600" },
      precision: 1,
      change: "+8.2%",
      changeType: "increase" as const,
    },
    {
      title: "Total Spend",
      value: 12400,
      prefix: <DollarOutlined />,
      suffix: "K",
      valueStyle: { color: "#cf1322" },
      precision: 1,
      change: "-2.1%",
      changeType: "decrease" as const,
    },
    {
      title: "Active Users",
      value: 8500,
      prefix: <UserOutlined />,
      suffix: "K",
      valueStyle: { color: "#3f8600" },
      precision: 1,
      change: "+15.3%",
      changeType: "increase" as const,
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      {metrics.map((metric, index) => (
        <Col xs={24} sm={12} lg={6} key={index}>
          <MetricCard {...metric} />
        </Col>
      ))}
    </Row>
  );
};
