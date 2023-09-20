const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

const { Client } = require("pg");
const client = new Client({
  database: 'medical_conferences'
});

app.get("/", async (req, res) => {
  try {
    await client.connect();

    let result = await client.query('SELECT * FROM conferences')
    console.log(result);
    await client.end();


    res.render("layout", { conferences: result.rows });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});

