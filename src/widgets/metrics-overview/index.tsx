import React from "react";
import { Card, CardContent, Typography, Box, Grow } from "@mui/material";
import {
  Visibility as VisibilityIcon,
  Mouse as MouseIcon,
  MyLocation as TargetIcon,
  AttachMoney as AttachMoneyIcon,
  Person as PersonIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Remove as RemoveIcon,
  AccountBalance as PiggyBankIcon,
  Visibility as EyeIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { metricsData, MetricData } from "@/shared/data/mockData";

// Styled components for enhanced visual appeal
const StyledCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
  borderRadius: 12,
  border: "1px solid #e2e8f0",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  height: "100%",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
}));

const MetricValue = styled(Typography)(({ theme }) => ({
  fontSize: "1.75rem",
  fontWeight: 700,
  color: "#1f2937",
  marginBottom: theme.spacing(0.5),
}));

const MetricTitle = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#6b7280",
  marginBottom: theme.spacing(0.5),
}));

export const MetricsOverview: React.FC = () => {
  const metrics = metricsData.map((item) => ({
    ...item,
    icon: (() => {
      switch (item.title) {
        case "Total Impressions":
          return <EyeIcon sx={{ fontSize: 18, color: "#6b7280" }} />;
        case "Total Clicks":
          return <MouseIcon sx={{ fontSize: 18, color: "#6b7280" }} />;
        case "Conversions":
          return <TargetIcon sx={{ fontSize: 18, color: "#6b7280" }} />;
        case "CTR":
          return <TrendingUpIcon sx={{ fontSize: 18, color: "#6b7280" }} />;
        case "Total Spend":
          return <AttachMoneyIcon sx={{ fontSize: 18, color: "#6b7280" }} />;
        case "Active Users":
          return <PersonIcon sx={{ fontSize: 18, color: "#6b7280" }} />;
        case "ROI":
          return <PiggyBankIcon sx={{ fontSize: 18, color: "#6b7280" }} />;
        default:
          return <EyeIcon sx={{ fontSize: 18, color: "#6b7280" }} />;
      }
    })(),
  }));

  const getTrendIcon = (trend: MetricData["trend"]) => {
    if (trend.isNeutral) {
      return <RemoveIcon sx={{ fontSize: 14, color: "#6b7280" }} />;
    }
    return trend.isPositive ? (
      <TrendingUpIcon sx={{ fontSize: 14, color: "#10b981" }} />
    ) : (
      <TrendingDownIcon sx={{ fontSize: 14, color: "#ef4444" }} />
    );
  };

  const getTrendColor = (trend: MetricData["trend"]) => {
    if (trend.isNeutral) return "#6b7280";
    return trend.isPositive ? "#10b981" : "#ef4444";
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(7, 1fr)",
          },
          gap: 1.5,
        }}
      >
        {metrics.map((metric, index) => (
          <Grow key={index} in timeout={800 + index * 100}>
            <StyledCard>
              <CardContent sx={{ p: 2 }}>
                {/* Header with title and icon */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1.5,
                  }}
                >
                  <MetricTitle variant="body2">{metric.title}</MetricTitle>
                  {metric.icon}
                </Box>

                {/* Main value */}
                <MetricValue variant="h4">{metric.value}</MetricValue>

                {/* Trend indicator */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mb: 0.5,
                  }}
                >
                  {getTrendIcon(metric.trend)}
                  <Typography
                    variant="caption"
                    sx={{
                      color: getTrendColor(metric.trend),
                      fontWeight: 600,
                      fontSize: "0.75rem",
                    }}
                  >
                    {metric.trend.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#9ca3af",
                      fontSize: "0.75rem",
                    }}
                  >
                    vs last period
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  variant="caption"
                  sx={{
                    color: "#9ca3af",
                    fontSize: "0.75rem",
                    display: "block",
                  }}
                >
                  {metric.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grow>
        ))}
      </Box>
    </Box>
  );
};
