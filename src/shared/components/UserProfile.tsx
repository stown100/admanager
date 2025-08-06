import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useAuth } from "../hooks/useAuth";

export const UserProfile: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Avatar
            src={user.picture}
            sx={{ width: 64, height: 64, mx: "auto", mb: 2 }}
          >
            {!user.picture && <PersonIcon />}
          </Avatar>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {user.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.5,
            }}
          >
            <EmailIcon sx={{ fontSize: 16 }} />
            {user.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", mb: 2 }}
        >
          ID пользователя: {user.id}
        </Typography>

        <Button
          variant="contained"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={logout}
          fullWidth
        >
          Выйти
        </Button>
      </CardContent>
    </Card>
  );
};
