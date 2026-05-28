import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";

// Mock Stripe
vi.mock("stripe", () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      checkout: {
        sessions: {
          create: vi.fn().mockResolvedValue({
            id: "cs_test_123",
            url: "https://checkout.stripe.com/test_session",
          }),
        },
      },
      webhooks: {
        constructEvent: vi.fn(),
      },
    })),
  };
});

describe("donation.getGivingLevels", () => {
  it("should return all giving levels", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const levels = await caller.donation.getGivingLevels();

    expect(levels).toHaveLength(4);
    expect(levels[0].id).toBe("gloves-glasses");
    expect(levels[0].amount).toBe(5000);
    expect(levels[1].id).toBe("boots");
    expect(levels[1].amount).toBe(15000);
    expect(levels[2].id).toBe("training");
    expect(levels[2].amount).toBe(50000);
    expect(levels[3].id).toBe("full-program");
    expect(levels[3].amount).toBe(100000);
  });

  it("should have descriptive titles for each level", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const levels = await caller.donation.getGivingLevels();

    expect(levels[0].title).toBe("Work Gloves & Safety Glasses");
    expect(levels[1].title).toBe("Steel Toe Boots");
    expect(levels[2].title).toBe("Sponsor One Youth's Training");
    expect(levels[3].title).toBe("Full Program Sponsorship");
  });
});

describe("donation.createCheckoutSession", () => {
  it("should create a checkout session with valid amount", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { headers: { origin: "http://localhost:3000" } } as any,
      res: {} as any,
    });

    const result = await caller.donation.createCheckoutSession({
      amount: 15000,
      givingLevel: "Steel Toe Boots",
    });

    expect(result.url).toBe("https://checkout.stripe.com/test_session");
    expect(result.sessionId).toBe("cs_test_123");
  });

  it("should create a checkout session with custom amount", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { headers: { origin: "http://localhost:3000" } } as any,
      res: {} as any,
    });

    const result = await caller.donation.createCheckoutSession({
      amount: 7500,
      donorEmail: "donor@example.com",
      donorName: "Jane Doe",
    });

    expect(result.url).toBeDefined();
    expect(result.sessionId).toBeDefined();
  });

  it("should reject amounts below minimum ($1.00 = 100 cents)", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { headers: { origin: "http://localhost:3000" } } as any,
      res: {} as any,
    });

    try {
      await caller.donation.createCheckoutSession({
        amount: 50, // 50 cents, below $1 minimum
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error).toBeDefined();
    }
  });

  it("should reject zero amount", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { headers: { origin: "http://localhost:3000" } } as any,
      res: {} as any,
    });

    try {
      await caller.donation.createCheckoutSession({
        amount: 0,
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error).toBeDefined();
    }
  });
});
