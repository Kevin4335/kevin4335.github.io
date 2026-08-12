import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { colors } from '../colors';

const PageContainer = styled(Box)({
  minHeight: 'calc(100vh - 64px)',
  backgroundColor: colors.primary,
  padding: '4rem 1rem',
});

const StyledCard = styled(Card)({
  backgroundColor: colors.surface,
  borderRadius: 0,
  boxShadow: `0 1px 3px ${colors.shadow}`,
  borderTop: `3px solid ${colors.secondary}`,
  maxWidth: '900px',
  margin: '0 auto',
});

const ContactCard = styled(Card)({
  backgroundColor: colors.surfaceAlt,
  borderRadius: 0,
  border: `1px solid ${colors.border}`,
  borderLeft: `3px solid ${colors.accent}`,
  marginBottom: '1rem',
});

function Contact() {
  const [copied, setCopied] = useState({ email: false, linkedin: false, github: false });

  const contactInfo = {
    email: 'kvchang@umich.edu',
    linkedin: 'https://www.linkedin.com/in/kevinchangumich/',
    github: 'https://github.com/Kevin4335',
  };

  const handleCopy = async (type, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied({ ...copied, [type]: true });
      setTimeout(() => {
        setCopied({ ...copied, [type]: false });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Typography variant="h3" component="h1" sx={{ color: colors.light, fontWeight: 700, marginBottom: '1rem' }}>
            Get In Touch
          </Typography>
        </Box>

        <StyledCard>
          <CardContent sx={{ padding: '2rem' }}>
            <Typography variant="h4" component="h2" sx={{ color: colors.light, marginBottom: '1.5rem' }}>
              Let's Connect
            </Typography>

            <ContactCard>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <EmailIcon sx={{ color: colors.light, fontSize: '2rem' }} />
                    <Box>
                      <Typography variant="h6" sx={{ color: colors.light, marginBottom: '0.5rem' }}>
                        Email
                      </Typography>
                      <Typography
                        component="a"
                        href={`mailto:${contactInfo.email}`}
                        sx={{ color: colors.textMuted, textDecoration: 'none', '&:hover': { color: colors.light } }}
                      >
                        {contactInfo.email}
                      </Typography>
                    </Box>
                  </Box>
                  <Tooltip title={copied.email ? 'Copied!' : 'Copy email'}>
                    <IconButton
                      onClick={() => handleCopy('email', contactInfo.email)}
                      sx={{ color: colors.textMuted, '&:hover': { color: colors.light } }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </CardContent>
            </ContactCard>

            <ContactCard>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <LinkedInIcon sx={{ color: colors.light, fontSize: '2rem' }} />
                    <Box>
                      <Typography variant="h6" sx={{ color: colors.light, marginBottom: '0.5rem' }}>
                        LinkedIn
                      </Typography>
                      <Typography
                        component="a"
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: colors.textMuted, textDecoration: 'none', '&:hover': { color: colors.light } }}
                      >
                        {contactInfo.linkedin}
                      </Typography>
                    </Box>
                  </Box>
                  <Tooltip title={copied.linkedin ? 'Copied!' : 'Copy LinkedIn'}>
                    <IconButton
                      onClick={() => handleCopy('linkedin', contactInfo.linkedin)}
                      sx={{ color: colors.textMuted, '&:hover': { color: colors.light } }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </CardContent>
            </ContactCard>

            <ContactCard>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <GitHubIcon sx={{ color: colors.light, fontSize: '2rem' }} />
                    <Box>
                      <Typography variant="h6" sx={{ color: colors.light, marginBottom: '0.5rem' }}>
                        GitHub
                      </Typography>
                      <Typography
                        component="a"
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: colors.textMuted, textDecoration: 'none', '&:hover': { color: colors.light } }}
                      >
                        {contactInfo.github}
                      </Typography>
                    </Box>
                  </Box>
                  <Tooltip title={copied.github ? 'Copied!' : 'Copy GitHub'}>
                    <IconButton
                      onClick={() => handleCopy('github', contactInfo.github)}
                      sx={{ color: colors.textMuted, '&:hover': { color: colors.light } }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </CardContent>
            </ContactCard>
          </CardContent>
        </StyledCard>
      </Container>
    </PageContainer>
  );
}

export default Contact;
