// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing


// Star Wars Characters (DATA)
// =============================================================
let yoda = {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  };
let darthmaul = {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  };
let obiwan = {
  routeName: "obiwan",
  name: "Obi-Wan Kenobi",
  role: "Jedi Master",
  forcePoints: 1800
};

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", (req, res) => {
  res.json(yoda);
});

app.get("/darthmaul", (req, res) => {
  res.json(darthmaul);
});

app.get("/obiwan", (req, res) => {
  res.json(obiwan);
});

// Displays all characters

// Displays a single character, or returns false

// Create New Characters - takes in JSON input

  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware


  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
