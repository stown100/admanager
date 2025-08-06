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

export const AuthPage: React.FC = () => {
  const {
    loginWithGoogle,
    isAuthenticated,
    isLoading: globalLoading,
  } = useAuth();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto redirect when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/dashboard";
    }
  }, [isAuthenticated]);

  const handleGoogleLogin = async () => {
    setError(null);
    setIsFormLoading(true);

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
    } finally {
      setIsFormLoading(false);
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
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Welcome
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sign in to access the dashboard
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
            disabled={isFormLoading}
            fullWidth
            sx={{
              height: 48,
              backgroundColor: "#4285f4",
              "&:hover": {
                backgroundColor: "#3367d6",
              },
            }}
          >
            {isFormLoading ? "Signing in..." : "Sign in with Google"}
          </Button>

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
            We use Google OAuth for secure authentication. Your data is
            protected.
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
      </Card>
    </Box>
  );
};
