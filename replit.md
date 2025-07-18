# Building Doctor Website

## Overview

This is a professional digital platform for OM Vinayaga Associates, a Building Doctor franchise that provides comprehensive construction repair services. The application is built as a modern full-stack web application with React frontend and Node.js backend, specifically designed for easy deployment on Vercel with Firebase as the database solution.

## System Architecture

The project follows a full-stack architecture with the following key components:

### Frontend Architecture
- **Framework**: React with Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui components for consistent design
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth page transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: Firebase Realtime Database for data persistence
- **Session Management**: Express sessions with in-memory store
- **API Design**: RESTful API endpoints with proper error handling
- **Type Safety**: TypeScript with Zod for runtime validation

### Build System
- **Build Tool**: Vite for frontend bundling with optimized production builds
- **Backend Build**: esbuild for fast TypeScript compilation
- **Development**: Hot module replacement (HMR) for fast development cycles

## Key Components

### Database Schema (Drizzle with PostgreSQL fallback)
The application uses Drizzle ORM with PostgreSQL as a fallback option, though the primary implementation uses Firebase:
- **Users**: Authentication and user management
- **Products**: Building repair products catalog
- **Services**: Service offerings and descriptions
- **Contacts**: Contact form submissions
- **Inquiries**: Customer inquiries and support requests
- **Testimonials**: Customer feedback and reviews
- **FAQs**: Frequently asked questions

### Core Features
1. **Public Website**: Home, services, products, about, and contact pages
2. **Admin Dashboard**: Content management system for products, services, testimonials, and FAQs
3. **Contact System**: Multiple contact forms with validation
4. **Product Catalog**: Searchable and filterable product listings
5. **Service Pages**: Detailed service descriptions with features
6. **Responsive Design**: Mobile-first responsive design approach

### API Endpoints
- `/api/products` - Product CRUD operations
- `/api/services` - Service management
- `/api/contacts` - Contact form submissions
- `/api/inquiries` - Customer inquiry handling
- `/api/testimonials` - Customer testimonial management
- `/api/faqs` - FAQ management

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express routes handle requests with validation using Zod schemas
3. **Database Operations**: Firebase Realtime Database stores and retrieves data
4. **Response Handling**: Structured JSON responses with proper error handling
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Firebase Integration
- **Firebase Realtime Database**: Primary data storage
- **Firebase Configuration**: Environment variable based configuration
- **Authentication**: Prepared for Firebase Auth integration

### Third-Party Services
- **Vercel**: Primary deployment platform
- **CDN**: Images hosted on external CDN services
- **WhatsApp Integration**: Direct messaging for customer support
- **Social Media**: Links to Facebook, Instagram, Twitter, YouTube

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Framer Motion**: Animation library

## Deployment Strategy

### Vercel Deployment
The application is optimized for Vercel deployment with:
- **One-Click Deploy**: Deploy button in README for easy setup
- **Environment Variables**: Firebase credentials configured via Vercel dashboard
- **Build Configuration**: Custom build scripts for both frontend and backend
- **Routing**: Vercel serverless functions for API routes

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild compiles TypeScript server to `dist`
3. **Static Files**: Assets optimized and served from CDN
4. **API Routes**: Serverless functions handle backend requests

### Environment Configuration
Required environment variables:
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_DATABASE_URL`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `FIREBASE_MEASUREMENT_ID`

## Changelog

- July 18, 2025. Updated BD INSTANT STOP with complete specifications: package size (1kg-₹165), coverage (depends on hole size), 1 feature, 3 application areas, full description, and video integration (f1dBlcX35Rs)
- July 18, 2025. Updated BD WALL SHIELD with complete specifications: package sizes (5kg-₹2600, 20kg-₹9800), coverage (30-40 sq.ft/kg/coat), 4 features, 5 application areas, full description, and video integration (2gRqJT3j8k0)
- July 18, 2025. Updated BD GARDEN GUARD with complete specifications: package sizes (5kg-₹3350, 25kg-₹11850), coverage (25-30 sq.ft/kg), 3 features, 4 application areas, full description, and video integration (zbvdpKuYZNw)
- July 18, 2025. Updated BD AQUASEAL MAGIC PU with complete specifications: package size (5kg-no pricing), coverage (depends on porosity), 3 features, 5 application areas, full description, and video integration (HSbx5o8hw0Y)
- July 18, 2025. Updated BD PROTECTCOAT CT600 with complete specifications: package size (10kg-no pricing), coverage (17-20 sq.ft/kg), 7 features, 4 application areas, full description, and video integration (AqL7gDpKQ4M)
- July 18, 2025. Updated BD PROTECTCOAT BW500 with complete specifications: package sizes (5kg, 25kg-no pricing), coverage (30-40 sq.ft/kg), 8 features, 4 application areas, full description, and video integration (hikDmkwAvIs)
- July 18, 2025. Updated BD CRACKSTOP with complete specifications: package size (1kg-₹108), coverage (40-45 rft/kg), 5 features, 2 application areas, full description, and video integration (uzufJvK2vlc)
- July 18, 2025. Updated BD CRACKSTOP X with complete specifications: package sizes (1kg-₹350, 5kg-₹1400, 25kg-₹7000), coverage (15 Rft/kg), 4 features, 1 application area, full description, and video integration (uzufJvK2vlc)
- July 18, 2025. Updated BD CRACKSTOP XP with complete specifications: package size (1kg-₹460), coverage (25-30 Rft/kg), 5 features, 1 application area, full description, and video integration (mRxpBTmPuTo)
- July 18, 2025. Updated BD CRACKSTOP MESH with complete specifications: package sizes (4 inch-₹480, 6 inch-₹610), coverage (3 Rft/Mtr), 6 features, 4 application areas, full description, and video integration (nuSznkwfOgU)
- July 18, 2025. Updated BD CRACKSTOP FIBRE with complete specifications: package sizes (6mm-₹110, 12mm-₹110), coverage (125gms per bag), 1 feature, 3 application areas, full description, and video integration (NpcpUP8KHi8)
- July 18, 2025. Updated BD CORROSHIELD RCR with complete specifications: package sizes (300ml-₹250, 500ml-₹400), coverage (30-35 rft/500ml), 2 features, 4 application areas, full description, and video integration (YMxCTdh1XTI)
- July 18, 2025. Updated BD CORROSHIELD ZR with complete specifications: package size (1kg-₹1294), coverage (40-60 rft/kg), 3 features, 4 application areas, full description, and video integration (RBv56A8DoBQ)
- July 18, 2025. Updated BD CORROSHIELD CR with complete specifications: package sizes (1L-₹230, 5L-₹878, 20L-₹3400), coverage (200-250ml), 5 features, 4 application areas, full description, and video integration (iGJVecSNoaw)
- July 18, 2025. Updated BD PLASTER POWER with complete specifications: package sizes (1L-₹215, 5L-₹868, 20L-₹3010), coverage (200-250ml per bag), 6 features, application areas, full description, and video integration (UPmnCIr80Rs)
- July 18, 2025. Updated BD CONCRETE POWER with complete specifications: package sizes (1L-₹207, 5L-₹838, 20L-₹2970), coverage (200-250ml per bag), 6 features, application areas, full description, and video integration (5V457Zj8-C4)
- July 18, 2025. Updated Aqua seal P with complete specifications: package size (1kg-₹1320), coverage (50-60 sqft/kg), 2 features, 3 application areas, full description, and video integration (82ytb0VrCSY)
- July 18, 2025. Updated BD DAMPSTOP XW with complete specifications: package sizes (1L-₹680, 5L-₹3100), coverage (depends on penetration), 6 features, 2 application areas, full description, and video integration (rUNM-IWmhxA)
- July 18, 2025. Updated BD TILEJOINT SEALER with complete specifications from buildingdoctor.com: package size (1kg - ₹103), coverage (50-60 sqft/kg), 5 features, 8 application areas, full description, and video integration (l18RWmJOmHA)
- July 18, 2025. Updated BD TILEJOINT SEALER PLUS with complete specifications from buildingdoctor.com: package size (1kg - ₹1386), coverage (30-35 sqft/kg), 5 features, 5 application areas, full description, and video integration (rW_r-vXpGoI) 
- July 18, 2025. Created reusable VideoModal component for all product videos with centralized video configuration
- July 18, 2025. Added video modal functionality to BD Tile Clean Master product (was missing before)
- July 18, 2025. Fixed video modal responsiveness issues for mobile devices
- July 18, 2025. Created productVideos.js config file for easy video management across products
- July 18, 2025. Updated BD Tile Clean Master product with complete details matching Building Doctor website exactly
- July 18, 2025. Added package sizes (500ml - ₹205, 1L - ₹397), coverage area, features, and application areas for BD Tile Clean Master
- July 18, 2025. Updated BD Paint Remover 500 product with complete details from original Building Doctor website
- July 18, 2025. Enhanced product detail page with package sizes, coverage area, features, and application areas
- July 18, 2025. Added interactive tabs functionality for product specifications and application guides
- July 18, 2025. Completed migration from Replit Agent to Replit environment successfully
- July 17, 2025. Updated complete product catalog with 39 products matching official Building Doctor website exactly
- July 17, 2025. Fixed all product names to include proper "BD" prefix: BD Crackstop series, BD Instant Stop, BD Concrete Bond, BD Sealtape SA, BD Termoshield Coat, BD Tilejoint products
- July 17, 2025. Added missing product: BD Leakshield Terracotta to complete the Leakshield series
- July 09, 2025. Completed migration from Replit Agent to Replit environment
- July 09, 2025. Updated footer styling for Godiva Tech link (removed box design and icons)
- July 08, 2025. Successfully migrated from Replit Agent to Replit environment
- July 08, 2025. Added robust visitor counter to footer following Google engineering principles
- July 08, 2025. Successfully implemented dynamic visitor counter with authentic Firestore storage
- July 05, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.