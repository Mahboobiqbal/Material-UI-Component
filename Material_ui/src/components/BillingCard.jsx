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
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        border: "1px solid black",
        boxShadow: 2,
        "&:focus-within": {
          outline: "2.5px solid black",
        },
        ...sx,
      }}
      tabIndex={0}
      role="region"
      aria-label={`Billing plan: ${plan}`}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {plan}
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          {price}
        </Typography>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index} disablePadding>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckCircleIcon color="primary" aria-hidden="true" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        onClick={onSelect}
        sx={{
          mt: 2,
          border: "1px solid black",
          boxShadow: 2,
        }}
        aria-label={`Select ${plan} plan`}
      >
        Select Plan
      </Button>
    </Card>
  );
}
