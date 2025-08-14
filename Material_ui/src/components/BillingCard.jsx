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

export function BillingCard({ planName, price, features, onSelect, sx }) {
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
        "&:focus-within": {
          outline: "2px solid",
          outlineColor: "primary.main",
        },
        ...sx,
      }}
      tabIndex={0}
      role="region"
      aria-label={`${planName} billing plan`}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {planName}
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
        sx={{ mt: 2 }}
        aria-label={`Select ${planName} plan`}
      >
        Select Plan
      </Button>
    </Card>
  );
}
