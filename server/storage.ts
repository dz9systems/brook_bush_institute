import { type Trainer, type InsertTrainer } from "@shared/schema";
import { randomUUID } from "crypto";
import { mockTrainers } from "./mockData";

export interface IStorage {
  getTrainerByName(firstName: string, lastName: string): Promise<Trainer | undefined>;
  getTrainerByCertificationId(certificationId: string): Promise<Trainer | undefined>;
  createTrainer(trainer: InsertTrainer): Promise<Trainer>;
  getAllTrainers(): Promise<Trainer[]>;
}

export class MemStorage implements IStorage {
  private trainers: Map<string, Trainer>;

  constructor() {
    this.trainers = new Map();
    this.seedData();
  }

  private seedData() {
    // Load trainers from mock data file
    mockTrainers.forEach((trainer: InsertTrainer) => {
      const id = randomUUID();
      const fullTrainer: Trainer = { ...trainer, id };
      this.trainers.set(id, fullTrainer);
    });
  }

  async getTrainerByName(firstName: string, lastName: string): Promise<Trainer | undefined> {
    const firstNameLower = firstName.toLowerCase();
    const lastNameLower = lastName.toLowerCase();
    
    return Array.from(this.trainers.values()).find((trainer) => {
      const trainerFirstLower = trainer.firstName.toLowerCase();
      const trainerLastLower = trainer.lastName.toLowerCase();
      
      // Exact match
      if (trainerFirstLower === firstNameLower && trainerLastLower === lastNameLower) {
        return true;
      }
      
      // Handle middle name variations - check if the search includes parts of the trainer's name
      const searchFullName = `${firstNameLower} ${lastNameLower}`;
      const trainerFullName = `${trainerFirstLower} ${trainerLastLower}`;
      
      // Check if last name matches and first name is contained (for middle name cases)
      if (trainerLastLower === lastNameLower && 
          (trainerFirstLower.includes(firstNameLower) || firstNameLower.includes(trainerFirstLower))) {
        return true;
      }
      
      // For "Kennard Isaiah Love" scenario - check if search contains trainer's first and last name
      if (searchFullName.includes(trainerFirstLower) && searchFullName.includes(trainerLastLower)) {
        return true;
      }
      
      return false;
    });
  }

  async getTrainerByCertificationId(certificationId: string): Promise<Trainer | undefined> {
    return Array.from(this.trainers.values()).find(
      (trainer) => trainer.certificationId === certificationId
    );
  }

  async createTrainer(insertTrainer: InsertTrainer): Promise<Trainer> {
    const id = randomUUID();
    const trainer: Trainer = { ...insertTrainer, id };
    this.trainers.set(id, trainer);
    return trainer;
  }

  async getAllTrainers(): Promise<Trainer[]> {
    return Array.from(this.trainers.values());
  }
}

export const storage = new MemStorage();
