import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <Tooltip title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          color: "text.primary",
          backgroundColor: "action.hover",
          "&:hover": {
            backgroundColor: "action.selected",
            transform: "scale(1.05)",
          },
          transition: "all 0.2s ease",
          width: 40,
          height: 40,
        }}
      >
        {mode === "light" ? (
          <DarkMode sx={{ fontSize: 20 }} />
        ) : (
          <LightMode sx={{ fontSize: 20 }} />
        )}
      </IconButton>
    </Tooltip>
  );
};
