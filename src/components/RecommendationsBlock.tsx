import React from "react";
import { Card, Typography, Tag, Progress, Select } from "antd";
import {
  AimOutlined as TargetOutlined,
  CrownOutlined,
  ArrowUpOutlined,
  DollarOutlined,
  TrophyOutlined,
  StarOutlined,
  BulbOutlined,
  AimOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;
const { Option } = Select;

export const RecommendationsBlock: React.FC = () => {
  return (
    <Card
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        border: "1px solid #cbd5e1",
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        padding: "16px",
      }}
      styles={{ body: { padding: 0 } }}
      className="hover:shadow-lg"
    >
      {/* Header */}
      <div style={{ padding: "0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 4,
              }}
            >
              <AimOutlined style={{ fontSize: 20, color: "#3b82f6" }} />
              <Title
                level={3}
                style={{ margin: 0, fontSize: 18, fontWeight: 600 }}
              >
                Platform Performance Comparison
              </Title>
            </div>
            <Text type="secondary" style={{ fontSize: 14 }}>
              Compare metrics across your advertising platforms
            </Text>
          </div>
          <Select defaultValue="30" style={{ width: 140 }} size="small">
            <Option value="7">Last 7 Days</Option>
            <Option value="30">Last 30 Days</Option>
            <Option value="90">Last 90 Days</Option>
          </Select>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 12,
            marginBottom: 20,
          }}
        >
          {/* Meta Ads Card */}
          <Card
            size="small"
            style={{
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18 }}>🔷</span>
                <Title
                  level={5}
                  style={{ margin: 0, fontSize: 14, fontWeight: 600 }}
                >
                  Meta Ads
                </Title>
              </div>
              <Tag
                color="warning"
                icon={<CrownOutlined />}
                style={{ fontSize: 11, padding: "2px 8px" }}
              >
                Top ROI
              </Tag>
            </div>

            <div style={{ marginBottom: 8 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <Text style={{ fontSize: 12, color: "#6b7280" }}>ROI</Text>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>280%</Text>
                  <ArrowUpOutlined style={{ fontSize: 12, color: "#22c55e" }} />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontSize: 11,
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text type="secondary">Revenue</Text>
                  <Text strong>$18,420</Text>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text type="secondary">Spend</Text>
                  <Text strong>$4,850</Text>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text type="secondary">CTR</Text>
                  <Text strong>2.89%</Text>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text type="secondary">CPC</Text>
                  <Text strong>$1.53</Text>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: 8 }}>
              <Text
                style={{
                  fontSize: 11,
                  color: "#6b7280",
                  marginBottom: 4,
                  display: "block",
                }}
              >
                Key Strengths:
              </Text>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                <Tag style={{ fontSize: 10, padding: "0 4px" }}>
                  High engagement
                </Tag>
                <Tag style={{ fontSize: 10, padding: "0 4px" }}>
                  Detailed targeting
                </Tag>
                <Tag style={{ fontSize: 10, padding: "0 4px" }}>
                  Visual content
                </Tag>
              </div>
            </div>
          </Card>

          {/* Google Ads Card */}
          <Card
            size="small"
            style={{
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
              borderRadius: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18 }}>🟢</span>
                <Title
                  level={5}
                  style={{ margin: 0, fontSize: 14, fontWeight: 600 }}
                >
                  Google Ads
                </Title>
              </div>
            </div>

            <div style={{ marginBottom: 8 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <Text style={{ fontSize: 12, color: "#6b7280" }}>ROI</Text>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>200%</Text>
                  <ArrowUpOutlined style={{ fontSize: 12, color: "#22c55e" }} />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontSize: 11,
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text type="secondary">Revenue</Text>
                  <Text strong>$15,600</Text>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text type="secondary">Spend</Text>
                  <Text strong>$5,200</Text>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text type="secondary">CTR</Text>
                  <Text strong>3.21%</Text>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text type="secondary">CPC</Text>
                  <Text strong>$2.1</Text>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: 8 }}>
              <Text
                style={{
                  fontSize: 11,
                  color: "#6b7280",
                  marginBottom: 4,
                  display: "block",
                }}
              >
                Key Strengths:
              </Text>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                <Tag style={{ fontSize: 10, padding: "0 4px" }}>
                  Search intent
                </Tag>
                <Tag style={{ fontSize: 10, padding: "0 4px" }}>Wide reach</Tag>
                <Tag style={{ fontSize: 10, padding: "0 4px" }}>
                  Conversion tracking
                </Tag>
              </div>
            </div>
          </Card>

          {/* TikTok Ads Card */}
          <Card
            size="small"
            style={{
              background: "rgba(236, 72, 153, 0.1)",
              border: "1px solid rgba(236, 72, 153, 0.2)",
              borderRadius: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18 }}>⚫</span>
                <Title
                  level={5}
                  style={{ margin: 0, fontSize: 14, fontWeight: 600 }}
                >
                  TikTok Ads
                </Title>
              </div>
            </div>

            <div style={{ marginBottom: 8 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <Text style={{ fontSize: 12, color: "#6b7280" }}>ROI</Text>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>200%</Text>
                  <ArrowUpOutlined style={{ fontSize: 12, color: "#22c55e" }} />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontSize: 11,
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text type="secondary">Revenue</Text>
                  <Text strong>$8,400</Text>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text type="secondary">Spend</Text>
                  <Text strong>$2,800</Text>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text type="secondary">CTR</Text>
                  <Text strong>4.15%</Text>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Text type="secondary">CPC</Text>
                  <Text strong>$0.89</Text>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: 8 }}>
              <Text
                style={{
                  fontSize: 11,
                  color: "#6b7280",
                  marginBottom: 4,
                  display: "block",
                }}
              >
                Key Strengths:
              </Text>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                <Tag style={{ fontSize: 10, padding: "0 4px" }}>
                  Young audience
                </Tag>
                <Tag style={{ fontSize: 10, padding: "0 4px" }}>
                  Viral potential
                </Tag>
                <Tag style={{ fontSize: 10, padding: "0 4px" }}>Low CPC</Tag>
              </div>
            </div>
          </Card>
        </div>

        {/* Comparison Charts */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <DollarOutlined style={{ fontSize: 16, color: "#22c55e" }} />
              <Title
                level={5}
                style={{ margin: 0, fontSize: 14, fontWeight: 600 }}
              >
                ROI Comparison
              </Title>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: 500 }}>
                  🔷 Meta Ads
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>280%</Text>
              </div>
              <Progress
                percent={93}
                size="small"
                strokeColor="#3b82f6"
                showInfo={false}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: 500 }}>
                  🟢 Google Ads
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>200%</Text>
              </div>
              <Progress
                percent={67}
                size="small"
                strokeColor="#22c55e"
                showInfo={false}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: 500 }}>
                  ⚫ TikTok Ads
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>200%</Text>
              </div>
              <Progress
                percent={67}
                size="small"
                strokeColor="#ec4899"
                showInfo={false}
              />
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <TargetOutlined style={{ fontSize: 16, color: "#3b82f6" }} />
              <Title
                level={5}
                style={{ margin: 0, fontSize: 14, fontWeight: 600 }}
              >
                CTR Performance
              </Title>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: 500 }}>
                  ⚫ TikTok Ads
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>4.15%</Text>
              </div>
              <Progress
                percent={83}
                size="small"
                strokeColor="#ec4899"
                showInfo={false}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: 500 }}>
                  🟢 Google Ads
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>3.21%</Text>
              </div>
              <Progress
                percent={64}
                size="small"
                strokeColor="#22c55e"
                showInfo={false}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: 500 }}>
                  🔷 Meta Ads
                </Text>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>2.89%</Text>
              </div>
              <Progress
                percent={58}
                size="small"
                strokeColor="#3b82f6"
                showInfo={false}
              />
            </div>
          </div>
        </div>

        {/* Platform Insights */}
        <div
          style={{
            background: "rgba(241, 245, 249, 0.5)",
            borderRadius: 8,
            padding: 12,
            marginTop: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
            }}
          >
            <BulbOutlined style={{ fontSize: 16, color: "#f59e0b" }} />
            <Title
              level={5}
              style={{ margin: 0, fontSize: 14, fontWeight: 600 }}
            >
              Platform Insights
            </Title>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
              fontSize: 12,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  marginBottom: 4,
                }}
              >
                <TrophyOutlined style={{ fontSize: 12, color: "#22c55e" }} />
                <Text style={{ fontWeight: 500, color: "#22c55e" }}>
                  Highest ROI:
                </Text>
              </div>
              <Text type="secondary" style={{ fontSize: 11 }}>
                Meta Ads leading with 280% ROI
              </Text>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  marginBottom: 4,
                }}
              >
                <StarOutlined style={{ fontSize: 12, color: "#3b82f6" }} />
                <Text style={{ fontWeight: 500, color: "#3b82f6" }}>
                  Best CTR:
                </Text>
              </div>
              <Text type="secondary" style={{ fontSize: 11 }}>
                TikTok Ads with 4.15% engagement
              </Text>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  marginBottom: 4,
                }}
              >
                <DollarOutlined style={{ fontSize: 12, color: "#f59e0b" }} />
                <Text style={{ fontWeight: 500, color: "#f59e0b" }}>
                  Lowest CPC:
                </Text>
              </div>
              <Text type="secondary" style={{ fontSize: 11 }}>
                TikTok Ads at $0.89 per click
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
