import React from "react";
import { Container, Grid } from "@mui/material";
import { BillingCard } from "./components/BillingCard";

export function DemoPage() {
  const handleSelect = (plan) => {
    alert(`You selected the ${plan} plan`);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <BillingCard
            planName="Basic"
            price="$9/mo"
            features={["1 user", "5GB storage", "Email support"]}
            onSelect={() => handleSelect("Basic")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BillingCard
            planName="Pro"
            price="$29/mo"
            features={["5 users", "50GB storage", "Priority email support"]}
            onSelect={() => handleSelect("Pro")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BillingCard
            planName="Enterprise"
            price="$99/mo"
            features={[
              "Unlimited users",
              "500GB storage",
              "Phone & email support",
            ]}
            onSelect={() => handleSelect("Enterprise")}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
