import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Avatar,
} from "@mui/material";
import {
  TrendingUp,
  MyLocation,
  People,
  Lightbulb,
  ArrowForward,
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

const SuggestionCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: 8,
  backgroundColor: "rgba(241, 245, 249, 0.5)",
  border: "1px solid #e2e8f0",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(241, 245, 249, 0.8)",
    transform: "translateX(4px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
}));

const IconAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
  boxShadow: "0 2px 8px rgba(59, 130, 246, 0.2)",
  "&.success": {
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.2)",
  },
  "&.warning": {
    background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    boxShadow: "0 2px 8px rgba(245, 158, 11, 0.2)",
  },
  "&.info": {
    background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    boxShadow: "0 2px 8px rgba(6, 182, 212, 0.2)",
  },
  "&.default": {
    background: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
    boxShadow: "0 2px 8px rgba(107, 114, 128, 0.2)",
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  background: "rgba(59, 130, 246, 0.1)",
  border: "1px solid rgba(59, 130, 246, 0.3)",
  color: "#1d4ed8",
  borderRadius: 6,
  padding: "4px 10px",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "0.75rem",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(59, 130, 246, 0.15)",
    transform: "translateY(-1px)",
    boxShadow: "0 2px 8px rgba(59, 130, 246, 0.2)",
  },
}));

interface Suggestion {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  icon: React.ReactNode;
  action: string;
  benefit: string;
  color: "success" | "warning" | "info" | "default";
}

const suggestions: Suggestion[] = [
  {
    id: "1",
    title: "Increase Budget for Summer Sale Campaign",
    description:
      "Your Summer Sale campaign is performing 40% above average CTR. Consider increasing budget by $500.",
    priority: "high",
    icon: <TrendingUp />,
    action: "Increase Budget",
    benefit: "High ROI Potential",
    color: "success",
  },
  {
    id: "2",
    title: "Optimize Targeting for Brand Awareness",
    description:
      "Narrow your audience targeting for better conversion rates. Current audience too broad.",
    priority: "medium",
    icon: <MyLocation />,
    action: "Refine Targeting",
    benefit: "Better Conversion",
    color: "warning",
  },
  {
    id: "3",
    title: "Create Lookalike Audience",
    description:
      "Based on your high-converting users, create a lookalike audience to expand reach effectively.",
    priority: "medium",
    icon: <People />,
    action: "Create Audience",
    benefit: "Audience Expansion",
    color: "info",
  },
  {
    id: "4",
    title: "A/B Test New Creative",
    description:
      "Your current ad creative has been running for 3 weeks. Test new variations to prevent ad fatigue.",
    priority: "low",
    icon: <Lightbulb />,
    action: "Test Creative",
    benefit: "Prevent Fatigue",
    color: "default",
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "error";
    case "medium":
      return "warning";
    case "low":
      return "default";
    default:
      return "default";
  }
};

export const AdSuggestions: React.FC = () => {
  const handleAction = (suggestion: Suggestion) => {
    console.log("Action clicked:", suggestion.action, "for:", suggestion.title);
    // Здесь будет логика выполнения действия
  };

  return (
    <StyledCard>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
          <Lightbulb sx={{ color: "#f59e0b", fontSize: 28 }} />
          <Typography variant="h5" sx={{ fontWeight: 600, color: "#1f2937" }}>
            AI-Powered Ad Suggestions
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ mb: 3, color: "#6b7280" }}>
          Optimize your campaigns with data-driven recommendations
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {suggestions.map((suggestion, index) => (
            <SuggestionCard
              key={suggestion.id}
              sx={{ animationDelay: `${index * 100}ms` }}
            >
              <IconAvatar className={suggestion.color}>
                {suggestion.icon}
              </IconAvatar>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, color: "#1f2937" }}
                  >
                    {suggestion.title}
                  </Typography>
                  <Chip
                    label={
                      suggestion.priority === "high"
                        ? "High Priority"
                        : suggestion.priority === "medium"
                        ? "Medium"
                        : "Low Priority"
                    }
                    size="small"
                    color={getPriorityColor(suggestion.priority)}
                    sx={{
                      fontSize: "0.7rem",
                      height: 20,
                      "& .MuiChip-label": { px: 1 },
                    }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "#6b7280", fontSize: "0.8rem" }}
                >
                  {suggestion.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "#3b82f6", fontWeight: 600 }}
                  >
                    {suggestion.benefit}
                  </Typography>
                  <ActionButton
                    size="small"
                    endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                    onClick={() => handleAction(suggestion)}
                  >
                    {suggestion.action}
                  </ActionButton>
                </Box>
              </Box>
            </SuggestionCard>
          ))}
        </Box>
      </CardContent>
    </StyledCard>
  );
};
