import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '../colors';

const FooterContainer = styled(Box)({
  backgroundColor: colors.surface,
  color: colors.light,
  padding: '2rem 0',
  marginTop: 'auto',
  borderTop: `1px solid ${colors.border}`,
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
          <Typography variant="body2" sx={{ color: colors.textMuted }}>
            © {currentYear} Kevin Chang. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: colors.textMuted }}>
            Built with React & Material-UI
          </Typography>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
