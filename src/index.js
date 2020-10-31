const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello World FROM Github and Jenkins");
});

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));

module.exports = app;