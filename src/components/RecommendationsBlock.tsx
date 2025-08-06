import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  LinearProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  Grow,
  Fade,
} from "@mui/material";
import {
  MyLocation as TargetIcon,
  EmojiEvents as TrophyIcon,
  TrendingUp as TrendingUpIcon,
  AttachMoney as DollarIcon,
  Star as StarIcon,
  Lightbulb as LightbulbIcon,
  Facebook as FacebookIcon,
  Google as GoogleIcon,
  VideoLibrary as TikTokIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

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

const PlatformCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "$color",
})<{ $color: string }>(({ theme, $color }) => ({
  background: `linear-gradient(135deg, ${$color}25 0%, ${$color}15 100%)`,
  border: `1px solid ${$color}40`,
  borderRadius: 8,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: `0 4px 12px ${$color}30`,
  },
}));

const MetricRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(0.25),
}));

const ProgressContainer = styled(Box)(({ theme }) => ({
  "& .MuiLinearProgress-root": {
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  "& .MuiLinearProgress-bar": {
    borderRadius: 3,
  },
}));

interface PlatformData {
  name: string;
  icon: React.ReactNode;
  color: string;
  roi: string;
  revenue: string;
  spend: string;
  ctr: string;
  cpc: string;
  strengths: string[];
  isTopRoi?: boolean;
}

export const RecommendationsBlock: React.FC = () => {
  const [timeframe, setTimeframe] = useState("30");

  const platforms: PlatformData[] = [
    {
      name: "Meta Ads",
      icon: <FacebookIcon sx={{ fontSize: 18, color: "#1877f2" }} />,
      color: "#1877f2",
      roi: "280%",
      revenue: "$18,420",
      spend: "$4,850",
      ctr: "2.89%",
      cpc: "$1.53",
      strengths: ["High engagement", "Detailed targeting", "Visual content"],
      isTopRoi: true,
    },
    {
      name: "Google Ads",
      icon: <GoogleIcon sx={{ fontSize: 18, color: "#0f9d58" }} />,
      color: "#0f9d58",
      roi: "200%",
      revenue: "$15,600",
      spend: "$5,200",
      ctr: "3.21%",
      cpc: "$2.1",
      strengths: ["Search intent", "Wide reach", "Conversion tracking"],
    },
    {
      name: "TikTok Ads",
      icon: <TikTokIcon sx={{ fontSize: 18, color: "#fe2c55" }} />,
      color: "#fe2c55",
      roi: "200%",
      revenue: "$8,400",
      spend: "$2,800",
      ctr: "4.15%",
      cpc: "$0.89",
      strengths: ["Young audience", "Viral potential", "Low CPC"],
    },
  ];

  const getRoiPercentage = (roi: string) => {
    const value = parseInt(roi.replace("%", ""));
    return Math.min((value / 300) * 100, 100); // Normalize to 300% max
  };

  const getCtrPercentage = (ctr: string) => {
    const value = parseFloat(ctr.replace("%", ""));
    return Math.min((value / 5) * 100, 100); // Normalize to 5% max
  };

  return (
    <Grow in timeout={800}>
      <StyledCard>
        <CardContent sx={{ p: 3 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 0.5,
                }}
              >
                <TargetIcon sx={{ fontSize: 20, color: "#3b82f6" }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.125rem",
                    color: "#1f2937",
                  }}
                >
                  Platform Performance Comparison
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "#6b7280", fontSize: "0.875rem" }}
              >
                Compare metrics across your advertising platforms
              </Typography>
            </Box>
            <FormControl size="small" sx={{ minWidth: 140 }}>
              <InputLabel>Timeframe</InputLabel>
              <Select
                value={timeframe}
                label="Timeframe"
                onChange={(e) => setTimeframe(e.target.value)}
              >
                <MenuItem value="7">Last 7 Days</MenuItem>
                <MenuItem value="30">Last 30 Days</MenuItem>
                <MenuItem value="90">Last 90 Days</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Platform Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(auto-fit, minmax(280px, 1fr))",
              },
              gap: 2,
              mb: 3,
            }}
          >
            {platforms.map((platform, index) => (
              <Fade key={platform.name} in timeout={1000 + index * 200}>
                <PlatformCard $color={platform.color}>
                  <CardContent sx={{ p: 2 }}>
                    {/* Platform Header */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        {platform.icon}
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            color: "#1f2937",
                          }}
                        >
                          {platform.name}
                        </Typography>
                      </Box>
                      {platform.isTopRoi && (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            background:
                              "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                            color: "#92400e",
                            px: 1,
                            py: 0.25,
                            borderRadius: 1,
                            border: "1px solid #f59e0b",
                            boxShadow: "0 1px 3px rgba(251, 191, 36, 0.3)",
                          }}
                        >
                          <TrophyIcon sx={{ fontSize: 12, color: "#92400e" }} />
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              color: "#92400e",
                            }}
                          >
                            TOP ROI
                          </Typography>
                        </Box>
                      )}
                    </Box>

                    {/* ROI Section */}
                    <Box sx={{ mb: 2 }}>
                      <MetricRow>
                        <Typography
                          variant="caption"
                          sx={{ color: "#6b7280", fontSize: "0.75rem" }}
                        >
                          ROI
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              fontSize: "1.125rem",
                              color: "#1f2937",
                            }}
                          >
                            {platform.roi}
                          </Typography>
                          <TrendingUpIcon
                            sx={{ fontSize: 12, color: "#10b981" }}
                          />
                        </Box>
                      </MetricRow>

                      {/* Metrics List */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 0.25,
                          fontSize: "0.75rem",
                        }}
                      >
                        <MetricRow>
                          <Typography
                            variant="caption"
                            sx={{ color: "#6b7280" }}
                          >
                            Revenue
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ fontWeight: 600 }}
                          >
                            {platform.revenue}
                          </Typography>
                        </MetricRow>
                        <MetricRow>
                          <Typography
                            variant="caption"
                            sx={{ color: "#6b7280" }}
                          >
                            Spend
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ fontWeight: 600 }}
                          >
                            {platform.spend}
                          </Typography>
                        </MetricRow>
                        <MetricRow>
                          <Typography
                            variant="caption"
                            sx={{ color: "#6b7280" }}
                          >
                            CTR
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ fontWeight: 600 }}
                          >
                            {platform.ctr}
                          </Typography>
                        </MetricRow>
                        <MetricRow>
                          <Typography
                            variant="caption"
                            sx={{ color: "#6b7280" }}
                          >
                            CPC
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ fontWeight: 600 }}
                          >
                            {platform.cpc}
                          </Typography>
                        </MetricRow>
                      </Box>
                    </Box>

                    {/* Strengths Section */}
                    <Divider sx={{ my: 1.5 }} />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#6b7280",
                          fontSize: "0.7rem",
                          display: "block",
                          mb: 1,
                        }}
                      >
                        Key Strengths:
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {platform.strengths.map((strength) => (
                          <Chip
                            key={strength}
                            label={strength}
                            size="small"
                            sx={{
                              fontSize: "0.65rem",
                              height: 18,
                              background: "rgba(0, 0, 0, 0.05)",
                              color: "#374151",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </PlatformCard>
              </Fade>
            ))}
          </Box>

          {/* Comparison Charts */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
              mb: 3,
            }}
          >
            {/* ROI Comparison */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <DollarIcon sx={{ fontSize: 16, color: "#10b981" }} />
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, fontSize: "0.875rem" }}
                >
                  ROI Comparison
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {platforms.map((platform) => (
                  <Box key={`roi-${platform.name}`}>
                    <MetricRow>
                      <Typography variant="caption" sx={{ fontWeight: 500 }}>
                        {platform.name}
                      </Typography>
                      <Typography variant="caption" sx={{ fontWeight: 700 }}>
                        {platform.roi}
                      </Typography>
                    </MetricRow>
                    <ProgressContainer sx={{ mt: 0.5 }}>
                      <LinearProgress
                        variant="determinate"
                        value={getRoiPercentage(platform.roi)}
                        sx={{
                          "& .MuiLinearProgress-bar": {
                            background: platform.color,
                          },
                        }}
                      />
                    </ProgressContainer>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* CTR Performance */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <TargetIcon sx={{ fontSize: 16, color: "#3b82f6" }} />
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 600, fontSize: "0.875rem" }}
                >
                  CTR Performance
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {platforms
                  .sort((a, b) => parseFloat(b.ctr) - parseFloat(a.ctr))
                  .map((platform) => (
                    <Box key={`ctr-${platform.name}`}>
                      <MetricRow>
                        <Typography variant="caption" sx={{ fontWeight: 500 }}>
                          {platform.name}
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 700 }}>
                          {platform.ctr}
                        </Typography>
                      </MetricRow>
                      <ProgressContainer sx={{ mt: 0.5 }}>
                        <LinearProgress
                          variant="determinate"
                          value={getCtrPercentage(platform.ctr)}
                          sx={{
                            "& .MuiLinearProgress-bar": {
                              background: platform.color,
                            },
                          }}
                        />
                      </ProgressContainer>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>

          {/* Platform Insights */}
          <Box
            sx={{
              background: "rgba(241, 245, 249, 0.5)",
              borderRadius: 2,
              p: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1.5,
              }}
            >
              <LightbulbIcon sx={{ fontSize: 16, color: "#f59e0b" }} />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, fontSize: "0.875rem" }}
              >
                Platform Insights
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(auto-fit, minmax(200px, 1fr))",
                },
                gap: 2,
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mb: 0.5,
                  }}
                >
                  <TrophyIcon sx={{ fontSize: 12, color: "#10b981" }} />
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, color: "#10b981" }}
                  >
                    Highest ROI:
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{ color: "#6b7280", fontSize: "0.75rem" }}
                >
                  Meta Ads leading with 280% ROI
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mb: 0.5,
                  }}
                >
                  <StarIcon sx={{ fontSize: 12, color: "#3b82f6" }} />
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, color: "#3b82f6" }}
                  >
                    Best CTR:
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{ color: "#6b7280", fontSize: "0.75rem" }}
                >
                  TikTok Ads with 4.15% engagement
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mb: 0.5,
                  }}
                >
                  <DollarIcon sx={{ fontSize: 12, color: "#f59e0b" }} />
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, color: "#f59e0b" }}
                  >
                    Lowest CPC:
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{ color: "#6b7280", fontSize: "0.75rem" }}
                >
                  TikTok Ads at $0.89 per click
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </StyledCard>
    </Grow>
  );
};
