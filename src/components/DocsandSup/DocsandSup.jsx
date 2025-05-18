import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import {
  Description as DescriptionIcon,
  Checklist as ChecklistIcon,
  SupervisorAccount as SupervisorIcon,
  Security as SecurityIcon,
  VerifiedUser as VerifiedIcon,
  Schedule as ScheduleIcon,
  Assessment as RandomCheckIcon,
  GppGood as ConfidentialIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const DocsandSup = () => {
  const documentationItems = [
    { icon: <ChecklistIcon />, name: "Daily muster roll" },
    { icon: <DescriptionIcon />, name: "Daily occurrence book" },
    { icon: <DescriptionIcon />, name: "Daily report book" },
    { icon: <ChecklistIcon />, name: "Attendance sheet" },
    { icon: <VerifiedIcon />, name: "Visitor's register" },
    { icon: <VerifiedIcon />, name: "Vehicle movement register" },
    { icon: <VerifiedIcon />, name: "In/out register" },
  ];

  const supervisionItems = [
    {
      icon: <SupervisorIcon />,
      frequency: "Twice daily",
      role: "Field officers",
    },
    {
      icon: <SecurityIcon />,
      frequency: "Every alternate day",
      role: "Manager inspection",
    },
    {
      icon: <ScheduleIcon />,
      frequency: "Weekly",
      role: "Senior staff inspection",
    },
    { icon: <RandomCheckIcon />, frequency: "Random", role: "Surprise checks" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "var(--color-bg-dark)",
        py: 8,
        px: { xs: 2, md: 4 },
        color: "var(--color-text-primary)",
      }}
    >
      <Box maxWidth="1200px" margin="0 auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 2,
              textAlign: "center",
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: -12,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                backgroundColor: "var(--color-accent)",
                borderRadius: "2px",
              },
            }}
          >
            Documentation & Supervision
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              textAlign: "center",
              color: "var(--color-text-secondary)",
              mb: 6,
            }}
          >
            Comprehensive documentation and rigorous supervision ensure the
            highest standards of security service delivery.
          </Typography>
        </motion.div>

        {/* Documentation Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 4 },
              mb: 6,
              backgroundColor: "var(--color-bg-light)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-default)",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              "&:before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "6px",
                height: "100%",
                backgroundColor: "var(--color-accent)",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar
                sx={{
                  backgroundColor: "var(--color-accent)",
                  color: "white",
                  width: 56,
                  height: 56,
                  mr: 3,
                }}
              >
                <DescriptionIcon fontSize="large" />
              </Avatar>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Daily Documentation
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {documentationItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        height: "100%",
                        backgroundColor: "var(--color-primary-light)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: "auto", mr: 2 }}>
                        <Box
                          sx={{
                            backgroundColor: "var(--color-accent)",
                            color: "white",
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {item.icon}
                        </Box>
                      </ListItemIcon>
                      <Typography variant="body1">{item.name}</Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>

        {/* Supervision Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 4 },
              mb: 6,
              backgroundColor: "var(--color-bg-light)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-default)",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              "&:before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "6px",
                height: "100%",
                backgroundColor: "var(--color-success)",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar
                sx={{
                  backgroundColor: "var(--color-success)",
                  color: "white",
                  width: 56,
                  height: 56,
                  mr: 3,
                }}
              >
                <SupervisorIcon fontSize="large" />
              </Avatar>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Supervision Hierarchy
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {supervisionItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        height: "100%",
                        width:"200px",
                        backgroundColor: "var(--color-primary-light)",
                        borderRadius: "8px",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "var(--color-success)",
                          color: "white",
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {item.frequency}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "var(--color-text-secondary)" }}
                      >
                        {item.role}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>

        {/* Confidential Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 4 },
              backgroundColor: "var(--color-primary-light)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-default)",
              borderRadius: "12px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              backgroundImage:
                "linear-gradient(to right, var(--color-primary-light), var(--color-bg-light))",
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "var(--color-warning)",
                color: "white",
                width: 80,
                height: 80,
                mr: { xs: 0, md: 4 },
                mb: { xs: 2, md: 0 },
              }}
            >
              <ConfidentialIcon fontSize="large" />
            </Avatar>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                Advanced Security Protocols
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "var(--color-text-secondary)", mb: 2 }}
              >
                We employ additional confidential screening methods and
                state-of-the-art scrutiny equipment that has established us as
                industry leaders.
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontStyle: "italic", color: "var(--color-accent)" }}
              >
                Strict action is taken against any inappropriate behavior.
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
};

export default DocsandSup;
