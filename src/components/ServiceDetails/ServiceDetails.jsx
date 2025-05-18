import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Divider
} from '@mui/material';
import {
  VerifiedUser as VerifiedIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import serviceData from "../../Utils/serviceData";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) return <div>Service not found</div>;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 4,
          borderBottom: '2px solid',
          borderColor: 'primary.main',
          pb: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          textAlign: { xs: 'center', sm: 'left' }
        }}>
          <Box sx={{
            backgroundColor: 'primary.light',
            borderRadius: '50%',
            width: 64,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: { sm: 3 },
            mb: { xs: 2, sm: 0 }
          }}>
            <service.icon />
          </Box>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 700,
              color: 'primary.main'
            }}
          >
            {service.title}
          </Typography>
        </Box>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Paper elevation={3} sx={{
              borderRadius: 2,
              overflow: 'hidden',
              width: '100%',
              aspectRatio: '16 / 9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Box sx={{ mb: 4 }}>
              {service.description.map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.7
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>

            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Key Services Include:
            </Typography>

            <List dense sx={{ mb: 4 }}>
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <ListItem sx={{ py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <VerifiedIcon color="primary" />
                    </ListItemIcon>
                    <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>
                      {feature}
                    </Typography>
                  </ListItem>
                </motion.div>
              ))}
            </List>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Paper elevation={0} sx={{
                p: 3,
                backgroundColor: 'primary.light',
                borderRadius: 2
              }}>
                <Typography variant="body1" sx={{
                  fontStyle: 'italic',
                  fontSize: { xs: '1rem', md: '1.1rem' }
                }}>
                  {service.conclusion}
                </Typography>
              </Paper>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <Box sx={{ mt: 6, textAlign: 'center', px: { xs: 1, sm: 4 } }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Ready to Secure Your Premises?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Contact us today to discuss your specific security needs
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default ServiceDetails;
