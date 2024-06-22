const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();

const data = require("./articles.js");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Server is running on port ${port}`));

app.get("/", (req, res) => {
  res.send("Hello Express app!");
});

app.get("/news", (req, res) => {
  res.json(data);
});

require("./db");
