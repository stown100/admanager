import React from "react";
import {
  Typography,
  Card,
  Table,
  Tag,
  Button,
  Space,
  Statistic,
  Row,
  Col,
} from "antd";
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const campaignData = [
  {
    key: "1",
    name: "Summer Sale Campaign",
    platform: "Meta Ads",
    status: "active",
    budget: 500,
    spent: 320,
    impressions: "125K",
    clicks: "2.8K",
    ctr: "2.24%",
    cpc: "$0.85",
    conversions: 156,
    roi: "3.2x",
  },
  {
    key: "2",
    name: "Brand Awareness Q4",
    platform: "Google Ads",
    status: "active",
    budget: 800,
    spent: 450,
    impressions: "89K",
    clicks: "1.2K",
    ctr: "1.35%",
    cpc: "$1.25",
    conversions: 89,
    roi: "2.8x",
  },
  {
    key: "3",
    name: "TikTok Product Launch",
    platform: "TikTok Ads",
    status: "paused",
    budget: 300,
    spent: 180,
    impressions: "67K",
    clicks: "1.5K",
    ctr: "2.24%",
    cpc: "$0.75",
    conversions: 134,
    roi: "4.1x",
  },
];

const columns = [
  {
    title: "Campaign Name",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <strong>{text}</strong>,
  },
  {
    title: "Platform",
    dataIndex: "platform",
    key: "platform",
    render: (platform: string) => (
      <Tag
        color={
          platform === "Meta Ads"
            ? "blue"
            : platform === "Google Ads"
            ? "green"
            : "black"
        }
      >
        {platform}
      </Tag>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <Tag color={status === "active" ? "green" : "orange"}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Budget",
    dataIndex: "budget",
    key: "budget",
    render: (budget: number) => `$${budget}`,
  },
  {
    title: "Spent",
    dataIndex: "spent",
    key: "spent",
    render: (spent: number) => `$${spent}`,
  },
  {
    title: "Impressions",
    dataIndex: "impressions",
    key: "impressions",
  },
  {
    title: "Clicks",
    dataIndex: "clicks",
    key: "clicks",
  },
  {
    title: "CTR",
    dataIndex: "ctr",
    key: "ctr",
  },
  {
    title: "CPC",
    dataIndex: "cpc",
    key: "cpc",
  },
  {
    title: "Conversions",
    dataIndex: "conversions",
    key: "conversions",
  },
  {
    title: "ROI",
    dataIndex: "roi",
    key: "roi",
    render: (roi: string) => (
      <Tag color={parseFloat(roi) > 3 ? "green" : "orange"}>{roi}</Tag>
    ),
  },
  {
    title: "Actions",
    key: "actions",
    render: (_: unknown, record: Record<string, unknown>) => (
      <Space>
        <Button
          type="text"
          icon={
            record.status === "active" ? (
              <PauseCircleOutlined />
            ) : (
              <PlayCircleOutlined />
            )
          }
          size="small"
        />
        <Button type="text" icon={<EditOutlined />} size="small" />
        <Button type="text" icon={<EyeOutlined />} size="small" />
        <Button type="text" icon={<DeleteOutlined />} size="small" danger />
      </Space>
    ),
  },
];

export const CampaignsPage: React.FC = () => {
  const totalBudget = campaignData.reduce((sum, item) => sum + item.budget, 0);
  const totalSpent = campaignData.reduce((sum, item) => sum + item.spent, 0);
  const totalConversions = campaignData.reduce(
    (sum, item) => sum + item.conversions,
    0
  );

  return (
    <div>
      <Title level={2}>Campaigns</Title>

      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={8}>
          <Statistic
            title="Total Budget"
            value={totalBudget}
            prefix="$"
            suffix="K"
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total Spent"
            value={totalSpent}
            prefix="$"
            suffix="K"
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total Conversions"
            value={totalConversions}
            prefix={<UserOutlined />}
            suffix="K"
          />
        </Col>
      </Row>

      <Card>
        <Table
          columns={columns}
          dataSource={campaignData}
          pagination={{ pageSize: 10 }}
          scroll={{ x: 1200 }}
        />
      </Card>
    </div>
  );
};
