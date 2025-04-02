import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSchema, insertContactRequestSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix
  
  // Newsletter subscription endpoint
  app.post("/api/subscribe", async (req: Request, res: Response) => {
    try {
      const data = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getSubscriberByEmail(data.email);
      if (existingSubscriber) {
        return res.status(409).json({ 
          message: "This email is already subscribed to our newsletter."
        });
      }
      
      // Create new subscriber
      const subscriber = await storage.subscribeToNewsletter(data.email);
      
      res.status(201).json({
        success: true,
        message: "Successfully subscribed to the newsletter",
        data: { id: subscriber.id, email: subscriber.email }
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });
  
  // Contact request endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const data = insertContactRequestSchema.parse(req.body);
      
      // Create new contact request
      const contactRequest = await storage.createContactRequest(data);
      
      res.status(201).json({
        success: true,
        message: "Contact request submitted successfully",
        data: { id: contactRequest.id }
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });
  
  // Get all subscribers (for admin purposes, would typically require authentication)
  app.get("/api/subscribers", async (req: Request, res: Response) => {
    try {
      const subscribers = await storage.getAllSubscribers();
      
      res.status(200).json({
        success: true,
        data: subscribers.map(sub => ({ id: sub.id, email: sub.email }))
      });
    } catch (error) {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  });
  
  const httpServer = createServer(app);
  
  return httpServer;
}
