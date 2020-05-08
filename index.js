const Logger = require("./logger");

const app = new Logger();

app.on("send", (data) => console.log("message sent!", data));
app.log("stark industries");
app.log("Tony Stark");
app.log("Good Morning");
