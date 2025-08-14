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
  Box,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function BillingCard({
  plan,
  price,
  period = "/month",
  description,
  features,
  onSelect,
  popular = false,
  sx,
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        position: "relative",
        maxWidth: 380,
        m: "auto",
        p: 3,
        borderRadius: "20px",
        background: "linear-gradient(135deg, #ffffff 0%, #f7f8fa 100%)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
        },
        "&:focus-within": {
          outline: "2px solid #a8edea",
          outlineOffset: "4px",
        },
        ...sx,
      }}
      tabIndex={0}
      role="region"
      aria-label={`Billing plan: ${plan}`}
    >
      {/* Popular Badge */}
      {popular && (
        <Box
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
            color: "#fff",
            px: 2,
            py: 0.5,
            borderRadius: "20px",
            fontSize: "0.75rem",
            fontWeight: "bold",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          Most Popular
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
          {plan}
        </Typography>
        {description && (
          <Typography
            variant="body2"
            sx={{ color: "#777", mb: 2, fontSize: "0.9rem" }}
          >
            {description}
          </Typography>
        )}
        <Box sx={{ display: "flex", alignItems: "baseline", mb: 2 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#2e2e2e", mr: 1 }}
          >
            {price}
          </Typography>
          <Typography variant="body1" sx={{ color: "#777", fontSize: "1rem" }}>
            {period}
          </Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />
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
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Button
        variant="contained"
        onClick={onSelect}
        sx={{
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
