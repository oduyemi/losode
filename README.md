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
````

---

## Application Flow

1. Browse products on the homepage
2. Search or filter by category
3. View product details
4. Add items to cart or wishlist
5. Review cart contents
6. Proceed to checkout
7. Enter customer details:

   * Full name
   * Email address
   * Phone number (+234 format)
   * Delivery address
8. Complete payment via Paystack
9. Receive order success confirmation

---

## State Persistence

The following states persist across browser sessions:

* Shopping cart contents
* Wishlist items

This ensures users can continue where they left off.

---

## Payment Testing

This project uses Paystack in test mode.

Use the following test card details:

* **Card Number:** 4084 0840 8408 4081
* **Expiry Date:** Any future date
* **CVV:** Any 3 digits
* **OTP:** 123456

---

## Installation and Setup

### Prerequisites

* Node.js 18+
* Yarn (recommended)

### Clone the Repository

```bash
git clone https://github.com/oduyemi/losode.git
cd losode
```

### Install Dependencies

```bash
yarn install
```

### Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key
```

### Start Development Server

```bash
yarn dev
```

Open `http://localhost:3000` in your browser.

---

## Available Scripts

```bash
yarn dev      # Start development server
yarn build    # Build for production
yarn start    # Start production server
yarn lint     # Run ESLint
```

---

## Performance Optimizations

* Clear separation of server and client state
* Efficient API caching with React Query
* Persistent Redux state
* Optimized image rendering with Next.js
* Reusable component architecture
* Route-based code splitting and lazy loading

---

## Accessibility Considerations

* Semantic HTML structure
* Keyboard-accessible navigation
* Clear form validation feedback
* Responsive layouts across devices
* Adequate color contrast and readable typography

---

## Future Improvements

* User authentication and account management
* Order history
* Product reviews and ratings
* Advanced filtering and sorting
* Multiple payment gateways
* Inventory management integration
* Admin dashboard
* Internationalization
* Enhanced analytics

---

## Key Highlights

* Clean and scalable architecture
* Excellent user experience
* Persistent cart and wishlist
* Robust checkout flow
* Secure payment integration
* Fully responsive across devices
* Production-ready code structure

---

## Challenges Addressed

* Effective separation of server and client state
* Persistent state management across sessions
* Smooth checkout and payment experience
* Scalable component architecture
* Responsive design implementation

---

## Author

**Opeyemi Oduyemi**
Fullstack Engineer

* GitHub: [https://github.com/oduyemi](https://github.com/oduyemi)
* LinkedIn: [https://www.linkedin.com/in/opeyemi-oduyemi-bba776124/](https://www.linkedin.com/in/opeyemi-oduyemi-bba776124/)

---

## License

This project was developed as part of the Losode Frontend Engineering assessment.

---

## Acknowledgements

Special thanks to the Losode team for the opportunity to work on this assessment.

This project reflects best practices in modern frontend development, including scalability, maintainability, performance, and user experience.

```
