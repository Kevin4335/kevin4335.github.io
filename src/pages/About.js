import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import kevinHeadshot from '../kevin_headshot.jpg';
import uofmLogo from '../uofmlogo.png';


const PageContainer = styled(Box)({
  minHeight: 'calc(100vh - 64px)',
  backgroundColor: '#fafafa',
  padding: '4rem 2rem',
});

const StyledCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: 0,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  height: '100%',
});

const SkillCard = styled(Card)({
  backgroundColor: '#f8f9fa',
  borderRadius: 0,
  border: '1px solid #e9ecef',
  height: '100%',
});

function About() {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Typography variant="h3" component="h1" sx={{ color: '#2c3e50', fontWeight: 700, marginBottom: '1rem' }}>
            About Me
          </Typography>
          <Typography variant="h6" sx={{ color: '#7f8c8d' }}>
            Software Engineer & Developer
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Grid container spacing={3}>
          <Grid size={8}>
              <StyledCard>
                <CardContent sx={{ padding: '2rem' }}>
                  <Typography variant="h4" component="h2" sx={{ color: '#2c3e50', marginBottom: '1rem' }}>
                    Kevin Chang
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8 }}>
                    Computer science student at the University of Michigan with a strong focus on systems, backend 
                    development, and applied machine learning graduating with an Bachelors in Computer Science December 2025. Starting a Master of Science in Electrical and 
                    Computer Engineering in January 2026. My work emphasizes building scalable tools, leveraging 
                    modern technologies such as React, Flask, Docker, AWS, and Python-based ML libraries.
                  </Typography>

                  <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, marginTop: '1rem' }}>
                    I am currently a researcher at the Liu Lab at the University of Michigan, where I focus on agentic AI systems, large language models, applied machine learning, and full-stack web development to support biomedical research workflows.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid size={4}>
              <Box
                component="img"
                src={kevinHeadshot}
                alt="Kevin Chang"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '4px',
                }}
              />
            </Grid>
          </Grid>

          <StyledCard>
            <CardContent sx={{ padding: '2rem' }}>
              <Typography variant="h4" component="h2" sx={{ color: '#2c3e50', marginBottom: '1.5rem' }}>
                Education
              </Typography>
              <Grid container spacing={3} alignItems="flex-start" marginBottom="1.5rem">
                <Grid size={9}>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#2c3e50', marginBottom: '0.25rem' }}>
                      University of Michigan – Rackham Graduate School
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#7f8c8d', marginBottom: '0.5rem' }}>
                      Master of Science in Engineering, Electrical and Computer Engineering
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555' }}>
                      Start Date: January 2026 • Expected Graduation: December 2026
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={3}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box
                      component="img"
                      src={uofmLogo}
                      alt="University Logo"
                      sx={{
                        maxWidth: '100px',
                        maxHeight: '100px',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={3} alignItems="flex-start">
                <Grid size={9}>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#2c3e50', marginBottom: '0.25rem' }}>
                      University of Michigan – College of Engineering
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#7f8c8d', marginBottom: '0.5rem' }}>
                      Bachelor of Science in Engineering, Computer Science
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555' }}>
                      Minor: User Experience Design • GPA: 3.792/4.00 (Dean’s List) • Expected Graduation: December 2025
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={3}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box
                      component="img"
                      src={uofmLogo}
                      alt="University Logo"
                      sx={{
                        maxWidth: '100px',
                        maxHeight: '100px',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </StyledCard>


          <StyledCard>
            <CardContent sx={{ padding: '2rem' }}>
              <Typography variant="h4" component="h2" sx={{ color: '#2c3e50', marginBottom: '1.5rem' }}>
                Technical Skills
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <SkillCard>
                    <CardContent>
                      <Typography variant="h6" sx={{ color: '#2c3e50', marginBottom: '0.75rem' }}>
                        Languages
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.8 }}>
                        C++, C#, Python, JavaScript, SQL, C, Bash, Verilog
                      </Typography>
                    </CardContent>
                  </SkillCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <SkillCard>
                    <CardContent>
                      <Typography variant="h6" sx={{ color: '#2c3e50', marginBottom: '0.75rem' }}>
                        Frameworks & Libraries
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.8 }}>
                        React, Flask, NumPy, PyTorch, Pandas, Matplotlib, Pygame, BeautifulSoup, TailwindCSS, xUnit
                      </Typography>
                    </CardContent>
                  </SkillCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <SkillCard>
                    <CardContent>
                      <Typography variant="h6" sx={{ color: '#2c3e50', marginBottom: '0.75rem' }}>
                        Tools & Platforms
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.8 }}>
                        Linux, Docker, Kubernetes, AWS, Git, Dynatrace, Redis, Kafka
                      </Typography>
                    </CardContent>
                  </SkillCard>
                </Grid>
              </Grid>
            </CardContent>
          </StyledCard>
        </Box>
      </Container>
    </PageContainer>
  );
}

export default About;
