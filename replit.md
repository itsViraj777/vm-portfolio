# Portfolio Website

## Overview

This is a modern React-based portfolio website built with TypeScript, featuring a full-stack architecture with Express.js backend and PostgreSQL database. The project uses Vite for frontend build tooling, ShadCN/UI components for the user interface, and Drizzle ORM for database operations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: ShadCN/UI component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React hooks for local state, TanStack Query for server state
- **Routing**: Client-side routing (structure suggests SPA approach)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL-backed sessions (connect-pg-simple)
- **Development**: Hot reload with tsx for development server

### Data Storage
- **Primary Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Drizzle-kit for database schema management
- **In-Memory Fallback**: MemStorage class for development/testing

## Key Components

### Database Schema
- User management system with `users` table
- Schema validation using Zod with drizzle-zod integration
- Type-safe database operations with TypeScript inference

### UI Components
- Comprehensive ShadCN/UI component library
- Dark mode support with CSS custom properties
- Responsive design with mobile-first approach
- Accessible components using Radix UI primitives

### Portfolio Features
- Personal portfolio showcase for "Viraj Mhaske"
- Tab-based navigation (home, about, projects, experience, contact)
- Resume download functionality
- Mobile-responsive design

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **Authentication**: Session-based authentication using PostgreSQL sessions
3. **Database Operations**: Drizzle ORM handles database queries and mutations
4. **State Management**: TanStack Query manages server state with caching
5. **UI Updates**: React components re-render based on state changes

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: Uses DATABASE_URL environment variable

### UI Framework
- **Radix UI**: Headless UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **ESBuild**: Production bundling for server code
- **TypeScript**: Type safety across the entire stack

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with hot reload
- **Database**: Push schema changes with `npm run db:push`

### Production
- **Build Process**: 
  - Frontend: Vite build to `dist/public`
  - Backend: ESBuild bundle to `dist/index.js`
- **Deployment**: Single deployment with static files served by Express
- **Environment**: Configured for Node.js production environment

### Scripts
- `npm run dev`: Development server
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run check`: TypeScript type checking
- `npm run db:push`: Database schema migration

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```