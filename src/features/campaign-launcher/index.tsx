import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Alert,
  Paper,
  Grow,
  Fade,
  CircularProgress,
} from "@mui/material";
import {
  Rocket as RocketIcon,
  AttachMoney as DollarIcon,
  Visibility as EyeIcon,
  TrendingUp as TrendingUpIcon,
  PlayArrow as PlayIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

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

const MetricCard = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
  border: "1px solid #bae6fd",
  borderRadius: 8,
  padding: theme.spacing(2),
  textAlign: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
  },
}));

const PredictionCard = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
  border: "1px solid #bbf7d0",
  borderRadius: 12,
  padding: theme.spacing(3),
  height: "100%",
}));

interface CampaignFormData {
  name: string;
  platform: string;
  budget: number;
  objective: string;
  targetAudience: string;
}

export const CampaignLauncher: React.FC = () => {
  const [formData, setFormData] = useState<CampaignFormData>({
    name: "",
    platform: "",
    budget: 0,
    objective: "",
    targetAudience: "",
  });
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<{
    impressions: number;
    clicks: number;
    cost: number;
    ctr: number;
  } | null>(null);

  const handleInputChange = (
    field: keyof CampaignFormData,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onFinish = async () => {
    if (
      !formData.name ||
      !formData.platform ||
      !formData.budget ||
      !formData.objective ||
      !formData.targetAudience
    ) {
      return;
    }

    setLoading(true);

    // Simulate AI prediction
    setTimeout(() => {
      const baseImpressions = formData.budget * 100;
      const baseClicks = baseImpressions * 0.02;
      const baseCost = formData.budget;
      const baseCtr = 2.0;

      setPrediction({
        impressions: Math.round(baseImpressions),
        clicks: Math.round(baseClicks),
        cost: baseCost,
        ctr: baseCtr,
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 3,
        }}
      >
        <Box sx={{ flex: { xs: 1, lg: 1 } }}>
          <Grow in timeout={800}>
            <StyledCard>
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}
                >
                  <RocketIcon sx={{ fontSize: 24, color: "#3b82f6" }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Campaign Setup
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Campaign Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter campaign name"
                    fullWidth
                    size="small"
                  />

                  <FormControl fullWidth size="small">
                    <InputLabel>Platform</InputLabel>
                    <Select
                      value={formData.platform}
                      label="Platform"
                      onChange={(e) =>
                        handleInputChange("platform", e.target.value)
                      }
                    >
                      <MenuItem value="meta">Meta Ads</MenuItem>
                      <MenuItem value="google">Google Ads</MenuItem>
                      <MenuItem value="tiktok">TikTok Ads</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    label="Daily Budget ($)"
                    type="number"
                    value={formData.budget}
                    onChange={(e) =>
                      handleInputChange("budget", Number(e.target.value))
                    }
                    placeholder="Enter daily budget"
                    fullWidth
                    size="small"
                  />

                  <FormControl fullWidth size="small">
                    <InputLabel>Campaign Objective</InputLabel>
                    <Select
                      value={formData.objective}
                      label="Campaign Objective"
                      onChange={(e) =>
                        handleInputChange("objective", e.target.value)
                      }
                    >
                      <MenuItem value="awareness">Brand Awareness</MenuItem>
                      <MenuItem value="traffic">Website Traffic</MenuItem>
                      <MenuItem value="conversions">Conversions</MenuItem>
                      <MenuItem value="sales">Sales</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    label="Target Audience"
                    value={formData.targetAudience}
                    onChange={(e) =>
                      handleInputChange("targetAudience", e.target.value)
                    }
                    placeholder="e.g., Age 25-45, Interest in Technology"
                    fullWidth
                    size="small"
                    multiline
                    rows={2}
                  />

                  <Button
                    variant="contained"
                    onClick={onFinish}
                    disabled={loading}
                    startIcon={
                      loading ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        <RocketIcon />
                      )
                    }
                    size="large"
                    sx={{
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                      color: "#ffffff",
                      fontWeight: 600,
                      mt: 2,
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)",
                      },
                    }}
                  >
                    {loading ? "Analyzing..." : "Launch Campaign"}
                  </Button>
                </Box>
              </CardContent>
            </StyledCard>
          </Grow>
        </Box>

        <Box sx={{ flex: { xs: 1, lg: 1 } }}>
          <Grow in timeout={1000}>
            <PredictionCard elevation={0}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}
              >
                <TrendingUpIcon sx={{ fontSize: 24, color: "#10b981" }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  AI Performance Prediction
                </Typography>
              </Box>

              {prediction ? (
                <Fade in timeout={500}>
                  <Box>
                    <Alert severity="success" sx={{ mb: 3 }}>
                      Campaign Analysis Complete
                      <br />
                      AI has analyzed your campaign settings and provided
                      performance predictions.
                    </Alert>

                    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                      <Box sx={{ flex: 1 }}>
                        <MetricCard elevation={0}>
                          <EyeIcon
                            sx={{ fontSize: 24, color: "#3b82f6", mb: 1 }}
                          />
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, color: "#1f2937" }}
                          >
                            {prediction.impressions.toLocaleString()}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: "#6b7280" }}
                          >
                            Impressions
                          </Typography>
                        </MetricCard>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <MetricCard elevation={0}>
                          <DollarIcon
                            sx={{ fontSize: 24, color: "#10b981", mb: 1 }}
                          />
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, color: "#1f2937" }}
                          >
                            ${prediction.cost.toLocaleString()}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: "#6b7280" }}
                          >
                            Estimated Cost
                          </Typography>
                        </MetricCard>
                      </Box>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        Key Metrics:
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 0.5,
                        }}
                      >
                        <Typography variant="body2" sx={{ color: "#6b7280" }}>
                          Expected Clicks: {prediction.clicks.toLocaleString()}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#6b7280" }}>
                          CTR: {prediction.ctr}%
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#6b7280" }}>
                          Cost per Click: $
                          {(prediction.cost / prediction.clicks).toFixed(2)}
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<PlayIcon />}
                      sx={{
                        background:
                          "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                        color: "#ffffff",
                        fontWeight: 600,
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #059669 0%, #047857 100%)",
                        },
                      }}
                    >
                      Launch Campaign
                    </Button>
                  </Box>
                </Fade>
              ) : (
                <Box sx={{ textAlign: "center", py: 4 }}>
                  <RocketIcon sx={{ fontSize: 48, color: "#d1d5db", mb: 2 }} />
                  <Typography variant="body2" sx={{ color: "#6b7280" }}>
                    Fill out the campaign form to get AI-powered performance
                    predictions
                  </Typography>
                </Box>
              )}
            </PredictionCard>
          </Grow>
        </Box>
      </Box>
    </Box>
  );
};
