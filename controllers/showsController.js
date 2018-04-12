const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.Show.findAll({
      include: [
        {
          model: db.Band,
          as: 'Bands',
          required: true
        },
        {
          model: db.Venue,
          as: 'Venues',
          required: true
        }
      ]
    })
    .then(dbShow => res.json(dbShow))
    .catch(err => res.status(422).json(err));; 
  },
  findById: function(req, res) {
    db.Show.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(dbShow => res.json(dbShow))
    .catch(err => res.status(422).json(err));; 
  },
  create: function(req, res) {
    db.Show.create({
      name: req.body.name,
      venue_id: req.body.venue_id,
      band_id: req.body.band_id,
      date: req.body.date,
      showtime: req.body.showtime
    })
    .then(dbShow=>res.json(dbShow))
    .catch(err=>res.json(err));
  },
  update: function(req, res) {
    db.Show.update({
      name: req.body.name,
      venue_id: req.body.venue_id,
      band_id: req.body.band_id,
      date: req.body.date,
      showtime: req.body.showtime
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbShow => res.json(dbShow))
    .catch(err => res.status(422).json(err));;
  },
  remove: function(req, res) {
    db.Show.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbShow => res.json(dbShow))
    .catch(err => res.status(422).json(err));;
  }
}


