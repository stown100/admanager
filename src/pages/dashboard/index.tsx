import React from "react";
import { Card } from "antd";
import { MetricsOverview } from "../../widgets/metrics-overview";
import { PlatformComparison } from "../../widgets/platform-comparison";
import { PerformanceChart } from "../../widgets/performance-chart";
import { CampaignLauncher } from "../../features/campaign-launcher";
import { OrganicGrowthReminder } from "../../components/OrganicGrowthReminder";
import { RecommendationsBlock } from "../../components/RecommendationsBlock";

export const DashboardPage: React.FC = () => {
  return (
    <div style={{ maxWidth: 1350, margin: "0 auto" }}>
      <div style={{ marginBottom: 16 }}>
        <OrganicGrowthReminder />
      </div>

      <div style={{ marginBottom: 16 }}>
        <MetricsOverview />
      </div>

      <div style={{ marginBottom: 16 }}>
        <RecommendationsBlock />
      </div>

      <div style={{ marginBottom: 16 }}>
        <Card title="Platform Comparison" style={{ height: "100%" }}>
          <PlatformComparison />
        </Card>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Card title="Performance Trends" style={{ height: "100%" }}>
          <PerformanceChart />
        </Card>
      </div>

      <div>
        <Card title="Campaign Management">
          <CampaignLauncher />
        </Card>
      </div>
    </div>
  );
};
