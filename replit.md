# Overview

This is a full-stack certification verification application for the Brookbush Institute. The application allows users to search for and verify certified trainers by name or certification ID, displaying their credentials and professional information. It provides a clean, professional interface that matches the Brookbush Institute branding and serves as a public verification portal for trainer certifications.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React and TypeScript using Vite as the build tool. The application follows a modern component-based architecture with:

- **UI Framework**: Uses shadcn/ui components built on top of Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with a comprehensive design system including CSS variables for theming
- **State Management**: React Query (@tanstack/react-query) for server state management with custom query functions
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers
- **Type Safety**: Full TypeScript implementation with shared types between client and server

## Backend Architecture
The backend is an Express.js server with TypeScript that provides RESTful API endpoints:

- **Server Framework**: Express.js with custom middleware for request logging and error handling
- **API Design**: RESTful endpoints with proper HTTP status codes and JSON responses
- **Data Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error handling middleware with proper status codes
- **Development Integration**: Custom Vite integration for seamless development experience

## Data Storage Solutions
The application uses a flexible storage architecture:

- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing with seeded sample data
- **Connection**: Neon Database serverless PostgreSQL driver for cloud deployment

## Authentication and Authorization
Currently implements a simple verification system without user authentication:

- **Public Access**: All verification endpoints are publicly accessible
- **No User Accounts**: The system focuses on trainer verification rather than user management
- **Rate Limiting**: Potential for future implementation of rate limiting on search endpoints

## External Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI primitives for accessible component foundation
- **Icons**: Lucide React for consistent iconography
- **Social Icons**: React Icons for brand/social media icons
- **Date Handling**: date-fns for date formatting and manipulation
- **Development Tools**: Replit-specific plugins for development environment integration

The architecture emphasizes type safety, developer experience, and maintainability while providing a clean separation between the verification interface and the underlying trainer database.