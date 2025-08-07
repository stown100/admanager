import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { LogoutOutlined, AccountCircle } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useAuth } from "../shared/hooks/useAuth";
import { ThemeToggle } from "../shared/components/ThemeToggle";
import { useTheme } from "../shared/context/ThemeContext";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
      : "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
  color: theme.palette.text.primary,
  boxShadow:
    theme.palette.mode === "light"
      ? "0 1px 3px rgba(0, 0, 0, 0.1)"
      : "0 1px 3px rgba(0, 0, 0, 0.3)",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledToolbar = styled(Toolbar)(() => ({
  maxWidth: 1350,
  margin: "0 auto",
  width: "100%",
  padding: "0 20px",
}));

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, logout } = useAuth();
  const { mode } = useTheme();
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
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              color: mode === "light" ? "#2463eb" : "text.primary",
            }}
          >
            ROIable
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ThemeToggle />

            {user && (
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  sx={{ color: "text.primary" }}
                >
                  {user.picture ? (
                    <Avatar
                      src={user.picture}
                      alt={user.name}
                      sx={{ width: 32, height: 32 }}
                    />
                  ) : (
                    <AccountCircle />
                  )}
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Typography variant="body2">{user.name}</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Typography variant="body2">{user.email}</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <LogoutOutlined sx={{ mr: 1 }} />
                    <Typography variant="body2">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </StyledToolbar>
      </StyledAppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 8,
          minHeight: "calc(100vh - 64px)",
          background: (theme) => theme.palette.background.default,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
