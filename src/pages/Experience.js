import React from 'react';
import { Container, Typography, Box, Card, CardContent, Divider, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import uofmLogo from '../uofmlogo.png';
import UWMLogo from '../UWMlogo.jpg';
import upcancerLogo from '../upcancerlogo.png';
import rocketLogo from '../rocket_logo.png';
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
  marginBottom: '2rem',
});

function Experience() {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Typography variant="h3" component="h1" sx={{ color: colors.light, fontWeight: 700, marginBottom: '1rem' }}>
            Experience
          </Typography>
          <Typography variant="h6" sx={{ color: colors.textMuted }}>
            Work experience and coursework
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <StyledCard>
            <CardContent sx={{ padding: '2rem' }}>
              <Typography variant="h4" component="h2" sx={{ color: colors.light, marginBottom: '1.5rem' }}>
                Work Experience
              </Typography>

              <Grid container spacing={3} alignItems="flex-start" sx={{ marginBottom: '1.5rem' }}>
                <Grid size={9}>
                  <Box>
                    <Typography variant="h6" sx={{ color: colors.light, marginBottom: '0.25rem' }}>
                      Software Engineer Intern
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.textMuted, marginBottom: '0.5rem' }}>
                      Rocket Close (Rocket Companies) • May 2026 - August 2026
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.light, lineHeight: 1.8 }}>
                      I worked on a full-stack rewrite of Inquire, an internal Power BI/Data Explorer reporting tool used by thousands of people across Rocket. I built most of the admin screens and metadata features for tagging, ownership, security groups, banner notices, and report search, using .NET Core, PostgreSQL, and Angular (across a few Angular versions while the team upgraded the framework). For report tagging, I moved tags from plain strings on legacy reports into their own database tables: I designed the PostgreSQL schema and migrations, wrote the .NET Core API, and updated the AWS Lambda sync job so tags stay consistent between the old SQL Server data and the new PostgreSQL model. Day to day I worked across .NET Core, Angular, and Dapper/PostgreSQL, ran deployments through Azure DevOps, and made Terraform changes for related AWS infrastructure. I also gave a live demo of Inquire to Rocket Close’s Data Engineering team.
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={3}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box
                      component="img"
                      src={rocketLogo}
                      alt="Rocket Companies Logo"
                      sx={{
                        maxWidth: '100px',
                        maxHeight: '100px',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Divider sx={{ marginY: '1.5rem', borderColor: colors.border }} />
              
              <Grid container spacing={3} alignItems="flex-start" sx={{ marginBottom: '1.5rem' }}>
                <Grid size={9}>
                  <Box>
                    <Typography variant="h6" sx={{ color: colors.light, marginBottom: '0.25rem' }}>
                      Software Developer / Researcher
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.textMuted, marginBottom: '0.5rem' }}>
                      University of Michigan, Liu Lab • March 2025 - Present
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.light, lineHeight: 1.8 }}>
                      Designed and implemented a multi-agent reinforcement learning system that trains LLM Cypher-generation agents through execution-feedback rewards, enabling a 14B-parameter model to reach parity with 200B+ parameter models on knowledge graph query accuracy benchmarks. Led deployment and development of research web tools in collaboration with Dr. Shuibing Chen’s lab at Weill Cornell Medicine, transitioning legacy research platforms to modern containerized systems using Docker, React, and Flask, and integrating R-based visualizations for data analysis. Built benchmarking pipelines and custom MCP tools to evaluate LLM performance, and integrated the GLKB LLM agent into an automated biomedical literature synthesis pipeline, achieving a 36% improvement in extraction accuracy and precision over prior baseline systems.
                    </Typography>
                  </Box>
                  <Typography variant="body1" component="h2" sx={{ color: colors.light, marginTop: '1rem', marginBottom: '0.25rem' }}>
                    Publications
                  </Typography>
                  <Box component="ul" sx={{ paddingLeft: '1.2rem', color: colors.light, lineHeight: 1.8, margin: 0 }}>
                    <li>
                      <Typography variant="body2" component="span" fontSize={'11px'}>
                        Huang, Y., Han, Z., Chang, K., Jiao, T., Liu, J. <em>Enhancing Biomedical AI Foundations: Genomic Literature Knowledge Base Boosts LLMs' Mastery of Biomedical Literature</em>. In Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD &apos;26), Vol. 2, 9149–9158. ACM, 2026.{' '}
                        <Link href="https://doi.org/10.1145/3770855.3817461" target="_blank" rel="noopener noreferrer" fontSize={'11px'} sx={{ color: colors.light }}>
                          https://doi.org/10.1145/3770855.3817461
                        </Link>
                      </Typography>
                    </li>
                  </Box>
                  <Typography variant="body1" component="h2" sx={{ color: colors.light, marginTop: '1rem', marginBottom: '0.25rem' }}>
                    Publications (under review)
                  </Typography>
                  <Box component="ul" sx={{ paddingLeft: '1.2rem', color: colors.light, lineHeight: 1.8, margin: 0 }}>
                    <li>
                      <Typography variant="body2" component="span" fontSize={'11px'}>
                        <em>Unraveling Human Sinoatrial Node Development Using Fetal Heart and SAN-Paced Cardioid Models</em>
                      </Typography>
                    </li>
                  </Box>
                  <Typography variant="body1" component="h2" sx={{ color: colors.light, marginTop: '1rem', marginBottom: '0.25rem' }}>
                    Projects
                  </Typography>
                  <Box component="ul" sx={{ paddingLeft: '1.2rem', color: colors.light, lineHeight: 1.8, margin: 0 }}>
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

              <Divider sx={{ marginY: '1.5rem', borderColor: colors.border }} />

              <Grid container spacing={3} alignItems="flex-start" sx={{ marginBottom: '1.5rem' }}>
                <Grid size={9}>
                  <Box>
                    <Typography variant="h6" sx={{ color: colors.light, marginBottom: '0.25rem' }}>
                      Software Development Intern
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.textMuted, marginBottom: '0.5rem' }}>
                      United Wholesale Mortgage • May 2025 - August 2025
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.light, lineHeight: 1.8 }}>
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

              <Divider sx={{ marginY: '1.5rem', borderColor: colors.border }} />

              <Grid container spacing={3} alignItems="flex-start">
                <Grid size={9}>
                  <Box>
                    <Typography variant="h6" sx={{ color: colors.light, marginBottom: '0.25rem' }}>
                    Frontend Development Intern
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.textMuted, marginBottom: '0.5rem' }}>
                      Up Cancer • November 2023 - June 2024
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.light, lineHeight: 1.8 }}>
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
              <Typography variant="h4" component="h2" sx={{ color: colors.light, marginBottom: '1.5rem' }}>
                Coursework
              </Typography>
              <Typography variant="body2" sx={{ color: colors.light, lineHeight: 1.8 }}>
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
