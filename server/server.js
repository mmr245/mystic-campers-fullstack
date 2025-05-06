const express = require('express');
const app = express();
const mysql = require("mysql2");
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5173', // Allow requests from this origin
};

app.use(cors(corsOptions)); // Enable CORS with specified options
app.use(express.json()); // Ensure JSON data is parsed

// Middleware to parse JSON bodies - entry point for route @/api
app.get("/api", (req, res) => {
    res.json({ message: "Hello from the server!" });
});

// MySQL Connection to Contact Form
const contact_DB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "contact_db", // Database for contact form messages
});

contact_DB.connect((err) => {
    if (err) console.error("Contact_DB connection error:", err);
    else console.log("Connected to contact_db");
});

//Route to insert contact form data
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
      }
    const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    contact_DB.query(sql, [name, email, message], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Message Submitted!', result });
    });
});


// Server runs on port 3001
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});