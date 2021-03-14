const express = require("express");
const { sequelize } = require("./models");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  await sequelize.authenticate();
  console.log("Connected to db.");
});
