const app = express();
const express = require('express');

app.set('view engine', 'hbs')
//impoting paths for static assents in handlebars
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/register", (req, res) => {
    res.render("register")
})
app.get("/login", (req, res) => {
    res.render("login")
})

const path = require("path")

const publicDir = path.join(__dirname, './public')

app.use(express.static(publicDir))

//registering a Route
app.listen(5000, ()=> {
    console.log("server started on port 5000")
})

