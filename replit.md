# Building Doctor Website

## Overview
This project is a professional digital platform for OM Vinayaga Associates, a Building Doctor franchise specializing in construction repair services. The platform aims to be a modern full-stack web application, providing comprehensive information on services and products, facilitating customer inquiries, and managing content effectively. The vision is to establish a strong online presence for the franchise, showcasing its expertise and offerings to a broad audience.

## User Preferences
Preferred communication style: Simple, everyday language.

## Recent Changes
- August 5, 2025: Fixed DOM nesting warning in ProductDetailPage breadcrumb navigation by removing nested anchor tags inside Link components - resolved React DOM validation errors
- August 5, 2025: Fixed Achievements page tab duplicate icons by removing emoji spans and keeping only Lucide React icons for clean professional appearance
- August 5, 2025: Updated Products page header to display "Products" instead of product count for cleaner UI
- August 5, 2025: Successfully completed migration from Replit Agent to Replit environment with full compatibility, all dependencies working, development server running on port 5000

## System Architecture

### UI/UX Decisions
- **Design System**: Utilizes Tailwind CSS with shadcn/ui for a consistent, modern, and responsive design.
- **Animations**: Framer Motion is used for smooth page transitions and interactive elements, enhancing user experience.
- **Responsive Design**: Mobile-first approach ensuring optimal viewing and interaction across all device sizes.
- **Branding**: Consistent typography and color schemes (primary/yellow accent) are applied across all pages for brand consistency. Custom loading spinners feature the company logo for a branded experience.

### Technical Implementations
- **Frontend**: Developed with React and Vite for fast development and optimized production builds. Wouter handles client-side routing, and TanStack Query manages server state.
- **Backend**: Built on Node.js with Express.js for RESTful API endpoints. TypeScript with Zod ensures type safety and runtime validation.
- **Database**: Primarily uses Firebase Realtime Database for data persistence, with Drizzle ORM configured for potential PostgreSQL fallback.
- **Build System**: Vite for frontend bundling and esbuild for fast backend TypeScript compilation.

### Feature Specifications
- **Public Website**: Includes essential pages like Home, Services, Products, About, and Contact.
- **Admin Dashboard**: A content management system for managing products, services, testimonials, and FAQs.
- **Contact System**: Multiple contact forms with robust validation.
- **Product Catalog**: A searchable and filterable listing of building repair products with detailed specifications and video integrations.
- **Service Pages**: Comprehensive descriptions of service offerings.
- **Testimonials**: Displays customer feedback, including video testimonials with modal functionality.
- **Achievements Page**: Showcases major awards, certifications, and community impact with organized, visual layouts.
- **Visitor Counter**: Dynamic visitor counter integrated with Firestore.

### System Design Choices
- **Full-stack Architecture**: Clear separation of concerns between React frontend and Node.js backend.
- **Data Flow**: Client-side API calls handled by React components and TanStack Query, processed by Express.js routes with Zod validation, and data persisted/retrieved from Firebase.
- **Deployment**: Optimized for Vercel deployment with environment variable configuration and custom build scripts.

## External Dependencies

- **Firebase**:
    - Firebase Realtime Database (primary data storage)
    - Firebase Authentication (prepared for integration)
- **Vercel**: Primary deployment platform.
- **CDN**: Used for hosting images and other static assets.
- **Communication & Social Media**:
    - WhatsApp integration for direct customer support.
    - Links to Facebook, Instagram, Twitter, and YouTube.
- **UI Libraries**:
    - Radix UI (accessible component primitives)
    - Tailwind CSS (utility-first CSS framework)
    - Lucide React (icon library)
    - Framer Motion (animation library)