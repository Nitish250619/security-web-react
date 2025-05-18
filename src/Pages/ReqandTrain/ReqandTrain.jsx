import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  useTheme,
} from "@mui/material";
import {
  Security as SecurityIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  Checklist as ChecklistIcon,
  Assignment as AssignmentIcon,
  Verified as VerifiedIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import ReqStandard from "../../components/ReqStandard/ReqStandard";
import TrainingProcess from "../../components/TrainingProcess/TrainingProcess";
import DocsandSup from "../../components/DocsandSup/DocsandSup";

const AnimatedBox = motion(Box);
const AnimatedTypography = motion(Typography);
const AnimatedPaper = motion(Paper);
const AnimatedAccordion = motion(Accordion);

const SectionHeader = styled(Typography)(({ theme }) => ({
  position: "relative",
  color: "var(--color-text-primary)",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: -8,
    left: 0,
    width: "60px",
    height: "4px",
    backgroundColor: "var(--color-accent)",
    borderRadius: "2px",
  },
}));

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ReqandTrain = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "var(--color-bg-dark)",
        color: "var(--color-text-primary)",
        pt: { xs: 4, md: 8 },
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <AnimatedBox
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          sx={{ mb: 8, textAlign: "center" }}
        >
          <AnimatedTypography
            variant="h2"
            variants={fadeInUp}
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
              color: "var(--color-text-primary)",
            }}
          >
            Security Excellence in Modern Times
          </AnimatedTypography>
          <AnimatedTypography
            variant="h5"
            variants={fadeInUp}
            sx={{
              fontWeight: 400,
              maxWidth: "800px",
              mx: "auto",
              color: "var(--color-text-secondary)",
            }}
          >
            Comprehensive security solutions meeting international standards
            with rigorously trained personnel
          </AnimatedTypography>
        </AnimatedBox>

        {/* Introduction */}
        <AnimatedBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          sx={{ mb: 8 }}
        >
          <AnimatedPaper
            elevation={3}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 2,
              backgroundColor: "var(--color-primary-light)",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              color: "var(--color-text-primary)",
            }}
            whileHover={{ y: -5 }}
          >
            <Typography variant="body1" paragraph>
              Security today has become an indispensable part in today's age.
              The sector is quite booming in the recent times and majority of
              the sectors ranging from retail to hospitality and many others
              need compliance for security.
            </Typography>
            <Typography variant="body1" paragraph>
              A security guard is an armed/unarmed individual which ensures
              protection of the assets ranging from human lives to physical
              property from criminal activities. Since they are employed to make
              sure of the safety, they are given rigorous training so that they
              can best cater to their responsibilities. Our company strictly
              follows the general requirement procedures (based on international
              standards) and strict interviewing procedures to recruit one of
              the best and most efficient personnel in the industry.
            </Typography>
          </AnimatedPaper>
        </AnimatedBox>

        <ReqStandard />

        <TrainingProcess />

        <DocsandSup />
      </Container>
    </Box>
  );
};

export default ReqandTrain;
