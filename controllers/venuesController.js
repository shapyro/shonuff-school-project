const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.Venue.findAll({})
    .then(dbVenue => res.json(dbVenue))
    .catch(err => res.status(422).json(err));; 
  },
  findById: function(req, res) {
    db.Venue.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(dbVenue => res.json(dbVenue))
    .catch(err => res.status(422).json(err));; 
  },
  create: function(req, res) {
    db.Venue.create({
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      street: req.body.street
    })
    .then(dbVenue=>res.json(dbVenue))
    .catch(err=>res.json(err));
  },
  update: function(req, res) {
    db.Venue.update({
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      street: req.body.street
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbVenue => res.json(dbVenue))
    .catch(err => res.status(422).json(err));;
  },
  remove: function(req, res) {
    db.Venue.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbVenue => res.json(dbVenue))
    .catch(err => res.status(422).json(err));;
  }
}


