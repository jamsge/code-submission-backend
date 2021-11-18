const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        message: "Server is up and running",
        onlineSince: Math.floor(process.uptime()),
    });

});

app.options("/submit", cors());
app.post("/submit", cors(), (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        input: req.body.code,
        output: "sample output",
        time: 0.69,
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});