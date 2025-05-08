// server/routes/sqlRoutes.js
const express = require('express');
const { pool } = require('../db/connection.js');
const router = express.Router();

// Health check: GET /api/
router.get('/', (req, res) => {
  res.json({ message: 'API is alive' });
});

// POST /api/submit
router.post('/submit', async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    res.json({ message: 'Message submitted!', insertId: result.insertId });
  } catch (err) {
    next(err);
  }
});

// POST /api/signup
router.post('/signup', async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password]
    );
    res.status(201).json({ message: 'User created.', userId: result.insertId });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Email already registered.' });
    }
    next(err);
  }
});

module.exports = router;