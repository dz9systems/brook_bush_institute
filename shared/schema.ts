import { sql } from "drizzle-orm";
import { pgTable, text, varchar, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const trainers = pgTable("trainers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  certificationType: text("certification_type").notNull(),
  certificationId: text("certification_id").notNull().unique(),
  issueDate: date("issue_date").notNull(),
});

export const insertTrainerSchema = createInsertSchema(trainers).omit({
  id: true,
});

export type InsertTrainer = z.infer<typeof insertTrainerSchema>;
export type Trainer = typeof trainers.$inferSelect;
