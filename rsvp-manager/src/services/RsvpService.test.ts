import { describe, it, expect, beforeEach } from "vitest";
import { RsvpService } from "./RsvpService";
import { Logger } from "../utils/Logger";
import { Player } from "../interfaces/types";

describe("RsvpService", () => {
  let rsvpService: RsvpService;

  // Mock Logger that won't actually print to console
  const mockLogger: Logger = {
    log: () => {},
    error: () => {}
  };

  const tarun: Player = { id: "1", name: "Tarun" };
  const rohan: Player = { id: "2", name: "Rohan" };
  const john: Player = { id: "3", name: "John" };

  beforeEach(() => {
    rsvpService = new RsvpService(mockLogger);
  });

  it("should add or update RSVP for players", () => {
    rsvpService.addOrUpdateRsvp(tarun, "Yes");
    rsvpService.addOrUpdateRsvp(rohan, "Maybe");

    const all = rsvpService.getAllEntries();
    expect(all.length).toBe(2);
    expect(all.find(e => e.player.id === "1")?.status).toBe("Yes");
    expect(all.find(e => e.player.id === "2")?.status).toBe("Maybe");
  });

  it("should get only confirmed attendees", () => {
    rsvpService.addOrUpdateRsvp(tarun, "Yes");
    rsvpService.addOrUpdateRsvp(rohan, "No");

    const confirmed = rsvpService.getConfirmedAttendees();
    expect(confirmed.length).toBe(1);
    expect(confirmed[0].name).toBe("Tarun");
  });

  it("should correctly count RSVP statuses", () => {
    rsvpService.addOrUpdateRsvp(tarun, "Yes");
    rsvpService.addOrUpdateRsvp(rohan, "No");
    rsvpService.addOrUpdateRsvp(john, "Maybe");

    const stats = rsvpService.countRsvpStatuses();
    expect(stats.total).toBe(3);
    expect(stats.confirmed).toBe(1);
    expect(stats.declined).toBe(1);
  });

  it("should update existing RSVP", () => {
    rsvpService.addOrUpdateRsvp(tarun, "Maybe");
    rsvpService.addOrUpdateRsvp(tarun, "No");

    const updated = rsvpService.getAllEntries().find(e => e.player.id === "1");
    expect(updated?.status).toBe("No");
  });
});
