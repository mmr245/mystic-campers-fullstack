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

// POST /api/orders
router.post('/orders', async (req, res, next) => {
  console.log('→ POST /api/orders', req.body);

  const {
    user_id = null,
    items,
    full_name,
    shipping_address,
    shipping_option,
    total_cost,
    payment_info
  } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Order must include at least one item.' });
  }

  try {
    // Insert one row per item (not the most efficient, but simple) Im feeling
    await Promise.all(
      items.map(({ product_id, qty }) =>
        pool.execute(
          `INSERT INTO orders
             (user_id, product_id, full_name, shipping_address, shipping_option, total_cost, payment_info)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            user_id,
            product_id,
            full_name,
            shipping_address,
            shipping_option,
            total_cost,
            JSON.stringify(payment_info)
          ]
        )
      )
    );

    res.status(201).json({ message: 'Order placed successfully.' });
  } catch (err) {
    console.error('Order insertion error:', err);
    // send back the SQL error message for easier debugging
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;