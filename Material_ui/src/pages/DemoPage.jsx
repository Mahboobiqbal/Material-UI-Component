import React from "react";
import { Container, Grid, Box, Typography, Chip } from "@mui/material";
import { BillingCard } from "../components/BillingCard";

export function DemoPage() {
  const handleSelect = (plan) => {
    alert(`Selected plan: ${plan}`);
  };

  const plans = [
    {
      plan: "Basic",
      price: "$9",
      description: "Perfect for individuals just getting started",
      features: ["1 user", "5GB storage", "Email support", "Basic analytics", "Mobile app"],
    },
    {
      plan: "Pro",
      price: "$29",
      description: "Ideal for growing teams and businesses",
      features: ["5 users", "50GB storage", "Priority email support", "Advanced analytics", "API access", "Custom integrations"],
      popular: true,
    },
    {
      plan: "Enterprise",
      price: "$99",
      description: "For large organizations with advanced needs",
      features: ["Unlimited users", "500GB storage", "Phone & email support", "Advanced security", "Custom reporting", "Dedicated account manager"],
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="Pricing Plans"
            sx={{
              mb: 3,
              background: "rgba(255, 255, 255, 0.2)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9rem",
              px: 3,
              py: 1,
              borderRadius: "30px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: "900",
              mb: 2,
              color: "#fff",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              letterSpacing: "-2px",
              lineHeight: 1.1,
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            Choose Your Plan
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "1.2rem",
              fontWeight: 400,
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Flexible pricing options for teams of all sizes. Start free, upgrade when you're ready.
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          {plans.map((p, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={p.plan}
              sx={{ 
                display: "flex",
                justifyContent: "center",
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                "@keyframes fadeInUp": {
                  "0%": {
                    opacity: 0,
                    transform: "translateY(30px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              <BillingCard
                plan={p.plan}
                price={p.price}
                description={p.description}
                features={p.features}
                popular={p.popular}
                onSelect={() => handleSelect(p.plan)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Additional Features Section */}
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontWeight: 600,
              mb: 3,
              opacity: 0.9,
            }}
          >
            All plans include
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            {[
              "99.9% Uptime SLA",
              "24/7 Customer Support",
              "Free SSL Certificate",
              "Regular Backups",
              "Advanced Security",
              "Mobile Optimization"
            ].map((feature, index) => (
              <Chip
                key={feature}
                label={feature}
                sx={{
                  background: "rgba(255, 255, 255, 0.15)",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  px: 2,
                  py: 1,
                  borderRadius: "20px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.25)",
                    transform: "translateY(-2px)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
