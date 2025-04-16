const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const apis = require("./routes/api.js");
const main = require("./routes/main.js");
const port = process.env.port || 8970;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");






app.use("/api", apis);
app.use("/", main);







app.listen(port, () => console.log(`Server is running on port ${port}`));