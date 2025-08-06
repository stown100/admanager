import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  IconButton,
  Box,
  Chip,
  Fade,
  Grow,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  Favorite as FavoriteIcon,
  Close as CloseIcon,
  Person as PersonIcon,
  Lightbulb as LightbulbIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// Styled components for enhanced visual appeal
const StyledCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
  borderRadius: 16,
  boxShadow: "0 4px 20px rgba(34, 197, 94, 0.1)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  border: "1px solid rgba(34, 197, 94, 0.2)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(34, 197, 94, 0.15)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(45deg, rgba(34, 197, 94, 0.03) 0%, rgba(34, 197, 94, 0.01) 100%)",
    pointerEvents: "none",
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
  borderRadius: 8,
  padding: theme.spacing(0.75),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  boxShadow: "0 2px 8px rgba(34, 197, 94, 0.2)",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    borderRadius: 9,
    zIndex: -1,
    opacity: 0.2,
  },
}));

const ProgressContainer = styled(Box)(({ theme }) => ({
  "& .MuiLinearProgress-root": {
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(34, 197, 94, 0.2)",
  },
  "& .MuiLinearProgress-bar": {
    borderRadius: 3,
    background: "linear-gradient(90deg, #22c55e 0%, #16a34a 100%)",
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  background: "rgba(34, 197, 94, 0.1)",
  border: "1px solid rgba(34, 197, 94, 0.3)",
  color: "#16a34a",
  borderRadius: 6,
  padding: "4px 10px",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "0.75rem",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(34, 197, 94, 0.15)",
    transform: "translateY(-1px)",
    boxShadow: "0 2px 8px rgba(34, 197, 94, 0.2)",
  },
}));

export const OrganicGrowthReminder: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Grow in={isVisible} timeout={800}>
      <StyledCard>
        <CardContent sx={{ p: 2, position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,
                flex: 1,
              }}
            >
              {/* Animated Icon Container */}
              <Fade in timeout={1000}>
                <IconContainer>
                  <TrendingUpIcon sx={{ fontSize: 16, color: "#ffffff" }} />
                </IconContainer>
              </Fade>

              {/* Content */}
              <Box sx={{ flex: 1, ml: 1.5 }}>
                {/* Header with title and heart icon */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mb: 0.5,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#1f2937",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    Don't Forget Organic Growth!
                  </Typography>
                  <FavoriteIcon sx={{ fontSize: 12, color: "#ef4444" }} />
                </Box>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#4b5563",
                    mb: 1.5,
                    lineHeight: 1.5,
                    fontSize: "0.75rem",
                  }}
                >
                  While paid ads are great, organic posts can boost your reach
                  for free. Regular posting builds authentic engagement and
                  complements your ad strategy.
                </Typography>

                {/* Action button and tip */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1.5,
                    flexWrap: "wrap",
                  }}
                >
                  <ActionButton
                    startIcon={<PersonIcon sx={{ fontSize: 14 }} />}
                    size="small"
                  >
                    Plan Organic Posts
                  </ActionButton>

                  <Chip
                    icon={<LightbulbIcon sx={{ fontSize: 10 }} />}
                    label="Tip: Post 3-5 times per week for best results"
                    size="small"
                    sx={{
                      background: "rgba(34, 197, 94, 0.1)",
                      color: "#16a34a",
                      border: "1px solid rgba(34, 197, 94, 0.2)",
                      "& .MuiChip-label": {
                        fontSize: "0.7rem",
                      },
                    }}
                  />
                </Box>

                {/* Progress indicator */}
                <Box sx={{ mt: 1.5 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 0.5,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "#6b7280", fontSize: "0.7rem" }}
                    >
                      Weekly Goal Progress
                    </Typography>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <CheckCircleIcon
                        sx={{ fontSize: 10, color: "#16a34a" }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#16a34a",
                          fontWeight: 600,
                          fontSize: "0.7rem",
                        }}
                      >
                        3/5 posts
                      </Typography>
                    </Box>
                  </Box>

                  <ProgressContainer>
                    <LinearProgress
                      variant="determinate"
                      value={60}
                      sx={{
                        "& .MuiLinearProgress-bar": {
                          transition: "transform 1s ease-in-out",
                        },
                      }}
                    />
                  </ProgressContainer>
                </Box>
              </Box>
            </Box>

            {/* Close button */}
            <IconButton
              onClick={() => setIsVisible(false)}
              sx={{
                color: "#9ca3af",
                "&:hover": {
                  color: "#6b7280",
                  background: "rgba(34, 197, 94, 0.1)",
                },
                transition: "all 0.2s ease",
              }}
              size="small"
            >
              <CloseIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>
        </CardContent>
      </StyledCard>
    </Grow>
  );
};
