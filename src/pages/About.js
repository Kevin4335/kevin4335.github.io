import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import kevinHeadshot from '../kevin_headshot.jpg';
import uofmLogo from '../uofmlogo.png';
import { colors } from '../colors';


const PageContainer = styled(Box)({
  minHeight: 'calc(100vh - 64px)',
  backgroundColor: colors.primary,
  padding: '4rem 2rem',
});

const StyledCard = styled(Card)({
  backgroundColor: colors.surface,
  borderRadius: 0,
  boxShadow: `0 1px 3px ${colors.shadow}`,
  borderTop: `3px solid ${colors.secondary}`,
  height: '100%',
});

const SkillCard = styled(Card)({
  backgroundColor: colors.surfaceAlt,
  borderRadius: 0,
  border: `1px solid ${colors.border}`,
  borderLeft: `3px solid ${colors.accent}`,
  height: '100%',
});

function About() {
  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Typography variant="h3" component="h1" sx={{ color: colors.light, fontWeight: 700, marginBottom: '1rem' }}>
            About Me
          </Typography>
          <Typography variant="h6" sx={{ color: colors.textMuted }}>
            Software Engineer & Developer
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Grid container spacing={3}>
          <Grid size={8}>
              <StyledCard>
                <CardContent sx={{ padding: '2rem' }}>
                  <Typography variant="h4" component="h2" sx={{ color: colors.light, marginBottom: '1rem' }}>
                    Kevin Chang
                  </Typography>
                  <Typography variant="body1" sx={{ color: colors.light, lineHeight: 1.8 }}>
                    Graduate student at the University of Michigan pursuing a Master of Science in Electrical and
                    Computer Engineering (expected December 2026), after earning a B.S.E. in Computer Science in
                    December 2025. My work focuses on systems, full-stack development, and applied machine learning,
                    using technologies such as React, Angular, .NET Core, Flask, Docker, AWS, Azure, and Python-based ML libraries.
                  </Typography>

                  <Typography variant="body1" sx={{ color: colors.light, lineHeight: 1.8, marginTop: '1rem' }}>
                    I am currently a researcher at the Liu Lab at the University of Michigan, where I focus on agentic AI systems, large language models, applied machine learning, and full-stack web development to support biomedical research workflows. Most recently, I interned as a Software Engineer at Rocket Close (Rocket Companies), building full-stack metadata management tooling across .NET Core, PostgreSQL, and Angular.
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
              <Typography variant="h4" component="h2" sx={{ color: colors.light, marginBottom: '1.5rem' }}>
                Education
              </Typography>
              <Grid container spacing={3} alignItems="flex-start" marginBottom="1.5rem">
                <Grid size={9}>
                  <Box>
                    <Typography variant="h6" sx={{ color: colors.light, marginBottom: '0.25rem' }}>
                      University of Michigan – Rackham Graduate School
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.textMuted, marginBottom: '0.5rem' }}>
                      Master of Science in Engineering, Electrical and Computer Engineering
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.light }}>
                      Expected Graduation: December 2026
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
                    <Typography variant="h6" sx={{ color: colors.light, marginBottom: '0.25rem' }}>
                      University of Michigan – College of Engineering
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.textMuted, marginBottom: '0.5rem' }}>
                      Bachelor of Science in Engineering, Computer Science
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.light }}>
                      Minor: User Experience Design • GPA: 3.778/4.00 (Dean’s List) • Graduated: December 2025
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
              <Typography variant="h4" component="h2" sx={{ color: colors.light, marginBottom: '1.5rem' }}>
                Technical Skills
              </Typography>
              <Grid container spacing={2}>
                {[
                  {
                    title: 'Languages',
                    content: 'C++, C#, Python, JavaScript, TypeScript, SQL, Cypher, C, Bash, Verilog',
                  },
                  {
                    title: 'Backend / Frameworks',
                    content: '.NET Core, Dapper, Entity Framework (patterns), RESTful APIs, Dependency Injection, Flask, xUnit',
                  },
                  {
                    title: 'Frontend',
                    content: 'React, Angular (multiple versions incl. v19, framework migration experience), Angular Standalone Components, Angular Material, RxJS, Reactive Forms / Data Binding, TailwindCSS',
                  },
                  {
                    title: 'Databases',
                    content: 'PostgreSQL, SQL Server, Npgsql, Composite Type Mapping, DB Migrations, Database Schema Design',
                  },
                  {
                    title: 'Cloud / Infrastructure',
                    content: 'AWS, AWS Lambda, Azure, Azure Functions, Azure DevOps (Repos, Pipelines, Boards), Terraform, Infrastructure as Code (IaC), Docker, Linux, Git',
                  },
                  {
                    title: 'Data / Messaging',
                    content: 'Kafka, Redis, Dynatrace',
                  },
                  {
                    title: 'BI / Reporting',
                    content: 'Power BI Embedded, Power BI / Data Explorer platforms, Report Metadata Management, EPPlus (Excel/CSV export)',
                  },
                  {
                    title: 'AI / ML / Research',
                    content: 'LLM agents, Multi-Agent Reinforcement Learning, Execution-Feedback Reward Systems, Model Context Protocol (MCP), Knowledge Graph Querying (Cypher generation), Biomedical NLP / Literature Synthesis Pipelines, NumPy, PyTorch, Pandas, Matplotlib',
                  },
                  {
                    title: 'Systems / Engineering Concepts',
                    content: 'One-Way Data Sync, State Diffing, Bounded Context Design, Circular Dependency Resolution, Legacy System Migration, CI/CD Pipeline Management',
                  },
                  {
                    title: 'Other',
                    content: 'Pygame, BeautifulSoup, Agile/Scrum (Developer, QA, BA, PO role rotation)',
                  },
                ].map((skill) => (
                  <Grid item xs={12} sm={6} key={skill.title}>
                    <SkillCard>
                      <CardContent>
                        <Typography variant="h6" sx={{ color: colors.light, marginBottom: '0.75rem' }}>
                          {skill.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.light, lineHeight: 1.8 }}>
                          {skill.content}
                        </Typography>
                      </CardContent>
                    </SkillCard>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </StyledCard>
        </Box>
      </Container>
    </PageContainer>
  );
}

export default About;
