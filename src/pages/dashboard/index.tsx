import React from "react";
import { Box, Grow } from "@mui/material";
import { MetricsOverview } from "../../widgets/metrics-overview";
import { PlatformComparison } from "../../widgets/platform-comparison";
import { PerformanceChart } from "../../widgets/performance-chart";
import { OrganicGrowthReminder } from "../../components/OrganicGrowthReminder";
import { RecommendationsBlock } from "../../components/RecommendationsBlock";

export const DashboardPage: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 1350, margin: "0 auto", p: 2 }}>
      <Grow in timeout={800}>
        <Box sx={{ mb: 2 }}>
          <OrganicGrowthReminder />
        </Box>
      </Grow>

      <Grow in timeout={1000}>
        <Box sx={{ mb: 2 }}>
          <MetricsOverview />
        </Box>
      </Grow>

      <Grow in timeout={1200}>
        <Box sx={{ mb: 2 }}>
          <RecommendationsBlock />
        </Box>
      </Grow>

      <Grow in timeout={1400}>
        <Box sx={{ mb: 2 }}>
          <PlatformComparison />
        </Box>
      </Grow>

      <Grow in timeout={1600}>
        <Box sx={{ mb: 2 }}>
          <PerformanceChart />
        </Box>
      </Grow>
    </Box>
  );
};
