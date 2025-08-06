import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const searchByNameSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

const searchByCertificationIdSchema = z.object({
  certificationId: z.string().min(1, "Certification ID is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Search trainer by name
  app.post("/api/search/name", async (req, res) => {
    try {
      const { name } = searchByNameSchema.parse(req.body);
      
      // Split name into first and last name
      const nameParts = name.trim().split(/\s+/);
      if (nameParts.length < 2) {
        return res.status(400).json({ 
          message: "Please provide both first and last name" 
        });
      }
      
      let firstName, lastName;
      
      if (nameParts.length === 2) {
        // Standard "First Last" format
        firstName = nameParts[0];
        lastName = nameParts[1];
      } else {
        // Handle "First Middle Last" - try different combinations
        firstName = nameParts[0];
        lastName = nameParts[nameParts.length - 1];
        
        // For names like "Kennard Isaiah Love", also try searching with just first/last
        // The enhanced search function will handle the middle name matching
      }
      
      const trainer = await storage.getTrainerByName(firstName, lastName);
      
      if (!trainer) {
        return res.status(404).json({ 
          message: "No trainer found with that name" 
        });
      }
      
      res.json(trainer);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: error.errors[0].message 
        });
      }
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Search trainer by certification ID
  app.post("/api/search/certification", async (req, res) => {
    try {
      const { certificationId } = searchByCertificationIdSchema.parse(req.body);
      
      const trainer = await storage.getTrainerByCertificationId(certificationId);
      
      if (!trainer) {
        return res.status(404).json({ 
          message: "No certification found with that ID" 
        });
      }
      
      res.json(trainer);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: error.errors[0].message 
        });
      }
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
