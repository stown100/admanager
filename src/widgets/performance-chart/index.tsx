import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grow,
} from "@mui/material";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  Legend,
} from "recharts";
import { TrendingUp as TrendingUpIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { performanceData } from "@/shared/data/mockData";

// Styled components for enhanced visual appeal
const StyledCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
  borderRadius: 12,
  border: "1px solid #e2e8f0",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  height: 300,
  width: "100%",
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: 2,
          p: 2,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
          {label}
        </Typography>
        {payload.map((entry: any, index: number) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: entry.color,
              }}
            />
            <Typography variant="body2" sx={{ color: "#6b7280" }}>
              {entry.name}: {entry.value.toLocaleString()}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  }
  return null;
};

export const PerformanceChart: React.FC = () => {
  return (
    <Grow in timeout={800}>
      <StyledCard>
        <CardHeader
          title={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TrendingUpIcon sx={{ fontSize: 24, color: "#3b82f6" }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Performance Overview
              </Typography>
            </Box>
          }
          subheader="Track your campaign metrics over time"
          sx={{ pb: 1 }}
        />

        <CardContent sx={{ p: 3, pt: 0 }}>
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient
                    id="impressionsGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(221 83% 53%)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(221 83% 53%)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="clicksGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(142 76% 48%)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(142 76% 48%)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="spendGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(38 92% 50%)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(38 92% 50%)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="conversionsGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(0 84% 60%)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(0 84% 60%)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(240 5.9% 90%)"
                  opacity={0.5}
                />

                <XAxis
                  dataKey="name"
                  stroke="hsl(240 3.8% 46.1%)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />

                <YAxis
                  stroke="hsl(240 3.8% 46.1%)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />

                <Tooltip content={<CustomTooltip />} />

                <Legend
                  wrapperStyle={{
                    paddingTop: 16,
                  }}
                  iconType="circle"
                />

                <Area
                  type="monotone"
                  dataKey="impressions"
                  stroke="hsl(221 83% 53%)"
                  strokeWidth={2}
                  fill="url(#impressionsGradient)"
                  fillOpacity={0.6}
                  name="Impressions"
                  dot={{ fill: "hsl(221 83% 53%)", strokeWidth: 2, r: 4 }}
                  activeDot={{
                    r: 6,
                    stroke: "hsl(221 83% 53%)",
                    strokeWidth: 2,
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="clicks"
                  stroke="hsl(142 76% 48%)"
                  strokeWidth={2}
                  fill="url(#clicksGradient)"
                  fillOpacity={0.6}
                  name="Clicks"
                  dot={{ fill: "hsl(142 76% 48%)", strokeWidth: 2, r: 4 }}
                  activeDot={{
                    r: 6,
                    stroke: "hsl(142 76% 48%)",
                    strokeWidth: 2,
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="spend"
                  stroke="hsl(38 92% 50%)"
                  strokeWidth={2}
                  fill="url(#spendGradient)"
                  fillOpacity={0.6}
                  name="Spend"
                  dot={{ fill: "hsl(38 92% 50%)", strokeWidth: 2, r: 4 }}
                  activeDot={{
                    r: 6,
                    stroke: "hsl(38 92% 50%)",
                    strokeWidth: 2,
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="conversions"
                  stroke="hsl(0 84% 60%)"
                  strokeWidth={2}
                  fill="url(#conversionsGradient)"
                  fillOpacity={0.6}
                  name="Conversions"
                  dot={{ fill: "hsl(0 84% 60%)", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "hsl(0 84% 60%)", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </StyledCard>
    </Grow>
  );
};
