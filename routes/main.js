const { Router } = require('express');
const app = Router();



app.get("/", (req, res) => {
    res.render("index");
});

app.get("/documentation", (req, res) => {
    res.render("documentation");
});

app.get("/apidoc", (req, res) => {
    res.render("apidoc");
});

module.exports = app;