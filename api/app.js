const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    online: true,
  });
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.json({
    success: true,
    input: req.body.code,
    output: "sample output",
    time: 0.69,
  });
});

module.exports = app;
