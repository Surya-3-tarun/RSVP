"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsvpService = void 0;
class RsvpService {
    constructor(logger) {
        this.logger = logger;
        this.rsvpMap = new Map();
    }
    addOrUpdateRsvp(player, status) {
        const entry = { player, status };
        this.rsvpMap.set(player.id, entry);
        this.logger.log(`RSVP updated for ${player.name} to "${status}"`);
    }
    getConfirmedAttendees() {
        return Array.from(this.rsvpMap.values())
            .filter(entry => entry.status === "Yes")
            .map(entry => entry.player);
    }
    countRsvpStatuses() {
        let confirmed = 0;
        let declined = 0;
        for (const entry of this.rsvpMap.values()) {
            if (entry.status === "Yes")
                confirmed++;
            else if (entry.status === "No")
                declined++;
        }
        return {
            total: this.rsvpMap.size,
            confirmed,
            declined
        };
    }
    getAllEntries() {
        return Array.from(this.rsvpMap.values());
    }
}
exports.RsvpService = RsvpService;
