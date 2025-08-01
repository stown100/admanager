import React from "react";
import {
  Typography,
  Card,
  Table,
  Tag,
  Button,
  Space,
  Row,
  Col,
  Statistic,
  Image,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const creativeData = [
  {
    key: "1",
    name: "Summer Sale Banner",
    type: "Image",
    platform: "Meta Ads",
    status: "active",
    impressions: "45K",
    clicks: "1.2K",
    ctr: "2.67%",
    engagement: "8.5%",
    performance: "excellent",
    thumbnail: "https://via.placeholder.com/100x60/1890ff/ffffff?text=Banner",
  },
  {
    key: "2",
    name: "Product Video Ad",
    type: "Video",
    platform: "TikTok Ads",
    status: "active",
    impressions: "67K",
    clicks: "2.1K",
    ctr: "3.13%",
    engagement: "12.3%",
    performance: "excellent",
    thumbnail: "https://via.placeholder.com/100x60/52c41a/ffffff?text=Video",
  },
  {
    key: "3",
    name: "Google Search Ad",
    type: "Text",
    platform: "Google Ads",
    status: "paused",
    impressions: "23K",
    clicks: "456",
    ctr: "1.98%",
    engagement: "5.2%",
    performance: "good",
    thumbnail: "https://via.placeholder.com/100x60/faad14/ffffff?text=Text",
  },
];

const columns = [
  {
    title: "Creative",
    dataIndex: "name",
    key: "name",
    render: (text: string, record: Record<string, unknown>) => (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Image
          width={60}
          height={40}
          src={record.thumbnail as string}
          style={{ objectFit: "cover" }}
        />
        <div>
          <div>
            <strong>{text}</strong>
          </div>
          <div style={{ fontSize: "12px", color: "#666" }}>
            {record.type as string} • {record.platform as string}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (type: string) => (
      <Tag
        color={
          type === "Image" ? "blue" : type === "Video" ? "green" : "orange"
        }
      >
        {type}
      </Tag>
    ),
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
    title: "Engagement",
    dataIndex: "engagement",
    key: "engagement",
  },
  {
    title: "Performance",
    dataIndex: "performance",
    key: "performance",
    render: (performance: string) => (
      <Tag
        color={
          performance === "excellent"
            ? "green"
            : performance === "good"
            ? "blue"
            : "orange"
        }
      >
        {performance.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Actions",
    key: "actions",
    render: () => (
      <Space>
        <Button type="text" icon={<EyeOutlined />} size="small" />
        <Button type="text" icon={<EditOutlined />} size="small" />
        <Button type="text" icon={<LikeOutlined />} size="small" />
        <Button type="text" icon={<ShareAltOutlined />} size="small" />
        <Button type="text" icon={<DeleteOutlined />} size="small" danger />
      </Space>
    ),
  },
];

export const CreativesPage: React.FC = () => {
  const totalImpressions = creativeData.reduce((sum, item) => {
    const value = parseFloat(item.impressions.replace(/[K]/g, ""));
    return sum + value * 1000;
  }, 0);

  const totalClicks = creativeData.reduce((sum, item) => {
    const value = parseFloat(item.clicks.replace(/[K]/g, ""));
    return sum + value * 1000;
  }, 0);

  const totalEngagement =
    creativeData.reduce((sum, item) => {
      return sum + parseFloat(item.engagement.replace("%", ""));
    }, 0) / creativeData.length;

  return (
    <div>
      <Title level={2}>Creatives</Title>

      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={8}>
          <Statistic
            title="Total Impressions"
            value={totalImpressions / 1000}
            suffix="K"
            precision={1}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total Clicks"
            value={totalClicks / 1000}
            suffix="K"
            precision={1}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Avg Engagement"
            value={totalEngagement}
            suffix="%"
            precision={1}
          />
        </Col>
      </Row>

      <Card>
        <Table
          columns={columns}
          dataSource={creativeData}
          pagination={{ pageSize: 10 }}
          scroll={{ x: 1200 }}
        />
      </Card>
    </div>
  );
};
