const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));

app.use(express.static("public"));

const { Client } = require("pg");

// const logQuery = (statement) => {
//   let timeStamp = new Date();
//   let formattedTimeStamp = timeStamp.toString().substring(4, 24);
//   console.log(formattedTimeStamp, statement);
// };

// app.get("/", async (req, res) => {
//   try {
//     await client.connect();

//     let statement = 'SELECT * FROM conferences';
//     let result = await client.query(statement);
//     logQuery(statement);
//     console.log(result);
//     await client.end();

//     res.render("layout", { conferences: result.rows });
//   } catch (error) {
//     console.log(error);
//   }
// });

// create client on startup
// const client = new Client({
//   database: "medical_conferences",
// });

async function getConferences() {
  let client = new Client({
    database: 'medical_conferences'
  });
  await client.connect();
  const res = await client.query("SELECT * FROM conferences");
  // logQuery(statement);
  console.log(res);
  await client.end();
  return res.rows;
}

app.get("/", async (req, res) => {
  try {
    const conferences = await getConferences();
    res.render("layout", { conferences });
    
  } catch (error) {
    console.log(error); // render error page
  }
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});


