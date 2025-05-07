require('dotenv').config();
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

// DB connection using 1 schema
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) {
        console.error('❌ DB connection failed:', err);
        process.exit(1);
    }
    console.log('✅ Connected to', process.env.DB_NAME);
});

//Route to insert contact form data
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }
    const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Message Submitted!', result });
    });
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
    db.query(sql, [username, email, password], (err, result) => {
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

