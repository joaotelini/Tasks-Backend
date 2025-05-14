import mysql from "mysql2";

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.execute("SELECT * FROM category", function (err, results, fields) {
  if (err) throw err;
  console.log(results);
  console.log(fields);
});
