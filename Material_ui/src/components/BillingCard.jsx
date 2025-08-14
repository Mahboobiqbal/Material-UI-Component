import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function BillingCard({ plan, price, features, onSelect, sx }) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 360,
        m: "auto",
        p: 3,
        borderRadius: "20px",
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
        },
        ...sx,
      }}
      tabIndex={0}
      role="region"
      aria-label={`Billing plan: ${plan}`}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#333",
          }}
        >
          {plan}
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#2e2e2e",
            mb: 2,
          }}
        >
          {price}
        </Typography>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckCircleIcon sx={{ color: "#7cb342" }} aria-hidden="true" />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{
                  sx: { color: "#555", fontSize: "0.95rem" },
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Button
        variant="contained"
        onClick={onSelect}
        sx={{
          mt: 2,
          py: 1.2,
          borderRadius: "12px",
          background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
          color: "#333",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            background: "linear-gradient(135deg, #fed6e3 0%, #a8edea 100%)",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
          },
        }}
        aria-label={`Select ${plan} plan`}
      >
        Select Plan
      </Button>
    </Card>
  );
}
