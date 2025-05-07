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

// New User DB connection
const user_DB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "user_db",
});

user_DB.connect((err) => {
    if (err) console.error("User_DB connection error:", err);
    else console.log("Connected to user_db");
});


// Route for Signup Form submission
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required." });
    }

    // Insert new user into user_db.users
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    user_DB.query(sql, [username, email, password], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({ error: "Email already registered." });
            }
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: "User created successfully.", userId: result.insertId });
    });
});

// Server runs on port 3001
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

