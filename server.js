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
let characters = [{
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwan",
    name: "Obi-Wan Kenobi",
    role: "Jedi Master",
    forcePoints: 1800
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => {
  res.send("Welcome to the Star Wars Page!");
});

// Displays all characters
app.get("/api/:characters?", (req, res) => {

  let chosen = req.params.characters;

  if (chosen) {

    console.log(chosen);

    for (let i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        res.json(characters[i]);
        return;
      }
    }
    res.send("No character found.");

  } else {

    res.json(characters);
  }

});


// Displays a single character, or returns false

// Create New Characters - takes in JSON input

// req.body hosts is equal to the JSON post sent from the user
// This works because of our body-parser middleware


// Using a RegEx Pattern to remove spaces from newCharacter
// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});