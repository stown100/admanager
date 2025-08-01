import React from "react";
import { Card, Table, Tag, Row, Col, Statistic } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  TikTokOutlined,
} from "@ant-design/icons";

const platformData = [
  {
    key: "1",
    platform: "Meta Ads",
    icon: <FacebookOutlined style={{ color: "#1877f2" }} />,
    impressions: "1.2M",
    clicks: "25.4K",
    spend: "$6.8K",
    roi: "3.2x",
    ctr: "2.1%",
    status: "active",
  },
  {
    key: "2",
    platform: "Google Ads",
    icon: <GoogleOutlined style={{ color: "#4285f4" }} />,
    impressions: "850K",
    clicks: "12.8K",
    spend: "$4.2K",
    roi: "2.8x",
    ctr: "1.5%",
    status: "active",
  },
  {
    key: "3",
    platform: "TikTok Ads",
    icon: <TikTokOutlined style={{ color: "#000000" }} />,
    impressions: "350K",
    clicks: "6.9K",
    spend: "$1.4K",
    roi: "4.1x",
    ctr: "2.0%",
    status: "active",
  },
];

const columns = [
  {
    title: "Platform",
    dataIndex: "platform",
    key: "platform",
    render: (text: string, record: Record<string, unknown>) => (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {record.icon as React.ReactNode}
        {text}
      </div>
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
    title: "Spend",
    dataIndex: "spend",
    key: "spend",
  },
  {
    title: "ROI",
    dataIndex: "roi",
    key: "roi",
    render: (roi: string) => (
      <Tag
        color={roi.includes("x") && parseFloat(roi) > 3 ? "green" : "orange"}
      >
        {roi}
      </Tag>
    ),
  },
  {
    title: "CTR",
    dataIndex: "ctr",
    key: "ctr",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <Tag color={status === "active" ? "green" : "red"}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
];

export const PlatformComparison: React.FC = () => {
  const totalImpressions = platformData.reduce((sum, item) => {
    const value = parseFloat(item.impressions.replace(/[MK]/g, ""));
    const multiplier = item.impressions.includes("M") ? 1000000 : 1000;
    return sum + value * multiplier;
  }, 0);

  const totalSpend = platformData.reduce((sum, item) => {
    const value = parseFloat(item.spend.replace(/[$K]/g, ""));
    return sum + value * 1000;
  }, 0);

  return (
    <Card title="Platform Performance Comparison">
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={8}>
          <Statistic
            title="Total Impressions"
            value={totalImpressions / 1000000}
            suffix="M"
            precision={1}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total Spend"
            value={totalSpend / 1000}
            prefix="$"
            suffix="K"
            precision={1}
          />
        </Col>
        <Col span={8}>
          <Statistic title="Best ROI" value="TikTok Ads" suffix="(4.1x)" />
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={platformData}
        pagination={false}
        size="small"
      />
    </Card>
  );
};
