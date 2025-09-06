const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/authRoutes')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log(' MongoDB connected');
  app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error(' MongoDB connection failed:', err.message);
});
