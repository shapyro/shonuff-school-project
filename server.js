var express = require('express')
var methodOverride = require('method-override')
var app = express()
var bodyParser = require('body-parser')

var PORT = process.env.PORT || 8080;

app.use(methodOverride('X-HTTP-Method-Override'));
// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
// =============================================================
var routes = require("./controllers/burgers_controller.js")

app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
