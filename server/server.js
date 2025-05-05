const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173', // Allow requests from this origin
};

app.use(cors(corsOptions)); // Enable CORS with specified options

// Middleware to parse JSON bodies - entry point for route @/api
app.get("/api", (req, res) => {
    res.json({ message: "Hello from the server!" });
}
);

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your MySQL username
    password: 'admin', // your MySQL password
    database: 'mysticcampers', // your database name
});
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

//@TO-DO Route to insert data - may need adjusting
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'User added!', result });
    });
});


// Server runs on port 3001
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});