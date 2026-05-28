import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Contact inquiries table for storing form submissions from the contact page.
 */
export const contactInquiries = mysqlTable("contact_inquiries", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  organization: varchar("organization", { length: 255 }),
  inquiryType: varchar("inquiry_type", { length: 50 }).notNull(),
  message: text("message").notNull(),
  status: mysqlEnum("status", ["new", "read", "responded"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type InsertContactInquiry = typeof contactInquiries.$inferInsert;

/**
 * Donations table for tracking completed Stripe checkout sessions.
 * Only stores essential Stripe identifiers and business metadata.
 */
export const donations = mysqlTable("donations", {
  id: int("id").autoincrement().primaryKey(),
  stripeSessionId: varchar("stripe_session_id", { length: 255 }).notNull().unique(),
  stripePaymentIntentId: varchar("stripe_payment_intent_id", { length: 255 }),
  amount: int("amount").notNull(), // amount in cents
  currency: varchar("currency", { length: 10 }).default("usd").notNull(),
  donorEmail: varchar("donor_email", { length: 320 }),
  donorName: varchar("donor_name", { length: 255 }),
  givingLevel: varchar("giving_level", { length: 100 }),
  status: mysqlEnum("status", ["completed", "pending", "failed"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Donation = typeof donations.$inferSelect;
export type InsertDonation = typeof donations.$inferInsert;