import { 
  users, 
  newsletter, 
  contactRequests, 
  type User, 
  type InsertUser, 
  type Newsletter, 
  type InsertNewsletter,
  type ContactRequest,
  type InsertContactRequest 
} from "@shared/schema";

// Modify the interface with any CRUD methods
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Newsletter subscribers
  subscribeToNewsletter(email: string): Promise<Newsletter>;
  getSubscriberByEmail(email: string): Promise<Newsletter | undefined>;
  getAllSubscribers(): Promise<Newsletter[]>;
  
  // Contact requests
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getAllContactRequests(): Promise<ContactRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscribers: Map<number, Newsletter>;
  private contacts: Map<number, ContactRequest>;
  private userId: number;
  private subscriberId: number;
  private contactId: number;

  constructor() {
    this.users = new Map();
    this.subscribers = new Map();
    this.contacts = new Map();
    this.userId = 1;
    this.subscriberId = 1;
    this.contactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async subscribeToNewsletter(email: string): Promise<Newsletter> {
    const id = this.subscriberId++;
    const subscribed_at = new Date().toISOString();
    const subscriber: Newsletter = { id, email, subscribed_at };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
  
  async getSubscriberByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }
  
  async getAllSubscribers(): Promise<Newsletter[]> {
    return Array.from(this.subscribers.values());
  }
  
  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = this.contactId++;
    const created_at = new Date().toISOString();
    const contactRequest: ContactRequest = { ...insertRequest, id, created_at };
    this.contacts.set(id, contactRequest);
    return contactRequest;
  }
  
  async getAllContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
