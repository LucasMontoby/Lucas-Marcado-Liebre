const express = require("express");
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;


app.listen(port, () => console.log("El servidor esta corriendo en puerto 3000"))

app.use(express.static(path.join(__dirname, "./public")))

app.get ("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get ("/register", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
})
app.get ("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

