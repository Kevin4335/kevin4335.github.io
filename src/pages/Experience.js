import React from 'react';
import { Container, Typography, Box, Card, CardContent, Divider, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import uofmLogo from '../uofmlogo.png';
import UWMLogo from '../UWMlogo.jpg';
import upcancerLogo from '../upcancerlogo.png';


const PageContainer = styled(Box)({
  minHeight: 'calc(100vh - 64px)',
  backgroundColor: '#fafafa',
  padding: '4rem 1rem',
});

const StyledCard = styled(Card)({
  backgroundColor: '#ffffff',
  borderRadius: 0,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  marginBottom: '2rem',
});

function Experience() {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Typography variant="h3" component="h1" sx={{ color: '#2c3e50', fontWeight: 700, marginBottom: '1rem' }}>
            Experience
          </Typography>
          <Typography variant="h6" sx={{ color: '#7f8c8d' }}>
            Work experience and coursework
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <StyledCard>
            <CardContent sx={{ padding: '2rem' }}>
              <Typography variant="h4" component="h2" sx={{ color: '#2c3e50', marginBottom: '1.5rem' }}>
                Work Experience
              </Typography>
              
              <Grid container spacing={3} alignItems="flex-start" sx={{ marginBottom: '1.5rem' }}>
                <Grid size={9}>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#2c3e50', marginBottom: '0.25rem' }}>
                      Software Developer / Researcher
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#7f8c8d', marginBottom: '0.5rem' }}>
                      University of Michigan, Liu Lab • March 2025 - Current
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.8 }}>
                      At the Liu Lab, I developed and deployed research web tools in coordination with the Shuibing Chen Lab at Weill Cornell. This included modernizing legacy systems by containerizing them with Docker and integrating React frontends with Flask and R-based visualizations for biomedical data analysis. I worked on building and deploying large language model agents to automate biomedical literature review, including deployment of GPU-based models on AWS EC2 for production inference. I also built benchmarking pipelines and MCP tooling to evaluate LLM performance for a paper submission. My work supported two research papers currently under review, and contributed directly to the integration of our GLKB agent into the Deep Researcher framework for multi-hop synthesis.
                    </Typography>
                  </Box>
                  <Typography variant="body1" component="h2" sx={{ color: '#2c3e50', marginTop: '1rem', marginBottom: '0.25rem' }}>
                    Publications (under review)
                  </Typography>
                  <Box component="ul" sx={{ paddingLeft: '1.2rem', color: '#555', lineHeight: 1.8, margin: 0 }}>
                    <li>
                      <Typography variant="body2" component="span" fontSize={'11px'}>
                        <em>Unraveling Human Sinoatrial Node Development Using Fetal Heart and SAN-Paced Cardioid Models</em> – under review at <strong>Nature</strong>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" component="span" fontSize={'11px'}>
                        <em>Enhancing Biomedical AI Foundations: Genomic Literature Knowledge Base boosts LLMs' Mastery of Biomedical Literature</em> – under review at <strong>NeurIPS</strong>
                      </Typography>
                    </li>
                  </Box>
                  <Typography variant="body1" component="h2" sx={{ color: '#2c3e50', marginTop: '1rem', marginBottom: '0.25rem' }}>
                    Projects
                  </Typography>
                  <Box component="ul" sx={{ paddingLeft: '1.2rem', color: '#555', lineHeight: 1.8, margin: 0 }}>
                    <li>
                      <Typography variant="body2" component="span" fontSize={'14px'}>
                        <a href="https://pankbase.org/" target="_blank" rel="noopener noreferrer">PankBase</a>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" component="span" fontSize={'14px'}>
                        <a href="https://glkb.org/" target="_blank" rel="noopener noreferrer">Genomic Literature Knowledge Base</a>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" component="span" fontSize={'14px'}>
                        <a href="http://128.84.40.121/" target="_blank" rel="noopener noreferrer">T1DAtlas</a>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" component="span" fontSize={'14px'}>
                        <a href="http://128.84.41.80/" target="_blank" rel="noopener noreferrer">HeartOmicsAtlas</a>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" component="span" fontSize={'14px'}>
                        <a href="http://128.84.40.118" target="_blank" rel="noopener noreferrer">GutOmicsAtlas</a>
                      </Typography>
                    </li>
                  </Box>
                </Grid>
                <Grid size={3}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box
                      component="img"
                      src={uofmLogo}
                      alt="Company Logo"
                      sx={{
                        maxWidth: '100px',
                        maxHeight: '100px',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Divider sx={{ marginY: '1.5rem' }} />

              <Grid container spacing={3} alignItems="flex-start" sx={{ marginBottom: '1.5rem' }}>
                <Grid size={9}>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#2c3e50', marginBottom: '0.25rem' }}>
                      Software Development Intern
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#7f8c8d', marginBottom: '0.5rem' }}>
                      United Wholesale Mortgage • May 2025 - August 2025
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.8 }}>
                      I contributed to the migration of legacy CRON jobs to Azure Functions in C#, completing several job pipelines while designing scalable replacements for scheduling logic. On the backend, I worked with distributed technologies including Kafka and Redis, and used Dynatrace for system monitoring. I wrote comprehensive unit tests in xUnit to ensure code reliability. Over six Agile sprints, I rotated through Developer, QA, Business Analyst, and Product Owner roles to understand full-stack development and team dynamics. My internship culminated in a live demo of a completed enterprise platform to over 1,000 internal employees.
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={3}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box
                      component="img"
                      src={UWMLogo}
                      alt="Company Logo"
                      sx={{
                        maxWidth: '100px',
                        maxHeight: '100px',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Divider sx={{ marginY: '1.5rem' }} />

              <Grid container spacing={3} alignItems="flex-start">
                <Grid size={9}>
                  <Box>
                    <Typography variant="h6" sx={{ color: '#2c3e50', marginBottom: '0.25rem' }}>
                    Frontend Development Intern
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#7f8c8d', marginBottom: '0.5rem' }}>
                      Up Cancer • November 2023 - June 2024
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.8 }}>
                      I helped develop Hatching Sparrow, a CRM tool designed to improve workflow and task management for non-profits. My primary focus was building accessible and responsive React components that supported user interaction and data visualization. I implemented a Trello-style drag-and-drop task system and collaborated on streamlining the app’s state management to ensure smooth performance and usability.
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={3}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box
                      component="img"
                      src={upcancerLogo}
                      alt="Company Logo"
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
                Coursework
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.8 }}>
                <ul>
                  <li>EECS 482 - Operating Systems</li>
                  <li>EECS 481 - Software Engineering</li>
                  <li>EECS 485 - Web Systems</li>
                  <li>EECS 388 - Intro to Computer Security</li>
                  <li>EECS 442 - Computer Vision</li>
                  <li>EECS 376 - Foundations of Computer Science</li>
                  <li>EECS 370 - Intro to Computer Organization</li>
                  <li>EECS 281 - Data Structures and Algorithms</li>
                  <li>SI 364 - Building Data-Driven Applications</li>
                  <li>SI 339 - Web Design, Development, and Accessibility</li>
                  <li>SI 206 - Data-Oriented Programming</li>
                  <li>STATS 412 - Intro to Probability and Statistics</li>
                </ul>
              </Typography>
            </CardContent>
          </StyledCard>
        </Box>
      </Container>
    </PageContainer>
  );
}

export default Experience;

