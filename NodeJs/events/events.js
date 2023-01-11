const { EventEmitter } = require("events");
const ev = new EventEmitter();

// ev.once será pra ouvir uma única vez.
// ev.on será pra ouvir sempre.
ev.on("saySomething", (message) => {
  console.log("Eu ouvi você:", message);
});

ev.emit("saySomething", "Jorge Felix");
ev.emit("saySomething", "Maria Helena Felix");
ev.emit("saySomething", "Antonella Felix");
ev.emit("saySomething", "Miguel Felix");
ev.emit("saySomething", "Monique Felix");
