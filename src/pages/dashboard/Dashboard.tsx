import React from "react";
import { Row, Col, Card, Typography, Progress } from "antd";
import {
  RiseOutlined,
  FallOutlined,
  EyeOutlined,
  DollarOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const { Title, Text } = Typography;

const data = [
  { name: "Mon", impressions: 4000, clicks: 2400, spend: 2400 },
  { name: "Tue", impressions: 3000, clicks: 1398, spend: 2210 },
  { name: "Wed", impressions: 2000, clicks: 9800, spend: 2290 },
  { name: "Thu", impressions: 2780, clicks: 3908, spend: 2000 },
  { name: "Fri", impressions: 1890, clicks: 4800, spend: 2181 },
  { name: "Sat", impressions: 2390, clicks: 3800, spend: 2500 },
  { name: "Sun", impressions: 3490, clicks: 4300, spend: 2100 },
];

const MetricCard: React.FC<{
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}> = ({ title, value, change, isPositive, icon }) => (
  <Card>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Text type="secondary" style={{ fontSize: "14px" }}>
          {title}
        </Text>
        <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "8px" }}>
          {value}
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "8px" }}
        >
          {isPositive ? (
            <RiseOutlined style={{ color: "#52c41a", marginRight: "4px" }} />
          ) : (
            <FallOutlined style={{ color: "#ff4d4f", marginRight: "4px" }} />
          )}
          <Text
            style={{
              color: isPositive ? "#52c41a" : "#ff4d4f",
              fontSize: "12px",
            }}
          >
            {change}
          </Text>
        </div>
      </div>
      <div style={{ color: "#1890ff", fontSize: "24px" }}>{icon}</div>
    </div>
  </Card>
);

const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: "Total Impressions",
      value: "2.4M",
      change: "+12.5%",
      isPositive: true,
      icon: <EyeOutlined />,
    },
    {
      title: "Total Clicks",
      value: "45.2K",
      change: "+8.2%",
      isPositive: true,
      icon: <EyeOutlined />,
    },
    {
      title: "Total Spend",
      value: "$12.4K",
      change: "-2.1%",
      isPositive: false,
      icon: <DollarOutlined />,
    },
    {
      title: "Active Campaigns",
      value: "8",
      change: "+1",
      isPositive: true,
      icon: <ApiOutlined />,
    },
  ];

  return (
    <div>
      <Title level={2}>Dashboard</Title>

      <Row gutter={[16, 16]}>
        {metrics.map((metric, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <MetricCard {...metric} />
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={16}>
          <Card title="Performance Overview">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="impressions" stroke="#8884d8" />
                <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
                <Line type="monotone" dataKey="spend" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title="Campaign Performance">
            <div style={{ marginTop: 16 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <Text>Summer Sale</Text>
                <Text>85%</Text>
              </div>
              <Progress percent={85} style={{ marginBottom: 16 }} />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <Text>Brand Awareness</Text>
                <Text>72%</Text>
              </div>
              <Progress percent={72} style={{ marginBottom: 16 }} />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <Text>Product Launch</Text>
                <Text>63%</Text>
              </div>
              <Progress percent={63} style={{ marginBottom: 16 }} />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <Text>Holiday Special</Text>
                <Text>91%</Text>
              </div>
              <Progress percent={91} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
