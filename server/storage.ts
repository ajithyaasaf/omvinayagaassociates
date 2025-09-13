import { 
  type Product, 
  type Service, 
  type Testimonial,
  type FAQ,
  type Contact,
  type Inquiry,
  type Intent
} from "@shared/firebase-schema";

// User types for admin authentication (Firebase-only)
interface User {
  id: number;
  username: string;
  password: string;
}

interface InsertUser {
  username: string;
  password: string;
}

import { firebaseStorage, sessionStore } from './firebase';

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product methods
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: Omit<Product, 'id'>): Promise<Product>;
  updateProduct(id: number, product: Partial<Product>): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<boolean>;
  
  // Service methods
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: Omit<Service, 'id'>): Promise<Service>;
  updateService(id: number, service: Partial<Service>): Promise<Service | undefined>;
  deleteService(id: number): Promise<boolean>;
  
  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: Omit<Testimonial, 'id'>): Promise<Testimonial>;
  updateTestimonial(id: number, testimonial: Partial<Testimonial>): Promise<Testimonial | undefined>;
  deleteTestimonial(id: number): Promise<boolean>;
  
  // FAQ methods
  getFaqs(): Promise<FAQ[]>;
  getFaq(id: number): Promise<FAQ | undefined>;
  createFaq(faq: Omit<FAQ, 'id'>): Promise<FAQ>;
  updateFaq(id: number, faq: Partial<FAQ>): Promise<FAQ | undefined>;
  deleteFaq(id: number): Promise<boolean>;
  
  // Contact methods
  getContacts(): Promise<Contact[]>;
  createContact(contact: Omit<Contact, 'id' | 'createdAt'>): Promise<Contact>;
  deleteContact(id: number): Promise<boolean>;
  
  // Inquiry methods
  getInquiries(): Promise<Inquiry[]>;
  createInquiry(inquiry: Omit<Inquiry, 'id' | 'createdAt'>): Promise<Inquiry>;
  deleteInquiry(id: number): Promise<boolean>;
  
  // Intent form methods
  getIntents(): Promise<Intent[]>;
  createIntent(intent: Omit<Intent, 'id' | 'createdAt'>): Promise<Intent>;
  deleteIntent(id: number): Promise<boolean>;
  
  // Visitor tracking methods
  getVisitorStats(): Promise<{ totalVisits: number }>;
  incrementVisitorCount(): Promise<{ totalVisits: number }>;
  
  // Session store for authentication
  sessionStore: any;
}

// Export the Firebase storage implementation
export const storage: IStorage = {
  // User methods
  getUser: (id) => firebaseStorage.getUser(id),
  getUserByUsername: (username) => firebaseStorage.getUserByUsername(username),
  createUser: (user) => firebaseStorage.createUser(user),
  
  // Product methods
  getProducts: () => firebaseStorage.getProducts(),
  getProduct: (id) => firebaseStorage.getProduct(id),
  createProduct: (product) => firebaseStorage.createProduct(product),
  updateProduct: (id, product) => firebaseStorage.updateProduct(id, product),
  deleteProduct: (id) => firebaseStorage.deleteProduct(id),
  
  // Service methods
  getServices: () => firebaseStorage.getServices(),
  getService: (id) => firebaseStorage.getService(id),
  createService: (service) => firebaseStorage.createService(service),
  updateService: (id, service) => firebaseStorage.updateService(id, service),
  deleteService: (id) => firebaseStorage.deleteService(id),
  
  // Testimonial methods
  getTestimonials: () => firebaseStorage.getTestimonials(),
  getTestimonial: (id) => firebaseStorage.getTestimonial(id),
  createTestimonial: (testimonial) => firebaseStorage.createTestimonial(testimonial),
  updateTestimonial: (id, testimonial) => firebaseStorage.updateTestimonial(id, testimonial),
  deleteTestimonial: (id) => firebaseStorage.deleteTestimonial(id),
  
  // FAQ methods
  getFaqs: () => firebaseStorage.getFaqs(),
  getFaq: (id) => firebaseStorage.getFaq(id),
  createFaq: (faq) => firebaseStorage.createFaq(faq),
  updateFaq: (id, faq) => firebaseStorage.updateFaq(id, faq),
  deleteFaq: (id) => firebaseStorage.deleteFaq(id),
  
  // Contact methods
  getContacts: () => firebaseStorage.getContacts(),
  createContact: (contact) => firebaseStorage.createContact(contact),
  deleteContact: (id) => firebaseStorage.deleteContact(id),
  
  // Inquiry methods
  getInquiries: () => firebaseStorage.getInquiries(),
  createInquiry: (inquiry) => firebaseStorage.createInquiry(inquiry),
  deleteInquiry: (id) => firebaseStorage.deleteInquiry(id),
  
  // Intent form methods
  getIntents: () => firebaseStorage.getIntents(),
  createIntent: (intent) => firebaseStorage.createIntent(intent),
  deleteIntent: (id) => firebaseStorage.deleteIntent(id),
  
  // Visitor tracking methods
  getVisitorStats: () => firebaseStorage.getVisitorStats(),
  incrementVisitorCount: () => firebaseStorage.incrementVisitorCount(),
  
  // Session store
  sessionStore: sessionStore
};
