const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const portfolioRoute = require("./api");

app.use(express.json());

app.use(cors({
  origin: ["https://alec-portfolio-two.vercel.app/"],
  methods: ["POST", "GET"],
  credentials: true
}));

app.get("/", (req, res) => {
  res.json("Welcome to Alec's Portfolio");
});

app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => console.log(`Server running on port ${port}`));
