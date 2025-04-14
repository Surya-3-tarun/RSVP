import { RsvpService } from "./services/RsvpService";
import { Logger } from "./utils/Logger";
import { Player } from "./interfaces/types";

const logger = new Logger();
const rsvpService = new RsvpService(logger);

const tarun: Player = { id: "1", name: "Tarun" };
const rohan: Player = { id: "2", name: "Rohan" };
const nitin: Player = { id: "3", name: "nitin" };

rsvpService.addOrUpdateRsvp(tarun, "Yes");
rsvpService.addOrUpdateRsvp(rohan, "No");
rsvpService.addOrUpdateRsvp(nitin, "Maybe");

console.log("Confirmed attendees:", rsvpService.getConfirmedAttendees());
console.log("RSVP counts:", rsvpService.countRsvpStatuses());
