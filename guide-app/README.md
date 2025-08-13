# The Gatherers' Guide

A minimal proof-of-concept for "The Gatherers' Guide: Recipes for Connection" built with React, TypeScript and Vite.

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS for styling
- React Router for routing
- Zustand for global state stored in `localStorage`
- React Hook Form + Zod for form handling

## Commands
```bash
pnpm install      # install dependencies
pnpm run dev      # start development server
pnpm run build    # build for production
```

## Extending themes or formats
Themes and formats are plain strings used within the form and recipe model. To add new ones, update the lists in the form components or create constants that can be extended.

This demo seeds sample recipes ("New York Is Creative: A Love Letter" and "Speed Creating") on first run. Use the Submit page to add your own recipes.
