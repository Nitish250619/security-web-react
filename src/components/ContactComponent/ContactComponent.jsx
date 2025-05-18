import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { motion } from "framer-motion";

const ContactComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        maxWidth: "1400px",
        mx: "auto",
        backgroundColor: "var(--color-bg-light)",
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: { xs: 4, md: 6 },
          color: "var(--color-text-primary)",
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        Get In Touch With Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
          flexWrap: "wrap",
        }}
      >
        {/* Left Section - Office Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, sm: 4 },
              width: { xs: "88%", sm: "400px", md: "450px" },
              backgroundColor: "var(--color-primary-light)",
              borderRadius: 3,
              mx: "auto",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                color: "var(--color-accent)",
                fontWeight: 600,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              Our Office
            </Typography>

            <Box sx={{ display: "flex", mb: 3 }}>
              <LocationOn color="primary" sx={{ mr: 2, mt: "4px" }} />
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--color-text-primary)",
                    fontWeight: 500,
                    mb: 1,
                  }}
                >
                  Office Address:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}
                >
                  J-811, Lambham Residency,
                  <br />
                  Near Sawariya Dham Mandir,
                  <br />
                  Musakhedi, Indore (M.P.) 452001
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", mb: 3 }}>
              <Email color="primary" sx={{ mr: 2, mt: "2px" }} />
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--color-text-primary)",
                    fontWeight: 500,
                    mb: 1,
                  }}
                >
                  Mail Id:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "var(--color-text-secondary)" }}
                >
                  apones.service@gmail.com
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Phone color="primary" sx={{ mr: 2, mt: "2px" }} />
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--color-text-primary)",
                    fontWeight: 500,
                    mb: 1,
                  }}
                >
                  Contact:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "var(--color-text-secondary)" }}
                >
                  7566665283, 7566662728
                </Typography>
              </Box>
            </Box>
          </Paper>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, sm: 4 },
              width: { xs: "88%", sm: "400px", md: "550px" },
              backgroundColor: "var(--color-primary-light)",
              borderRadius: 3,
              mx: "auto",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                color: "var(--color-accent)",
                fontWeight: 600,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              Send a Message
            </Typography>

            <form>
              <TextField
                fullWidth
                label="Name"
                type="text"
                variant="outlined"
                margin="normal"
                sx={{ mb: 2 }}
                InputLabelProps={{
                  style: { color: "var(--color-text-secondary)" },
                }}
              />

              {/* Responsive Flex Container for Email and Phone */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 2,
                }}
              >
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    style: { color: "var(--color-text-secondary)" },
                  }}
                />

                <TextField
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    style: { color: "var(--color-text-secondary)" },
                  }}
                />
              </Box>

              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                sx={{ mt: 2, mb: 3 }}
                InputLabelProps={{
                  style: { color: "var(--color-text-secondary)" },
                }}
              />

              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  backgroundColor: "var(--color-accent)",
                  "&:hover": {
                    backgroundColor: "var(--color-accent-hover)",
                  },
                  py: 1.5,
                  px: 4,
                  fontWeight: 600,
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ContactComponent;
