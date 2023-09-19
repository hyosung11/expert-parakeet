const express = require("express");
const app = express();

const { Client } = require("pg");
const client = new Client({
  database: 'conferences'
});

async function pgPersistence() {
  await client.connect();
  const data = await client.query('SELECT * FROM conferences');
  await client.end();

  return data;
}

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("layout");
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});