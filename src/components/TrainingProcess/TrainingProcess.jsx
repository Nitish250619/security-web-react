import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import {
  School as SchoolIcon,
  Work as WorkIcon,
  Refresh as RefreshIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const TrainingProcess = () => {
  const trainingData = {
    intro:
      "Candidates must fully comply with the set strict parameters. Once, they get through this, they are qualified for induction. After induction, each security guard has to undergo rigorous training which can be categorized into 'basic' and 'on-the job'. These courses prepare them for top performance at their position, and provide a wide and wise vision of an area, much better than that of citizens and average security guards.",
    basic: [
      "Drill movements at regular intervals Services.",
      "Firefighting and first-aid methods.",
      "Physique: Candidate must be in excellent physical shape.",
      "Main Gate duties.",
      "Ensuring proper documentation at the gate or reception.",
      "Basic telephone duties and mannerisms.",
      "Good and friendly conduct with staff and visitors.",
      "VIP escort protocols.",
      "Searching and frisking of persons.",
      "Personal hygiene and essential housekeeping duties.",
      "Car parking and traffic control and much more….",
    ],
    onTheJobBasic: [
      "Control of men and material at entry and exit points.",
      "Issue of passes and checking of ID cards.",
      "Telephone adequate. ",
      "Liaison with the police, fire brigade station Training.",
      "Patrolling of premises and dwelling units.",
      "Source of theft and pilferage.",
    ],
    onTheJobSpecific: [
      "Operation of lifts, generators, ATMs, machines etc.",
      "House-keeping duties.",
      "Telephone adequate.",
      "Advanced fire fighting techniques.",
      "Traffic control and management during events and parties.",
    ],
    refresher:
      "Supervisory staff and guards are subject to an appropriate assessment and evaluation to measure the security officer. For this, they have to complete refresher training for 2 days within a span of six months. In refresher training, all the aspects of duties are revised so as to ensure that their professional level is maintained at the required level.",
  };

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
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: -12,
                left: 0,
                width: "80px",
                height: "4px",
                backgroundColor: "var(--color-accent)",
                borderRadius: "2px",
              },
            }}
          >
            Our Training Process
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              color: "var(--color-text-secondary)",
              mb: 6,
            }}
          >
            {trainingData.intro}
          </Typography>
        </motion.div>

        {/* Training Sections */}
        <Grid container spacing={4}>
          {/* Basic Training */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  height: "100%",
                  p: 3,
                  backgroundColor: "var(--color-bg-light)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-default)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      backgroundColor: "var(--color-accent)",
                      color: "white",
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <SchoolIcon fontSize="medium" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Basic Training
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{ mb: 3, color: "var(--color-text-secondary)" }}
                >
                  Comprehensive foundational training covering all essential
                  security protocols and procedures.
                </Typography>

                <List dense>
                  {trainingData.basic.map((item, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="body2">{item}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </Grid>

          {/* On-the-Job Training */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  height: "100%",
                  p: 3,
                  backgroundColor: "var(--color-bg-light)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-default)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    sx={{
                      backgroundColor: "var(--color-accent)",
                      color: "white",
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <WorkIcon fontSize="medium" />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    On-The-Job Training
                  </Typography>
                </Box>

                <Accordion
                  sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    mb: 2,
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">
                      Basic On-Site Training
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      {trainingData.onTheJobBasic.map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <Typography variant="body2">{item}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">
                      Specific Job Training
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      {trainingData.onTheJobSpecific.map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <Typography variant="body2">{item}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Refresher Training */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          style={{ marginTop: "32px" }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 3,
              backgroundColor: "var(--color-primary-light)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-default)",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "var(--color-success)",
                color: "white",
                width: 64,
                height: 64,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                flexShrink: 0,
              }}
            >
              <RefreshIcon fontSize="large" />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Continuous Professional Development
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "var(--color-text-secondary)" }}
              >
                {trainingData.refresher}
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
};

export default TrainingProcess;
