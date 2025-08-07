import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Container,
} from "@mui/material";
import {
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { useAuth } from "../shared/hooks/useAuth";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "#fff",
  color: "#000",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: 1350,
  margin: "0 auto",
  width: "100%",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(2),
  minHeight: "calc(100vh - 64px)",
  background: "#f5f5f5",
}));

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#2463eb" }}>
            ROIable
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>

            <IconButton onClick={handleMenu} color="inherit">
              <Avatar src={user?.picture} sx={{ width: 32, height: 32 }}>
                {!user?.picture && <AccountCircleIcon />}
              </Avatar>
            </IconButton>
          </Box>
        </StyledToolbar>
      </StyledAppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>
          <PersonIcon sx={{ mr: 1 }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SettingsIcon sx={{ mr: 1 }} />
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <LogoutIcon sx={{ mr: 1 }} />
          Sign Out
        </MenuItem>
      </Menu>

      <StyledContainer maxWidth={false}>{children}</StyledContainer>
    </Box>
  );
};
