const EventEmitter = require("events");

class HammerEvent extends EventEmitter {}

const thorHammer = new HammerEvent(); // emitter object

thorHammer.on("thunder", () => console.log("Son of Odin")); // thunder => name of the event

thorHammer.emit("thunder"); // function object (listeners) called.
thorHammer.emit("gowtham");
