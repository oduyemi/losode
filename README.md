# Losode Frontend Engineering Assessment

A modern, responsive e-commerce web application built for the Losode Frontend Engineering assessment. This project demonstrates the implementation of a scalable product discovery and checkout experience using Next.js, TypeScript, Ant Design, Redux Toolkit, and React Query.

## Live Demo

**Application URL:** https://losode-seven.vercel.app/

## Repository

**GitHub Repository:** https://github.com/oduyemi/losode

---

## Overview

This application delivers a complete e-commerce shopping experience, from product discovery to checkout and payment. Beyond the core requirements, it includes additional features designed to improve usability, scalability, and overall user experience.

Users can:

- Browse and explore products
- Search and filter products by category
- View detailed product information
- Add products to cart and wishlist
- Manage cart quantities
- Complete checkout with customer information
- Make payments via Paystack (test mode)
- Receive order confirmation after successful payment

---

## Features

### Core Features

- Product listing page with responsive grid layout
- Product detail pages with comprehensive product information
- Search functionality for quick product discovery
- Category-based filtering
- Product sorting
- Shopping cart management
- Persistent cart and wishlist state across sessions
- Checkout flow with form validation
- Secure payment integration using Paystack (test environment)
- Order success confirmation page

### Additional Features Implemented

- Wishlist functionality with persistent storage
- Dedicated cart page (`/cart`)
- Dedicated wishlist page (`/wishlist`)
- Dynamic category listing page (`/product/category`)
- Individual category browsing experience
- Responsive header with navigation
- Simple, clean footer
- Empty state handling for cart and wishlist
- Loading and error states for API interactions
- Mobile-first responsive design

---

## Tech Stack

### Frontend Framework

- Next.js 16 (App Router)
- React 19
- TypeScript

### State Management

- Redux Toolkit
- React Redux

### Server State Management

- TanStack React Query

### UI and Styling

- Ant Design
- Tailwind CSS v4
- Framer Motion
- Lucide React

### Payment Integration

- Paystack (Test Mode)

### Deployment

- Vercel

---

## Architecture and Design Decisions

### Why Next.js?

Next.js provides:

- Server-side rendering capabilities
- Excellent routing via the App Router
- Performance optimizations out of the box
- Improved SEO
- Seamless deployment with Vercel

### Why Redux Toolkit?

Redux Toolkit was used for managing persistent client-side state such as:

- Shopping cart
- Wishlist
- Global UI state

Its predictable state management and excellent developer experience make it ideal for e-commerce applications.

### Why React Query?

React Query handles:

- API data fetching
- Caching
- Background refetching
- Loading and error states

This creates a clear separation between server state and client state.

### Why Ant Design?

Ant Design was selected for:

- Robust component library
- Excellent form components and validation
- Consistent design system
- Faster development velocity
- High-quality user experience

---

## Project Structure

```bash
src/
├── app/
│   ├── cart/
│   ├── checkout/
│   ├── product/
│   │   ├── [slug]/
│   │   └── category/
│   ├── order-success/
│   ├── wishlist/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── product/
│   ├── cart/
│   ├── checkout/
│   └── ui/
├── features/
│   ├── cart/
│   ├── products/
│   └── wishlist/
├── lib/
│   ├── providers.tsx
│   ├── query-client.ts
│   └── utils.ts
├── store/
│   └── index.ts
└── types/
