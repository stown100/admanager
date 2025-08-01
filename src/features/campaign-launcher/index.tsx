import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Card,
  Row,
  Col,
  Typography,
  Space,
  Alert,
} from "antd";
import { RocketOutlined, DollarOutlined, EyeOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Option } = Select;

interface CampaignFormData {
  name: string;
  platform: string;
  budget: number;
  objective: string;
  targetAudience: string;
}

export const CampaignLauncher: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<{
    impressions: number;
    clicks: number;
    cost: number;
    ctr: number;
  } | null>(null);

  const onFinish = async (values: CampaignFormData) => {
    setLoading(true);

    // Simulate AI prediction
    setTimeout(() => {
      const baseImpressions = values.budget * 100;
      const baseClicks = baseImpressions * 0.02;
      const baseCost = values.budget;
      const baseCtr = 2.0;

      setPrediction({
        impressions: Math.round(baseImpressions),
        clicks: Math.round(baseClicks),
        cost: baseCost,
        ctr: baseCtr,
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card title="Campaign Setup">
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="name"
                label="Campaign Name"
                rules={[
                  { required: true, message: "Please enter campaign name" },
                ]}
              >
                <Input placeholder="Enter campaign name" />
              </Form.Item>

              <Form.Item
                name="platform"
                label="Platform"
                rules={[{ required: true, message: "Please select platform" }]}
              >
                <Select placeholder="Select platform">
                  <Option value="meta">Meta Ads</Option>
                  <Option value="google">Google Ads</Option>
                  <Option value="tiktok">TikTok Ads</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="budget"
                label="Daily Budget ($)"
                rules={[{ required: true, message: "Please enter budget" }]}
              >
                <Input type="number" placeholder="Enter daily budget" />
              </Form.Item>

              <Form.Item
                name="objective"
                label="Campaign Objective"
                rules={[{ required: true, message: "Please select objective" }]}
              >
                <Select placeholder="Select objective">
                  <Option value="awareness">Brand Awareness</Option>
                  <Option value="traffic">Website Traffic</Option>
                  <Option value="conversions">Conversions</Option>
                  <Option value="sales">Sales</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="targetAudience"
                label="Target Audience"
                rules={[
                  { required: true, message: "Please enter target audience" },
                ]}
              >
                <Input placeholder="e.g., Age 25-45, Interest in Technology" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  icon={<RocketOutlined />}
                  size="large"
                  style={{ width: "100%" }}
                >
                  {loading ? "Analyzing..." : "Launch Campaign"}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="AI Performance Prediction">
            {prediction ? (
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <Alert
                  message="Campaign Analysis Complete"
                  description="AI has analyzed your campaign settings and provided performance predictions."
                  type="success"
                  showIcon
                />

                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Card size="small">
                      <div style={{ textAlign: "center" }}>
                        <EyeOutlined
                          style={{ fontSize: 24, color: "#1890ff" }}
                        />
                        <div style={{ marginTop: 8 }}>
                          <Text strong>
                            {prediction.impressions.toLocaleString()}
                          </Text>
                          <br />
                          <Text type="secondary">Impressions</Text>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card size="small">
                      <div style={{ textAlign: "center" }}>
                        <DollarOutlined
                          style={{ fontSize: 24, color: "#52c41a" }}
                        />
                        <div style={{ marginTop: 8 }}>
                          <Text strong>
                            ${prediction.cost.toLocaleString()}
                          </Text>
                          <br />
                          <Text type="secondary">Estimated Cost</Text>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>

                <div>
                  <Text strong>Key Metrics:</Text>
                  <ul>
                    <li>
                      Expected Clicks: {prediction.clicks.toLocaleString()}
                    </li>
                    <li>CTR: {prediction.ctr}%</li>
                    <li>
                      Cost per Click: $
                      {(prediction.cost / prediction.clicks).toFixed(2)}
                    </li>
                  </ul>
                </div>

                <Button type="primary" block>
                  Launch Campaign
                </Button>
              </Space>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <RocketOutlined style={{ fontSize: 48, color: "#d9d9d9" }} />
                <div style={{ marginTop: 16 }}>
                  <Text type="secondary">
                    Fill out the campaign form to get AI-powered performance
                    predictions
                  </Text>
                </div>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
