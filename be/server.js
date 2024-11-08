const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Configure MySQL connection
const db = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  user: "sql12743160",
  password: "xQsjNHYSPR",
  database: "sql12743160",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection error: ", err);
  } else {
    console.log("Connected to MySQL database.");
  }
});

// Example API endpoint
app.get("/data", (req, res) => {
  db.query("SELECT * FROM TestTable", (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(result);
    }
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
