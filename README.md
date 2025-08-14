# Material-UI-Component

## Overview
This project implements a reusable `<BillingCard>` React component styled with Material-UI (MUI), featuring a custom theme, responsive design, and accessibility support.

## Features
- Displays plan name, price, features, and a "Select Plan" button.
- Custom MUI theme for colors & typography.
- Responsive: works from 360px (mobile) to 1440px (desktop).
- Accessible: keyboard navigation, ARIA labels, and semantic roles.

## Approach & Trade-offs
I chose `sx` for inline styling to keep styles co-located with components for maintainability. The theme was separated into `palette` and `typography` for reusability. The card is built using MUI's grid system for responsive behavior. I avoided heavy CSS customization to stay within the 1-hour timebox and maximize MUI’s built-in accessibility.

## AI Usage
I used AI to:
- Quickly generate a theme file structure.
- Suggest responsive breakpoints for Grid layout.
- Provide sample ARIA label patterns.

All final code was manually reviewed, refactored, and tested locally.

## How to Run
```bash
npm install
npm run dev
