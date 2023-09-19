const express = require("express");
const app = express();

const { Client } = require("pg");
console.log(Client);
const client = new Client();
console.log(client);


app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("layout");
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});