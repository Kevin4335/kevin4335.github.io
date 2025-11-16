import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#ffffff',
  color: '#333',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  borderRadius: 0,
});

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active }) => ({
  color: active ? '#2c3e50' : '#333',
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  borderRadius: 0,
  borderBottom: active ? '2px solid #2c3e50' : '2px solid transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#2c3e50',
  },
}));

const Logo = styled(Typography)({
  color: '#2c3e50',
  fontWeight: 700,
  fontSize: '1.5rem',
  textDecoration: 'none',
});

function Navigation() {
  const location = useLocation();

  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ maxWidth: '1200px', width: '100%', margin: '0 auto', justifyContent: 'space-between' }}>
        <Logo component={Link} to="/" sx={{ textDecoration: 'none' }}>
          Kevin Chang | Developer
        </Logo>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <StyledButton
            component={Link}
            to="/"
            active={location.pathname === '/'}
          >
            About
          </StyledButton>
          <StyledButton
            component={Link}
            to="/experience"
            active={location.pathname === '/experience'}
          >
            Experience
          </StyledButton>
          <StyledButton
            component={Link}
            to="/contact"
            active={location.pathname === '/contact'}
          >
            Contact
          </StyledButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navigation;
