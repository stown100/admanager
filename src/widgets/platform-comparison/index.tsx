import React from "react";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface PlatformData {
  key: string;
  platform: string;
  impressions: number;
  clicks: number;
  ctr: number;
  spend: number;
  roi: number;
  status: string;
}

export const PlatformComparison: React.FC = () => {
  const data: PlatformData[] = [
    {
      key: "1",
      platform: "Meta Ads",
      impressions: 1200000,
      clicks: 24000,
      ctr: 2.0,
      spend: 8500,
      roi: 3.2,
      status: "Active",
    },
    {
      key: "2",
      platform: "Google Ads",
      impressions: 800000,
      clicks: 16000,
      ctr: 2.0,
      spend: 6200,
      roi: 2.8,
      status: "Active",
    },
    {
      key: "3",
      platform: "TikTok Ads",
      impressions: 400000,
      clicks: 5200,
      ctr: 1.3,
      spend: 3800,
      roi: 4.1,
      status: "Active",
    },
  ];

  const columns: ColumnsType<PlatformData> = [
    {
      title: "Platform",
      dataIndex: "platform",
      key: "platform",
    },
    {
      title: "Impressions",
      dataIndex: "impressions",
      key: "impressions",
      render: (value) => `${(value / 1000).toFixed(0)}K`,
    },
    {
      title: "Clicks",
      dataIndex: "clicks",
      key: "clicks",
      render: (value) => `${(value / 1000).toFixed(0)}K`,
    },
    {
      title: "CTR (%)",
      dataIndex: "ctr",
      key: "ctr",
      render: (value) => `${value}%`,
    },
    {
      title: "Spend ($)",
      dataIndex: "spend",
      key: "spend",
      render: (value) => `$${(value / 1000).toFixed(0)}K`,
    },
    {
      title: "ROI",
      dataIndex: "roi",
      key: "roi",
      render: (value) => `${value}x`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      size="small"
    />
  );
};
