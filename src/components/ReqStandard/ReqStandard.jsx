import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  List, 
  ListItem, 
  ListItemIcon,
} from '@mui/material';
import { 
  Person as PersonIcon,
  Height as HeightIcon,
  FitnessCenter as FitnessCenterIcon,
  School as SchoolIcon,
  VerifiedUser as VerifiedUserIcon,
  WorkHistory as WorkHistoryIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ReqStandard = () => {
  
  const requirements = [
    {
      icon: <PersonIcon />,
      title: "Age",
      description: "Candidate must be at least 21 years of age and maximum be 45 years."
    },
    {
      icon: <HeightIcon />,
      title: "Height",
      description: "We select only those candidates who are minimum 5'7\" or above."
    },
    {
      icon: <FitnessCenterIcon />,
      title: "Physique",
      description: "Candidate must be in excellent physical shape."
    },
    {
      icon: <SchoolIcon />,
      title: "Education",
      description: "Candidate must possess a minimum of matriculate certificate. Also, the applicant should have an ability to read & write English and the language(s) most appropriate to his or her assigned duties."
    },
    {
      icon: <VerifiedUserIcon />,
      title: "Antecedent Verification",
      description: "We duly check the candidate's background for if the person has a clean record and is free from any job related crime. Any felony conviction discovered in the course of conducting the search should also be considered relevant to the candidate's qualifications for the position."
    },
    {
      icon: <WorkHistoryIcon />,
      title: "Experience",
      description: "We prefer those applications that have some experience in this security industry."
    }
  ];

  return (
    <Box 
      sx={{ 
        backgroundColor: 'var(--color-bg-dark)',
        py: 8,
        px: { xs: 2, md: 4 }
      }}
    >
      <Box 
        maxWidth="1200px" 
        margin="0 auto"
      >
        <Typography 
          variant="h3" 
          component="h2"
          sx={{ 
            color: 'var(--color-text-primary)',
            mb: 6,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -12,
              left: 0,
              width: '80px',
              height: '4px',
              backgroundColor: 'var(--color-accent)',
              borderRadius: '2px'
            }
          }}
        >
          Recruitment Standards
        </Typography>
        
        <Grid container spacing={4}>
          {requirements.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    height: '100%',
                    p: 3,
                    backgroundColor: 'var(--color-bg-light)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-default)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: 'var(--color-accent)',
                        color: 'white',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: 'var(--color-text-primary)',
                        fontWeight: 600
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'var(--color-text-secondary)',
                      mt: 1
                    }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ReqStandard;