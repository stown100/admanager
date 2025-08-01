import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Row,
  Col,
  Divider,
  Alert,
  Statistic,
} from "antd";
import {
  RocketOutlined,
  EyeOutlined,
  UserOutlined,
  AimOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;

interface CampaignFormData {
  name: string;
  platform: string;
  budget: number;
  targetAudience: string;
  location: string;
  objective: string;
  description: string;
}

export const CampaignLauncher: React.FC = () => {
  const [form] = Form.useForm();
  const [estimatedResults, setEstimatedResults] = useState<Record<
    string,
    number | string
  > | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateResults = (values: CampaignFormData) => {
    const { budget, platform } = values;

    // Простая логика расчета результатов на основе бюджета и платформы
    const platformMultipliers = {
      meta: { impressions: 200, clicks: 15, conversions: 0.8 },
      google: { impressions: 150, clicks: 12, conversions: 0.6 },
      tiktok: { impressions: 300, clicks: 20, conversions: 1.2 },
    };

    const multiplier =
      platformMultipliers[platform as keyof typeof platformMultipliers];

    return {
      impressions: Math.round(budget * multiplier.impressions),
      clicks: Math.round(budget * multiplier.clicks),
      conversions: Math.round(budget * multiplier.conversions),
      ctr: (
        ((budget * multiplier.clicks) / (budget * multiplier.impressions)) *
        100
      ).toFixed(2),
      cpc: (budget / (budget * multiplier.clicks)).toFixed(2),
    };
  };

  const handleSubmit = async (values: CampaignFormData) => {
    setLoading(true);

    // Имитация API вызова
    setTimeout(() => {
      const results = calculateResults(values);
      setEstimatedResults(results);
      setLoading(false);
    }, 1000);
  };

  const platforms = [
    { value: "meta", label: "Meta Ads", icon: "📘" },
    { value: "google", label: "Google Ads", icon: "🔍" },
    { value: "tiktok", label: "TikTok Ads", icon: "🎵" },
  ];

  const objectives = [
    { value: "awareness", label: "Brand Awareness" },
    { value: "traffic", label: "Traffic" },
    { value: "conversions", label: "Conversions" },
    { value: "sales", label: "Sales" },
  ];

  return (
    <Card title="Launch New Campaign" extra={<RocketOutlined />}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          platform: "meta",
          objective: "conversions",
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Campaign Name"
              rules={[
                { required: true, message: "Please enter campaign name" },
              ]}
            >
              <Input placeholder="Enter campaign name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="platform"
              label="Platform"
              rules={[{ required: true, message: "Please select platform" }]}
            >
              <Select placeholder="Select platform">
                {platforms.map((platform) => (
                  <Option key={platform.value} value={platform.value}>
                    {platform.icon} {platform.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Form.Item
              name="budget"
              label="Daily Budget ($)"
              rules={[{ required: true, message: "Please enter budget" }]}
            >
              <InputNumber
                min={1}
                max={10000}
                style={{ width: "100%" }}
                placeholder="Enter daily budget"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="objective"
              label="Campaign Objective"
              rules={[{ required: true, message: "Please select objective" }]}
            >
              <Select placeholder="Select objective">
                {objectives.map((objective) => (
                  <Option key={objective.value} value={objective.value}>
                    {objective.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="location"
              label="Target Location"
              rules={[{ required: true, message: "Please enter location" }]}
            >
              <Input placeholder="e.g., New York, USA" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              name="targetAudience"
              label="Target Audience"
              rules={[
                { required: true, message: "Please describe target audience" },
              ]}
            >
              <TextArea
                rows={3}
                placeholder="Describe your target audience (age, interests, behavior)"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="description" label="Campaign Description">
              <TextArea
                rows={3}
                placeholder="Describe your campaign goals and messaging"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            icon={<RocketOutlined />}
          >
            Launch Campaign with AI Optimization
          </Button>
        </Form.Item>
      </Form>

      {estimatedResults && (
        <>
          <Divider />
          <Alert
            message="Estimated Campaign Results"
            description="Based on your budget and targeting parameters"
            type="info"
            showIcon
            style={{ marginBottom: 16 }}
          />

          <Row gutter={[16, 16]}>
            <Col span={4}>
              <Statistic
                title="Impressions"
                value={estimatedResults.impressions}
                prefix={<EyeOutlined />}
                suffix="K"
              />
            </Col>
            <Col span={4}>
              <Statistic
                title="Clicks"
                value={estimatedResults.clicks}
                prefix={<AimOutlined />}
                suffix="K"
              />
            </Col>
            <Col span={4}>
              <Statistic
                title="Conversions"
                value={estimatedResults.conversions}
                prefix={<UserOutlined />}
                suffix="K"
              />
            </Col>
            <Col span={4}>
              <Statistic title="CTR" value={estimatedResults.ctr} suffix="%" />
            </Col>
            <Col span={4}>
              <Statistic title="CPC" value={estimatedResults.cpc} prefix="$" />
            </Col>
            <Col span={4}>
              <Statistic
                title="ROI Estimate"
                value="3.2x"
                valueStyle={{ color: "#3f8600" }}
              />
            </Col>
          </Row>
        </>
      )}
    </Card>
  );
};
