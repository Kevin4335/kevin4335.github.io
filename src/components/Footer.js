import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)({
  backgroundColor: '#2c3e50',
  color: '#ecf0f1',
  padding: '2rem 0',
  marginTop: 'auto',
});

const FooterContent = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
});

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <FooterContent>
          <Typography variant="body2" sx={{ color: '#bdc3c7' }}>
            © {currentYear} Kevin Chang. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: '#bdc3c7' }}>
            Built with React & Material-UI
          </Typography>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

