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

// Server runs on port 3001
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});