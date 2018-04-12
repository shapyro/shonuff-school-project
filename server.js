const express = require('express')
const routes = require('./routes')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require("method-override");
const db = require("./models");
const PORT = process.env.PORT || 8080;

app.use(methodOverride('X-HTTP-Method-Override'));
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static directory
// app.use(express.static("public"));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);


// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================

// db.sequelize.sync({force: true}).then(function() {
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
