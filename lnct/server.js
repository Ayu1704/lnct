const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/news", async (req, res) => {
  try {
    const { data } = await axios.get("https://lnct.ac.in/recent-events/");
    const $ = cheerio.load(data);
    const news = [];

    $(".fusion-post-content .fusion-title a").each((i, elem) => {
      const title = $(elem).text().trim();
      const link = $(elem).attr("href");
      news.push({ title, link });
    });

    res.json(news.slice(0, 10)); // Return top 10
  } catch (error) {
    console.error("Error scraping news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
    
});
