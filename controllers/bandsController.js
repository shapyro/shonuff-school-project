const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.Band.findAll({})
    .then(dbBand => res.json(dbBand))
    .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Band.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(dbBand => res.json(dbBand))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Band.create({
      name: req.body.name,
      description: req.body.description,
      bio: req.body.bio,
      city: req.body.city,
      state: req.body.state
    })
    .then(dbBand=>res.json(dbBand))
    .catch(err=>res.json(err));
  },
  update: function(req, res) {
    db.Band.update({
      name: req.body.name,
      description: req.body.description,
      bio: req.body.bio,
      city: req.body.city,
      state: req.body.state
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbBand => res.json(dbBand))
    .catch(err => res.status(422).json(err));;
  },
  remove: function(req, res) {
    db.Band.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbBand => res.json(dbBand))
    .catch(err => res.status(422).json(err));;
  }
}

