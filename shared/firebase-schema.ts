import { z } from "zod";

// Contact form schema for Firebase
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be valid"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  consent: z.boolean().refine(val => val === true, "You must agree to the terms")
});

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
  createdAt: string;
}

export type ContactForm = z.infer<typeof contactSchema>;

// Inquiry form schema for Firebase
export const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").optional().or(z.string().length(0)),
  phone: z.string().min(5, "Phone number is required").regex(/^[0-9+\s()-]+$/, "Invalid phone number format"),
  issueType: z.string().optional().or(z.string()),
  message: z.string().optional().or(z.string().length(0)),
  address: z.string().optional().or(z.string().length(0))
});

export interface Inquiry {
  id: number;
  name: string;
  email?: string;
  phone: string;
  issueType?: string;
  message?: string;
  address?: string;
  createdAt: string;
}

export type InquiryForm = z.infer<typeof inquirySchema>;

// Intent form schema for Firebase (includes chatbot appointments)
export const intentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(5, "Phone number is required"),
  service: z.string().optional(),
  message: z.string().optional(),
  location: z.string().optional(),
  issueType: z.string().optional(),
  timePreference: z.string().optional(),
  consent: z.boolean()
});

export interface Intent {
  id: number;
  name: string;
  phone: string;
  service?: string;
  message?: string;
  location?: string;
  issueType?: string;
  timePreference?: string;
  consent: boolean;
  createdAt: string;
}

export type IntentForm = z.infer<typeof intentSchema>;

// Testimonial schema for Firebase
export const testimonialSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required"),
  location: z.string().min(1, "Location is required"),
  content: z.string().min(10, "Review must be at least 10 characters"),
  rating: z.number().min(1).max(5),
  date: z.string().optional(),
  image: z.string().optional(),
  videoUrl: z.string().optional(),
  featured: z.boolean().default(false),
  hasVideo: z.boolean().default(false)
});

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
  date: string;
  image?: string;
  videoUrl?: string;
  featured: boolean;
  hasVideo: boolean;
}

export type TestimonialForm = z.infer<typeof testimonialSchema>;

// Product schema for Firebase
export const productSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(1, "Category is required"),
  price: z.number().optional(),
  image: z.string().optional(),
  features: z.array(z.string()).default([]),
  specifications: z.record(z.string()).default({}),
  applicationAreas: z.array(z.string()).default([]),
  benefits: z.array(z.string()).default([]),
  coverage: z.string().optional(),
  packageSizes: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  rating: z.number().optional(),
  isBestseller: z.boolean().default(false),
  isNew: z.boolean().default(false)
});

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price?: number;
  image?: string;
  features: string[];
  specifications: Record<string, string>;
  applicationAreas: string[];
  benefits: string[];
  coverage?: string;
  packageSizes: string[];
  featured: boolean;
  rating?: number;
  isBestseller: boolean;
  isNew: boolean;
}

export type ProductForm = z.infer<typeof productSchema>;

// FAQ schema for Firebase
export const faqSchema = z.object({
  id: z.number().optional(),
  question: z.string().min(5, "Question must be at least 5 characters"),
  answer: z.string().min(10, "Answer must be at least 10 characters"),
  category: z.string().min(1, "Category is required"),
  order: z.number().default(0),
  featured: z.boolean().default(false)
});

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  order: number;
  featured: boolean;
}

export type FAQForm = z.infer<typeof faqSchema>;

// Service schema for Firebase
export const serviceSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  features: z.array(z.string()).default([]),
  image: z.string().min(1, "Image is required"),
  slug: z.string().min(1, "Slug is required"),
  featured: z.boolean().default(false)
});

export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  slug: string;
  featured: boolean;
}

export type ServiceForm = z.infer<typeof serviceSchema>;