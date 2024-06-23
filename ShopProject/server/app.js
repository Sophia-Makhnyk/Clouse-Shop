const express = require("express");
require("dotenv").config("./env");
const mysql = require("mysql2");

console.log(process.env.DB_HOST);
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DATABASE);
console.log(process.env.DB_PORT);
const pool = mysql.createPool({
  host: process.env.DB_HOST || "sql7.freesqldatabase.com",
  user: process.env.DB_USERNAME || "sql7709172",
  password: process.env.DB_PASSWORD || "LNy9enKN9z",
  database: process.env.DATABASE || "sql7709172",
  port: process.env.DB_PORT || 3306,
});

const app = express();
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.get("/products", async function (request, response) {
  // Connecting to the database.
  let sql = `SELECT * FROM shop_db.products;`;
  pool.query(sql, function (error, result, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;
    // Getting the 'res' from the database and sending it to our route. This is were the data is.
    products = JSON.stringify(result);
    response.send(products);
   });
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Working...`);
});