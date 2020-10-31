const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello World With Jenkins and Github Actions!");
});

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));

module.exports = app;