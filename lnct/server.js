const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Replace this with your MongoDB connection string
const MONGODB_URI = 'mongodb://localhost:27017/lnctdb';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Define Mongoose schemas and models

const campusSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: String,
  desc: String,
  tags: [String],
});

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: String,
  date: { type: Date, default: Date.now },
});

const eventSchema = new mongoose.Schema({
  date: { type: String, required: true }, // YYYY-MM-DD
  title: { type: String, required: true },
  desc: String,
});

const Campus = mongoose.model('Campus', campusSchema);
const News = mongoose.model('News', newsSchema);
const Event = mongoose.model('Event', eventSchema);

// Routes

// Root route
app.get('/', (req, res) => {
  res.send('LNCT Backend Running');
});

// Get all campuses
app.get('/api/campuses', async (req, res) => {
  try {
    const campuses = await Campus.find();
    res.json(campuses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add campus
app.post('/api/campuses', async (req, res) => {
  try {
    const campus = new Campus(req.body);
    await campus.save();
    res.status(201).json(campus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all news
app.get('/api/news', async (req, res) => {
  try {
    const news = await News.find().sort({ date: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add news
app.post('/api/news', async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all events
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add event
app.post('/api/events', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
