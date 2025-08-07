import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { AuthPage } from "../../pages/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (!isAuthenticated) {
    return <AuthPage />;
  }

  return <>{children}</>;
};
