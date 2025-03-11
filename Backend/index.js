const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require("ejs");

const app = express();
require("dotenv").config();
app.set('view engine', 'ejs')
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("database connected successfully")
}).catch(err => console.log(err))

app.get("/", (req, res) => {
    res.render('welcome')
})
 
app.get("/login", (req, res) => {
    res.render('login')
})

app.get("/register", (req, res) => {
    res.render('register')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server running at port " + PORT)
})