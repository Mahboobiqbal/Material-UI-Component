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
        <Typography variant="h3" fontWeight={800} color="primary" gutterBottom>
          Choose Your Plan
        </Typography>
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
          >
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
