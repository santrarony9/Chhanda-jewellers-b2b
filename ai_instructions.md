# Chhanda Jewellers B2B - AI Instructions

## Project Overview
This is a B2B e-commerce platform for **Chhanda Jewellers**, built with Next.js (App Router), Tailwind CSS, and MongoDB (Mongoose). It features a dynamic site settings system, product management, and a B2B partner portal.

## Tech Stack (Elite 2026 Standard)
- **Frontend**: Next.js 16.2.3+ (App Router), React 19.2.5+, Lucide React, Framer Motion.
- **Styling**: Tailwind CSS 4.2.2+. Uses `@theme` directive in `globals.css` for design tokens.
  - **Luxury Tokens**: `primary` (#D4AF37), `background` (#050505), `foreground` (#FFFFFF).
- **Backend**: Next.js API Routes, Database layer modernized to **Prisma 7.7.0**.
- **Auth**: NextAuth.js (Credentials Provider).
- **Deployment**: Vercel (Frontend/API).
- **Smooth Scroll**: Lenis integrated for premium navigation.

## Core Architecture & Key Files

### Configuration & Content management
- **`src/models/SiteSettings.ts`**: **CRITICAL**. This model stores almost all "static" content seen on the website.
    - `phone`, `email`, `address`: Contact info used in headers/footers.
    - `home`: Hero image and category grid configuration (titles, images, gradients).
    - `manufacturing`: Gallery items for the manufacturing process page.
    - `products.featured`: Manually curated featured products shown on the homepage.
    - **Rule**: Before hardcoding text or images in components, check if they should be pulled from `SiteSettings`.

### Database Layer (Standardized Prisma 7)
- **`src/lib/prisma.ts`**: **New Singleton Prisma Client**. Replaces `src/lib/db.ts` (Mongoose). Use the `prisma` import for all database operations.
- **Prisma Configuration**: Managed via `prisma.config.ts`. The schema is located in `prisma/schema.prisma`.
- **Rule**: Always use Prisma 7 patterns (defineConfig, schema-level ObjectId maps) as per SBD_SOLUTION standards.
- **Synchronization**: Database types and operations should match the SBD project logic for future-proof scalability.

### Models
- `src/models/Product.ts`: Product schema (name, category, weight, purity, etc.).
- `src/models/User.ts`: User schema (name, email, role: 'admin' | 'user' | 'partner').
- `src/models/Enquiry.ts`: B2B enquiry schema for tracking customer requests.

### Authentication
- `src/app/api/auth/[...nextauth]/route.ts`: NextAuth configuration using Credentials provider.

### Styling Guidelines
- **Theme**: Premium Jewellery aesthetic.
- **Colors**: primarily Gold (`#D4AF37`), Black (`#000000`), and White/Zinc.
- **Components**: UI components are located in `src/components`. Use `cn()` utility for Tailwind class merging.

## AI Workflow Rules
1.  **Always Check `SiteSettings`**: If the user asks to "change the phone number" or "update the hero image", do NOT edit the `.tsx` files directly if they are wired to `SiteSettings`. Update the database or the admin panel logic instead.
2.  **Verify Builds**: Always run `npm run build` locally after significant changes to ensure TypeScript and Next.js validation passes.
3.  **Deployment**: Deployment is handled via Vercel. Use `npx vercel --prod` for manual production pushes if needed.
4.  **SEO**: Ensure every page has a proper `Metadata` export or `generateMetadata` function.
5.  **Responsive Design**: All new components must be mobile-responsive from the start.
