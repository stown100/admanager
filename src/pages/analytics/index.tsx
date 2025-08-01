import React from "react";
import {
  Typography,
  Card,
  Row,
  Col,
  Statistic,
  Select,
  DatePicker,
} from "antd";
import {
  EyeOutlined,
  AimOutlined,
  DollarOutlined,
  UserOutlined,
  RiseOutlined,
  FallOutlined,
} from "@ant-design/icons";
import { PerformanceChart } from "@/widgets/performance-chart";

const { Title } = Typography;
const { RangePicker } = DatePicker;

export const AnalyticsPage: React.FC = () => {
  const metrics = [
    {
      title: "Total Impressions",
      value: 2400000,
      prefix: <EyeOutlined />,
      suffix: "M",
      valueStyle: { color: "#3f8600" },
      precision: 1,
      change: "+12.5%",
      changeType: "increase",
    },
    {
      title: "Total Clicks",
      value: 45200,
      prefix: <AimOutlined />,
      suffix: "K",
      valueStyle: { color: "#3f8600" },
      precision: 1,
      change: "+8.2%",
      changeType: "increase",
    },
    {
      title: "Total Spend",
      value: 12400,
      prefix: <DollarOutlined />,
      suffix: "K",
      valueStyle: { color: "#cf1322" },
      precision: 1,
      change: "-2.1%",
      changeType: "decrease",
    },
    {
      title: "Conversions",
      value: 8500,
      prefix: <UserOutlined />,
      suffix: "K",
      valueStyle: { color: "#3f8600" },
      precision: 1,
      change: "+15.3%",
      changeType: "increase",
    },
  ];

  return (
    <div>
      <Title level={2}>Analytics</Title>

      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={6}>
          <Select
            defaultValue="last30days"
            style={{ width: "100%" }}
            options={[
              { value: "last7days", label: "Last 7 Days" },
              { value: "last30days", label: "Last 30 Days" },
              { value: "last90days", label: "Last 90 Days" },
            ]}
          />
        </Col>
        <Col span={6}>
          <RangePicker style={{ width: "100%" }} />
        </Col>
      </Row>

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
              <div style={{ marginTop: 8 }}>
                {metric.changeType === "increase" ? (
                  <RiseOutlined style={{ color: "#3f8600", marginRight: 4 }} />
                ) : (
                  <FallOutlined style={{ color: "#cf1322", marginRight: 4 }} />
                )}
                <span
                  style={{
                    color:
                      metric.changeType === "increase" ? "#3f8600" : "#cf1322",
                    fontSize: "12px",
                  }}
                >
                  {metric.change}
                </span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={24}>
          <PerformanceChart />
        </Col>
      </Row>
    </div>
  );
};
