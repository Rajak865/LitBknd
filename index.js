require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("ha ha mai hi hu...");
});
app.get("/login", (req, res) => {
  res.send("<h1>Aaj to heading likh ke hi rahenge </h1>");
});
app.get("/login/youtube", (req, res) => {
  res.send("<h2>chai aur code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
