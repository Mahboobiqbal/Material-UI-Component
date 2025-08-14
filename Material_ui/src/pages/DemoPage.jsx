import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import { BillingCard } from "../components/BillingCard";

export function DemoPage() {
  const handleSelect = (plan) => {
    alert(`Selected plan: ${plan}`);
  };

  const plans = [
    {
      plan: "Basic",
      price: "$9/mo",
      features: ["1 user", "5GB storage", "Email support"],
    },
    {
      plan: "Pro",
      price: "$29/mo",
      features: ["5 users", "50GB storage", "Priority email support"],
    },
    {
      plan: "Enterprise",
      price: "$99/mo",
      features: ["Unlimited users", "500GB storage", "Phone & email support"],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mb: 1,
          }}
        >
          <Typography
            variant="h3"
            fontWeight={800}
            gutterBottom
            sx={{
              background: "linear-gradient(90deg, #1976d2 0%, #ff9800 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Choose Your Plan
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="text.secondary">
          Flexible options for teams of all sizes. Powered by Material-UI.
        </Typography>
      </Box>
      <Grid
        container
        columns={12}
        columnSpacing={{ xs: 2, md: 4 }}
        justifyContent="center"
      >
        {plans.map((p) => (
          <Grid
            key={p.plan}
            gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
            sx={{ position: "relative" }}
          >
            {p.plan === "Pro" && (
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  background: "#ff9800",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  boxShadow: "0 2px 8px rgba(255, 152, 0, 0.15)",
                  letterSpacing: 1,
                  zIndex: 2,
                  border: "1.5px solid #ffa726",
                  textTransform: "uppercase",
                  fontFamily: "inherit",
                }}
              >
                Popular
              </Box>
            )}
            <BillingCard
              plan={p.plan}
              price={p.price}
              features={p.features}
              onSelect={() => handleSelect(p.plan)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
