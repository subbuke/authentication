const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.get("/", (req, res) => {
    res.send("hello world")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server running at port " + PORT)
})