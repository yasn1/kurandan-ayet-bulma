const {Router} = require('express');
const app = Router();
const {sure, ayet, textToAyet} = require("../src/functions.js");


app.post("/sure", async (req, res) => {
    const {filter} = req.body;
    const result = await sure(filter) || [];
    res.json(result)
})

app.post("/ayet", async (req, res) => {
    const {filter} = req.body;
    const result = await ayet(filter) || [];
    res.json(result)
})

app.post("/ayetbul", async (req, res) => {
    const {text} = req.body;
    const result = await textToAyet(text) || [];
    res.json(result)
})

module.exports = app;