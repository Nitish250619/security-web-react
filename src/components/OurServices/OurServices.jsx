import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BusinessIcon from "@mui/icons-material/Business";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import GavelIcon from "@mui/icons-material/Gavel";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FactoryIcon from "@mui/icons-material/Factory";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { motion } from "framer-motion";

const services = [
  {
    id: "corporate-security",
    title: "Corporate Security",
    icon: <BusinessIcon fontSize="large" color="primary" />,
    description:
      "Professional corporate protection including physical surveillance, employee safety, and property monitoring.",
  },
  {
    id: "24hour-control",
    title: "24-Hour Control Services",
    icon: <AccessTimeIcon fontSize="large" color="primary" />,
    description:
      "Round-the-clock monitoring centers equipped with the latest tech to ensure non-stop safety and incident response.",
  },
  {
    id: "civil-security-service",
    title: "Civil Security Services",
    icon: <PeopleIcon fontSize="large" color="primary" />,
    description:
      "Dedicated personnel for civilian support in public areas, including crowd control and civic safety.",
  },
  {
    id: "gunman-service",
    title: "Gunman Services",
    icon: <GavelIcon fontSize="large" color="primary" />,
    description:
      "Licensed armed guards for banks, VIPs, and sensitive facilities ensuring maximum deterrence and protection.",
  },
  {
    id: "housekeeping-services",
    title: "Housekeeping Services",
    icon: <CleaningServicesIcon fontSize="large" color="primary" />,
    description:
      "Comprehensive cleaning and maintenance staff for offices, residential societies, and commercial premises.",
  },
  {
    id: "industrial-security-services",
    title: "Industrial Security Services",
    icon: <FactoryIcon fontSize="large" color="primary" />,
    description:
      "Security solutions for factories, warehouses, and industrial zones to prevent theft, accidents, and sabotage.",
  },
  {
    id: "house-maintenance-services",
    title: "House Maintenance Services",
    icon: <HomeRepairServiceIcon fontSize="large" color="primary" />,
    description:
      "Reliable maintenance services for residential buildings including plumbing, electrical, and general repairs.",
  },
  {
    id: "bank-atm-service",
    title: "Bank & ATM Security Services",
    icon: <AccountBalanceIcon fontSize="large" color="primary" />,
    description:
      "Highly trained security guards for banking institutions and ATMs, ensuring secure transactions and fraud prevention.",
  },
];

const OurServices = () => {
  const navigate = useNavigate();

  const handleCardClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: "1980px",
        backgroundColor: "var(--color-bg-dark)",
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: {
            xs: "2rem",
            sm: "2.25rem",
            md: "2.5rem",
          },
          color: "var(--color-text-primary)",
          mb: { xs: 4, md: 6 },
          position: "relative",
          "&::after": {
            content: '""',
            display: "block",
            width: "60px",
            height: "4px",
            backgroundColor: "var(--color-accent)",
            borderRadius: "2px",
            margin: "12px auto 0",
          },
        }}
      >
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} display="flex">
            <motion.div
              style={{ flex: 1, display: "flex" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                elevation={3}
                onClick={() => handleCardClick(service.id)}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "var(--color-bg-light)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-default)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  maxHeight: "310px", // Fixed height for all cards
                  maxWidth: {
                    xs: "100%", // Full width on mobile
                    sm: "300px",
                    md: "300px",
                  },
                  ":hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 3,
                      height: "60px", // Fixed height for icon container
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    align="center"
                    gutterBottom
                    sx={{
                      color: "var(--color-text-primary)",
                      fontWeight: 600,
                      mb: 2,
                      minHeight: "60px", // Fixed height for title
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "var(--color-text-secondary)",
                      textAlign: "center",
                      flexGrow: 1, // Takes remaining space
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurServices;
