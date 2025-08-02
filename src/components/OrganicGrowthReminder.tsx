import React from "react";
import { Card, Button, Typography, Progress } from "antd";
import {
  HeartOutlined,
  UserOutlined,
  CloseOutlined,
  RiseOutlined,
  AimOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

export const OrganicGrowthReminder: React.FC = () => {
  return (
    <Card
      size="small"
      style={{
        background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
        border: "1px solid #bae6fd",
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      }}
      className="hover:shadow-lg"
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 16,
            flex: 1,
          }}
        >
          {/* Icon Container */}
          <div
            style={{
              padding: 12,
              borderRadius: 12,
              background: "rgba(34, 197, 94, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 48,
              height: 48,
              border: "1px solid rgba(34, 197, 94, 0.2)",
            }}
          >
            <RiseOutlined style={{ fontSize: 20, color: "#22c55e" }} />
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            {/* Header with title and heart icon */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 8,
              }}
            >
              <Title
                level={4}
                style={{
                  margin: 0,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#1f2937",
                }}
              >
                Don't Forget Organic Growth!
              </Title>
              <HeartOutlined style={{ fontSize: 14, color: "#22c55e" }} />
            </div>

            {/* Description */}
            <Text
              type="secondary"
              style={{
                fontSize: 13,
                display: "block",
                marginBottom: 16,
                lineHeight: 1.5,
              }}
            >
              While paid ads are great, organic posts can boost your reach for
              free. Regular posting builds authentic engagement and complements
              your ad strategy.
            </Text>

            {/* Action button and tip */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Button
                type="default"
                size="small"
                icon={<UserOutlined />}
                style={{
                  height: 32,
                  fontSize: 13,
                  borderColor: "rgba(34, 197, 94, 0.4)",
                  color: "#22c55e",
                  borderRadius: 8,
                  fontWeight: 500,
                }}
              >
                Plan Organic Posts
              </Button>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <AimOutlined style={{ fontSize: 12, color: "#6b7280" }} />
                <Text type="secondary" style={{ fontSize: 12 }}>
                  Tip: Post 3-5 times per week for best results
                </Text>
              </div>
            </div>

            {/* Progress indicator */}
            <div style={{ marginTop: 16 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <Text style={{ fontSize: 12, color: "#6b7280" }}>
                  Weekly Goal Progress
                </Text>
                <Text
                  style={{ fontSize: 12, fontWeight: 500, color: "#22c55e" }}
                >
                  3/5 posts
                </Text>
              </div>
              <Progress
                percent={60}
                size="small"
                strokeColor="#22c55e"
                showInfo={false}
                style={{ marginBottom: 0 }}
              />
            </div>
          </div>
        </div>

        {/* Close button */}
        <Button
          type="text"
          size="small"
          icon={<CloseOutlined />}
          style={{
            width: 28,
            height: 28,
            color: "#8c8c8c",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 6,
          }}
        />
      </div>
    </Card>
  );
};
