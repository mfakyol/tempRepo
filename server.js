var express = require("express");
var app = express();
var fs = require("fs");

const port = 3001;

app.get("/states", function (req, res) {
  let rawdata = fs.readFileSync("./states.json");
  const data = JSON.parse(rawdata);
  res.json(data);
});

app.get("/states/:state", function (req, res) {
  let rawdata = fs.readFileSync("./states.json");
  const states = JSON.parse(rawdata);
  const state = req.params.state;
  res.json(states.filter((s) => s.code == state)[0]);
});

app.get("/cities", function (req, res) {
  let rawdata = fs.readFileSync("./cities.json");
  const data = JSON.parse(rawdata);
  res.json(data);
});

app.get("/cities/:state", function (req, res) {
  const state = req.params.state;
  let rawdata = fs.readFileSync("./cities.json");
  const cities = JSON.parse(rawdata);
  res.json(cities.filter((c) => c.stateCode == state));
});
app.get("/cities/get/:name", function (req, res) {
  const name = req.params.name;
  let rawdata = fs.readFileSync("./cities.json");
  const cities = JSON.parse(rawdata);
  res.json(cities.filter((c) => c.name == name)[0]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
