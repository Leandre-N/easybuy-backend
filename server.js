const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { connectDB } = require('./src/config/database');

const app = express();

app.use(cors());
app.use(express.json());

// Connexion à la base de données
connectDB();

// Route de test
app.get('/', (req, res) => {
  res.json({ message: 'BUYplus API is running 🚀' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});