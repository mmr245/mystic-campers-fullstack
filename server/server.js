require('dotenv').config();
const express    = require('express');
const cors       = require('cors');
const sqlRouter  = require('./routes/sqlRoutes');
app.use('/api', sqlRouter);

const app = express();

// CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  })
);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount all SQL-backed routes at /api
app.use('/api', sqlRouter);

// (Optional) simple root check
app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to your server!' });
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});