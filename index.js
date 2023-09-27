const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));

app.use(express.static("public"));

const { Client } = require("pg");

// const logQuery = (statement) => {
//  let timeStamp = new Date();
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

function capitalizeSpecialty(conferences) {
  let result = [];

  for (let index = 0; index < conferences.length; index += 1) {
    let conference = conferences[index];
    // console.log(conference);
    conference.specialty = conference.specialty
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    result.push(conference);
  }

  return result;
}

async function getConferences() {
  let client = new Client({
    database: "medical_conferences",
  });

  await client.connect();
  const res = await client.query(
    "SELECT name, TO_CHAR(start_date, 'YYYY-MM-DD') start_date, specialty FROM conferences"
  );
  // logQuery(statement);
  await client.end();

  // check and sanitize specialty capitalization
  let capitalizedConf = capitalizeSpecialty(res.rows);
  console.log(capitalizedConf);
  return capitalizedConf;
  // return res.rows;
}

function getSpecialties(conferences) {
  let result = [];
  for (let index = 0; index < conferences.length; index += 1) {
    let specialty = conferences[index]["specialty"];
    if (!result.includes(specialty)) result.push(specialty);
  }

  return result.sort();
}

app.get("/", async (req, res) => {
  try {
    const conferences = await getConferences();
    const uniqueSpecialties = getSpecialties(conferences);
    console.log(uniqueSpecialties);

    res.render("layout", { conferences, uniqueSpecialties });
  } catch (error) {
    console.log(error); // render error page
  }
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});

