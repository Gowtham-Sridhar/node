const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(message) {
    this.emit("send", { id: uuid.v4(), message });
  }
}

module.exports = Logger;
