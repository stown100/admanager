import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Tooltip,
  Fade,
  Grow,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Remove as RemoveIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  MoreVert as MoreVertIcon,
  Visibility as EyeIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { campaignData } from "@/shared/data/mockData";

// Styled components
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

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: 8,
  overflow: "hidden",
  "& .MuiTable-root": {
    borderCollapse: "separate",
    borderSpacing: 0,
  },
  "& .MuiTableHead-root .MuiTableRow-root": {
    background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
  },
  "& .MuiTableHead-root .MuiTableCell-root": {
    borderBottom: "2px solid #e2e8f0",
    fontWeight: 600,
    fontSize: "0.875rem",
    color: "#6b7280",
    padding: "16px",
  },
  "& .MuiTableBody-root .MuiTableRow-root": {
    transition: "all 0.2s ease",
    "&:hover": {
      background: "rgba(59, 130, 246, 0.05)",
    },
    "&:nth-of-type(even)": {
      background: "rgba(0, 0, 0, 0.02)",
    },
  },
  "& .MuiTableBody-root .MuiTableCell-root": {
    borderBottom: "1px solid #f3f4f6",
    padding: "16px",
    fontSize: "0.875rem",
  },
}));

const StatusChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "$status",
})<{ $status: string }>(({ theme, $status }) => ({
  fontSize: "0.75rem",
  height: 24,
  fontWeight: 600,
  background:
    $status === "active"
      ? "#10b981"
      : $status === "paused"
      ? "#f59e0b"
      : "#6b7280",
  color: "#ffffff",
  "& .MuiChip-label": {
    padding: "0 8px",
  },
}));

const PlatformCell = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const MetricValue = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "#1f2937",
}));

export const CampaignTable: React.FC = () => {
  const getTrendIcon = (campaign: (typeof campaignData)[0]) => {
    const spentPercentage = (campaign.spent / campaign.budget) * 100;
    if (spentPercentage > 80) {
      return <TrendingUpIcon sx={{ fontSize: 16, color: "#10b981" }} />;
    } else if (spentPercentage < 30) {
      return <TrendingDownIcon sx={{ fontSize: 16, color: "#ef4444" }} />;
    }
    return <RemoveIcon sx={{ fontSize: 16, color: "#6b7280" }} />;
  };

  const getPlatformEmoji = (platform: string) => {
    switch (platform) {
      case "Meta Ads":
        return "🔷";
      case "Google Ads":
        return "🟢";
      case "TikTok Ads":
        return "⚫";
      default:
        return "📱";
    }
  };

  return (
    <Grow in timeout={800}>
      <StyledCard>
        <CardHeader
          title={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EyeIcon sx={{ fontSize: 24, color: "#3b82f6" }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Active Campaigns
              </Typography>
            </Box>
          }
          subheader="Manage and monitor your advertising campaigns"
          sx={{ pb: 1 }}
        />

        <CardContent sx={{ p: 3, pt: 0 }}>
          <Box sx={{ overflowX: "auto" }}>
            <StyledTableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Campaign</TableCell>
                    <TableCell>Platform</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="right">Budget</TableCell>
                    <TableCell align="right">Impressions</TableCell>
                    <TableCell align="right">CTR</TableCell>
                    <TableCell align="right">CPC</TableCell>
                    <TableCell align="right">Conversions</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {campaignData.map((campaign, index) => (
                    <Fade key={campaign.key} in timeout={500 + index * 200}>
                      <TableRow>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            {getTrendIcon(campaign)}
                            <Box>
                              <Typography
                                variant="body2"
                                sx={{ fontWeight: 600 }}
                              >
                                {campaign.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{ color: "#6b7280" }}
                              >
                                ${campaign.spent} of ${campaign.budget} spent
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <PlatformCell>
                            <span style={{ fontSize: "14px" }}>
                              {getPlatformEmoji(campaign.platform)}
                            </span>
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 600 }}
                            >
                              {campaign.platform}
                            </Typography>
                          </PlatformCell>
                        </TableCell>
                        <TableCell align="center">
                          <StatusChip
                            label={
                              campaign.status.charAt(0).toUpperCase() +
                              campaign.status.slice(1)
                            }
                            $status={campaign.status}
                            size="small"
                          />
                        </TableCell>
                        <TableCell align="right">
                          <MetricValue variant="body2">
                            ${campaign.budget}
                          </MetricValue>
                        </TableCell>
                        <TableCell align="right">
                          <MetricValue variant="body2">
                            {campaign.impressions}
                          </MetricValue>
                        </TableCell>
                        <TableCell align="right">
                          <MetricValue variant="body2">
                            {campaign.ctr}
                          </MetricValue>
                        </TableCell>
                        <TableCell align="right">
                          <MetricValue variant="body2">
                            {campaign.cpc}
                          </MetricValue>
                        </TableCell>
                        <TableCell align="right">
                          <MetricValue
                            variant="body2"
                            sx={{ color: "#10b981", fontWeight: 700 }}
                          >
                            {campaign.conversions}
                          </MetricValue>
                        </TableCell>
                        <TableCell align="center">
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Tooltip
                              title={
                                campaign.status === "active"
                                  ? "Pause Campaign"
                                  : "Start Campaign"
                              }
                            >
                              <IconButton
                                size="small"
                                sx={{
                                  color:
                                    campaign.status === "active"
                                      ? "#ef4444"
                                      : "#10b981",
                                  "&:hover": {
                                    backgroundColor:
                                      campaign.status === "active"
                                        ? "rgba(239, 68, 68, 0.1)"
                                        : "rgba(16, 185, 129, 0.1)",
                                  },
                                }}
                              >
                                {campaign.status === "active" ? (
                                  <PauseIcon sx={{ fontSize: 16 }} />
                                ) : (
                                  <PlayIcon sx={{ fontSize: 16 }} />
                                )}
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="More Options">
                              <IconButton
                                size="small"
                                sx={{ color: "#6b7280" }}
                              >
                                <MoreVertIcon sx={{ fontSize: 16 }} />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </TableCell>
                      </TableRow>
                    </Fade>
                  ))}
                </TableBody>
              </Table>
            </StyledTableContainer>
          </Box>
        </CardContent>
      </StyledCard>
    </Grow>
  );
};
