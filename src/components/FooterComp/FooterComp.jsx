import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Divider,
  Link,
  IconButton
} from '@mui/material';
import { 
  Facebook,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const FooterComp = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-text-primary)',
        py: 6,
        px: { xs: 2, md: 8 },
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Company Info */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              APONES SECURITY SERVICES
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Providing premium security solutions with professionalism and integrity since 2010.
            </Typography>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <IconButton sx={{ color: 'var(--color-text-primary)' }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: 'var(--color-text-primary)' }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: 'var(--color-text-primary)' }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </motion.div>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={4} md={2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              QUICK LINKS
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
              {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
                <li key={item} style={{ marginBottom: '0.5rem' }}>
                  <Link 
                    href="#" 
                    color="inherit" 
                    underline="hover"
                    sx={{
                      '&:hover': {
                        color: 'var(--color-accent)',
                      }
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </Box>
          </motion.div>
        </Grid>

        {/* Services */}
        <Grid item xs={12} sm={4} md={2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              SERVICES
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
              {[
                'Corporate Security',
                '24-Hour Control',
                'Armed Protection',
                'Bank Security',
                'Residential Security'
              ].map((service) => (
                <li key={service} style={{ marginBottom: '0.5rem' }}>
                  <Link 
                    href="#" 
                    color="inherit" 
                    underline="hover"
                    sx={{
                      '&:hover': {
                        color: 'var(--color-accent)',
                      }
                    }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </Box>
          </motion.div>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={4} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              CONTACT US
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOn sx={{ mr: 1 }} />
              <Typography variant="body2">
                J-811, Lambham Residency, Indore (M.P.) 452001
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography variant="body2">
                7566665283, 7566662728
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ mr: 1 }} />
              <Typography variant="body2">
                apones.service@gmail.com
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      <Divider sx={{ 
        my: 4, 
        backgroundColor: 'var(--color-border)' 
      }} />

      <Typography 
        variant="body2" 
        align="center"
        sx={{ opacity: 0.8 }}
      >
        © {new Date().getFullYear()} APONES Security Services. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default FooterComp;
