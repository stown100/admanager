import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
  Link,
} from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import { useAuth } from "../../shared/hooks/useAuth";
import { useTheme } from "../../shared/context/ThemeContext";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 400,
  background: theme.palette.mode === 'light'
    ? "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
    : "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.palette.mode === 'light'
    ? "0 8px 32px rgba(0,0,0,0.1)"
    : "0 8px 32px rgba(0,0,0,0.3)",
  borderRadius: 12,
}));

const AuthButton = styled(Button)(({ theme }) => ({
  height: 48,
  backgroundColor: "#4285f4",
  "&:hover": {
    backgroundColor: "#3367d6",
  },
  "&:disabled": {
    backgroundColor: theme.palette.mode === 'light' 
      ? "rgba(66, 133, 244, 0.6)" 
      : "rgba(66, 133, 244, 0.4)",
  },
}));

export const AuthPage: React.FC = () => {
  const {
    loginWithGoogle,
    isAuthenticated,
    isLoading: globalLoading,
    isLoggingIn,
  } = useAuth();
  const { mode } = useTheme();
  const [error, setError] = useState<string | null>(null);

  // Auto redirect when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/dashboard";
    }
  }, [isAuthenticated]);

  const handleGoogleLogin = async () => {
    setError(null);

    try {
      await loginWithGoogle();
      // Success - redirect will happen automatically via useEffect
    } catch (error) {
      console.error("Google login failed:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred during login. Please try again."
      );
    }
  };

  // Show loading spinner while checking authentication status
  if (globalLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: mode === 'light'
            ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            : "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: mode === 'light'
          ? "rgb(245, 245, 245)"
          : "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        padding: "20px",
      }}
    >
      <StyledCard>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 1, color: "text.primary" }}>
              Welcome
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sign in to access the dashboard
            </Typography>
          </Box>

          <AuthButton
            variant="contained"
            size="large"
            startIcon={
              isLoggingIn ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <GoogleIcon />
              )
            }
            onClick={handleGoogleLogin}
            disabled={isLoggingIn}
            fullWidth
          >
            {isLoggingIn ? "Signing in..." : "Sign in with Google"}
          </AuthButton>

          {error && (
            <Alert
              severity="error"
              sx={{ mt: 2, mb: 2 }}
              onClose={() => setError(null)}
            >
              {error}
            </Alert>
          )}

          <Alert severity="info" sx={{ mt: 2, mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>New users:</strong> After your first sign-in, you'll receive a verification email to confirm your account.
            </Typography>
            <Typography variant="body2">
              We use Firebase Authentication for secure login. Your data is protected and we never store your password.
            </Typography>
          </Alert>

          <Box sx={{ mt: 2 }}>
            <Typography variant="caption" color="text.secondary">
              By signing in, you agree to our{" "}
              <Link href="#" color="primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" color="primary">
                Privacy Policy
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </StyledCard>
    </Box>
  );
};
