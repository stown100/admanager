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
  Fade,
  Grow,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Remove as RemoveIcon,
  MoreVert as MoreVertIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Assessment as AssessmentIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import {
  platformData,
  formatNumber,
  formatCurrency,
} from "@/shared/data/mockData";

// Styled components for enhanced visual appeal
const StyledCard = styled(Card)(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
      : "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
  borderRadius: 12,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow:
    theme.palette.mode === "light"
      ? "0 1px 3px rgba(0, 0, 0, 0.1)"
      : "0 1px 3px rgba(0, 0, 0, 0.3)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow:
      theme.palette.mode === "light"
        ? "0 4px 12px rgba(0, 0, 0, 0.15)"
        : "0 4px 12px rgba(0, 0, 0, 0.4)",
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
    background:
      theme.palette.mode === "light"
        ? "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
        : "linear-gradient(135deg, #475569 0%, #334155 100%)",
  },
  "& .MuiTableHead-root .MuiTableCell-root": {
    borderBottom: `2px solid ${theme.palette.divider}`,
    fontWeight: 600,
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
    padding: "16px",
  },
  "& .MuiTableBody-root .MuiTableRow-root": {
    transition: "all 0.2s ease",
    "&:hover": {
      background:
        theme.palette.mode === "light"
          ? "rgba(59, 130, 246, 0.05)"
          : "rgba(59, 130, 246, 0.1)",
    },
    "&:nth-of-type(even)": {
      background:
        theme.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.02)"
          : "rgba(255, 255, 255, 0.02)",
    },
  },
  "& .MuiTableBody-root .MuiTableCell-root": {
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: "16px",
    fontSize: "0.875rem",
  },
}));

const PlatformCell = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const MetricValue = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

const StatusChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "$status",
})<{ $status: string }>(({ theme, $status }) => ({
  fontSize: "0.75rem",
  height: 24,
  fontWeight: 600,
  background:
    $status === "Active"
      ? theme.palette.success.main
      : theme.palette.error.main,
  color: "#ffffff",
  "& .MuiChip-label": {
    padding: "0 8px",
  },
}));

export const PlatformComparison: React.FC = () => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUpIcon sx={{ fontSize: 16, color: "success.main" }} />;
      case "down":
        return <TrendingDownIcon sx={{ fontSize: 16, color: "error.main" }} />;
      default:
        return <RemoveIcon sx={{ fontSize: 16, color: "text.secondary" }} />;
    }
  };

  return (
    <Box>
      <Grow in timeout={800}>
        <StyledCard>
          <CardHeader
            title={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AssessmentIcon sx={{ fontSize: 24, color: "primary.main" }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Platform Performance Comparison
                </Typography>
              </Box>
            }
            subheader="Compare performance metrics across different advertising platforms"
            sx={{ pb: 1 }}
          />

          <CardContent sx={{ p: 3, pt: 0 }}>
            {/* Platform Comparison Table */}
            <Box sx={{ overflowX: "auto" }}>
              <StyledTableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Platform</TableCell>
                      <TableCell align="right">Impressions</TableCell>
                      <TableCell align="right">Clicks</TableCell>
                      <TableCell align="right">CTR (%)</TableCell>
                      <TableCell align="right">Spend</TableCell>
                      <TableCell align="right">ROI</TableCell>
                      <TableCell align="center">Status</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {platformData.map((row, index) => (
                      <Fade key={row.key} in timeout={500 + index * 200}>
                        <TableRow>
                          <TableCell>
                            <PlatformCell>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                }}
                              >
                                <span style={{ fontSize: "14px" }}>
                                  {row.platformEmoji}
                                </span>
                                <Typography
                                  variant="body2"
                                  sx={{ fontWeight: 600 }}
                                >
                                  {row.platform}
                                </Typography>
                              </Box>
                            </PlatformCell>
                          </TableCell>
                          <TableCell align="right">
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                gap: 0.5,
                              }}
                            >
                              {getTrendIcon(row.trend)}
                              <MetricValue variant="body2">
                                {formatNumber(row.impressions)}
                              </MetricValue>
                            </Box>
                          </TableCell>
                          <TableCell align="right">
                            <MetricValue variant="body2">
                              {formatNumber(row.clicks)}
                            </MetricValue>
                          </TableCell>
                          <TableCell align="right">
                            <MetricValue variant="body2">
                              {row.ctr}%
                            </MetricValue>
                          </TableCell>
                          <TableCell align="right">
                            <MetricValue variant="body2">
                              {formatCurrency(row.spend)}
                            </MetricValue>
                          </TableCell>
                          <TableCell align="right">
                            <MetricValue
                              variant="body2"
                              sx={{ color: "success.main" }}
                            >
                              {row.roi}x
                            </MetricValue>
                          </TableCell>
                          <TableCell align="center">
                            <StatusChip
                              label={row.status}
                              $status={row.status}
                              size="small"
                            />
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
                                  row.status === "Active"
                                    ? "Pause Campaign"
                                    : "Start Campaign"
                                }
                              >
                                <IconButton
                                  size="small"
                                  sx={{
                                    color:
                                      row.status === "Active"
                                        ? "error.main"
                                        : "success.main",
                                    "&:hover": {
                                      backgroundColor:
                                        row.status === "Active"
                                          ? "rgba(239, 68, 68, 0.1)"
                                          : "rgba(16, 185, 129, 0.1)",
                                    },
                                  }}
                                >
                                  {row.status === "Active" ? (
                                    <PauseIcon sx={{ fontSize: 16 }} />
                                  ) : (
                                    <PlayIcon sx={{ fontSize: 16 }} />
                                  )}
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="More Options">
                                <IconButton
                                  size="small"
                                  sx={{ color: "text.secondary" }}
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
    </Box>
  );
};
