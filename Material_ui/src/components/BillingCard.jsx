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
  Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";

export function BillingCard({
  plan,
  price,
  period = "/month",
  description,
  features,
  onSelect,
  popular = false,
  recommended = false,
  sx,
}) {
  const isPremium = popular || recommended;
  
  return (
    <Card
      variant="outlined"
      sx={{
        position: "relative",
        maxWidth: 380,
        m: "auto",
        p: 0,
        borderRadius: "24px",
        background: isPremium 
          ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
        border: isPremium 
          ? "2px solid transparent"
          : "2px solid #e1e8f0",
        boxShadow: isPremium
          ? "0 16px 40px rgba(102, 126, 234, 0.24), 0 8px 16px rgba(0, 0, 0, 0.08)"
          : "0 8px 32px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.04)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        transform: isPremium ? "scale(1.02)" : "scale(1)",
        "&:hover": {
          transform: isPremium ? "translateY(-8px) scale(1.02)" : "translateY(-8px) scale(1.01)",
          boxShadow: isPremium
            ? "0 24px 60px rgba(102, 126, 234, 0.32), 0 12px 24px rgba(0, 0, 0, 0.12)"
            : "0 16px 48px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08)",
        },
        "&:focus-within": {
          outline: `3px solid ${isPremium ? "#667eea" : "#2196f3"}`,
          outlineOffset: "4px",
        },
        ...sx,
      }}
      tabIndex={0}
      role="region"
      aria-label={`Billing plan: ${plan}`}
    >
      {/* Popular/Recommended Badge */}
      {isPremium && (
        <Box
          sx={{
            position: "absolute",
            top: -2,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <Chip
            icon={<StarIcon sx={{ color: "#fff !important", fontSize: "18px" }} />}
            label={popular ? "Most Popular" : "Recommended"}
            sx={{
              background: "linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "0.8rem",
              px: 2,
              py: 1,
              borderRadius: "20px",
              boxShadow: "0 6px 20px rgba(255, 107, 107, 0.4)",
              border: "2px solid #fff",
              "& .MuiChip-label": {
                px: 1,
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              },
            }}
          />
        </Box>
      )}

      {/* Content Container */}
      <Box
        sx={{
          background: isPremium ? "#fff" : "transparent",
          borderRadius: isPremium ? "20px 20px 0 0" : "24px 24px 0 0",
          p: 3,
          pt: isPremium ? 4 : 3,
          flexGrow: 1,
        }}
      >
        <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: "800", 
                color: isPremium ? "#667eea" : "#1a202c",
                mb: 1,
                fontSize: "1.5rem",
                letterSpacing: "-0.5px",
              }}
            >
              {plan}
            </Typography>
            {description && (
              <Typography
                variant="body2"
                sx={{ 
                  color: isPremium ? "#64748b" : "#64748b", 
                  mb: 2, 
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {description}
              </Typography>
            )}
          </Box>

          <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center", mb: 3 }}>
            <Typography
              variant="h2"
              sx={{ 
                fontWeight: "900", 
                color: isPremium ? "#1a202c" : "#1a202c",
                fontSize: "3rem",
                lineHeight: 1,
                letterSpacing: "-2px",
              }}
            >
              {price}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: "#64748b", 
                fontSize: "1rem",
                fontWeight: 600,
                ml: 0.5,
              }}
            >
              {period}
            </Typography>
          </Box>

          <Divider 
            sx={{ 
              mb: 3, 
              background: isPremium 
                ? "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
                : "linear-gradient(90deg, #e1e8f0 0%, #cbd5e0 100%)",
              height: "2px",
              border: "none",
            }} 
          />

          <List sx={{ p: 0 }}>
            {features.map((feature, index) => (
              <ListItem 
                key={index} 
                disablePadding 
                sx={{ 
                  mb: 1.5,
                  alignItems: "flex-start",
                }}
              >
                <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                  <CheckCircleIcon 
                    sx={{ 
                      color: isPremium ? "#667eea" : "#10b981",
                      fontSize: "20px",
                    }} 
                    aria-hidden="true" 
                  />
                </ListItemIcon>
                <ListItemText
                  primary={feature}
                  primaryTypographyProps={{
                    sx: { 
                      color: "#374151", 
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      lineHeight: 1.5,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          p: 3,
          pt: 0,
          background: isPremium ? "#fff" : "transparent",
          borderRadius: isPremium ? "0 0 20px 20px" : "0 0 24px 24px",
        }}
      >
        <Button
          variant="contained"
          onClick={onSelect}
          fullWidth
          sx={{
            py: 1.8,
            borderRadius: "16px",
            background: isPremium
              ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              : "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
            letterSpacing: "0.5px",
            boxShadow: isPremium
              ? "0 8px 24px rgba(102, 126, 234, 0.4)"
              : "0 8px 24px rgba(79, 70, 229, 0.4)",
            border: "none",
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              background: isPremium
                ? "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)"
                : "linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)",
              boxShadow: isPremium
                ? "0 12px 32px rgba(102, 126, 234, 0.5)"
                : "0 12px 32px rgba(79, 70, 229, 0.5)",
              transform: "translateY(-2px)",
            },
            "&:active": {
              transform: "translateY(0px)",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              transition: "left 0.6s",
            },
            "&:hover::before": {
              left: "100%",
            },
          }}
          aria-label={`Select ${plan} plan`}
        >
          {isPremium ? "Get Started" : "Choose Plan"}
        </Button>
      </Box>
    </Card>
  );
}
