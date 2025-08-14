# BillingCard Component – Test Assignment

## Overview
A reusable `<BillingCard>` component built with React and Material-UI (MUI) using a custom theme. Fully responsive, accessible, and styled with the `sx` prop.

## Features
- Shows plan name, price, features, and a "Select Plan" button
- Custom theme (colors & typography)
- Responsive design (360px to 1440px)
- Accessible: keyboard navigation + ARIA labels

## Approach & Trade-offs
Used MUI’s `sx` prop for co-located styling. Theme split into `palette` and `typography` for maintainability. Focused on minimal external dependencies while meeting responsiveness & a11y needs.

## AI Usage
AI assisted in:
- Suggesting folder structure
- Generating initial theme file boilerplate
- Providing ARIA examples

All code was reviewed and tested manually.

## Run Instructions
```bash
npm install
npm run dev
