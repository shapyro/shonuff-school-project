const db = require('../models');
const axios = require('axios');
const eventsURL = "http://api.songkick.com/api/3.0/events.json?apikey=";
const songkickAPIKey = "pnFUa6ukavVrRL6g";

module.exports = {

  findAll: function(req, res) {
    axios.get(eventsURL + songkickAPIKey)
    // db.Band.findAll({})
    .then(shows => res.json(shows))
    .catch(err => res.status(422).json(err));
  },


}