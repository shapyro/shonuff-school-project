const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.User.findAll({})
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));; 
  },
  findById: function(req, res) {
    db.User.findAll({
      where: {
        user_id: req.params.id
      }
    })
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));; 
  },
  create: function(req, res) {
    db.User.create({
      user_id: req.body.user_id,
      username: req.body.username,
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
      // pic: req.body.pic
    })
    .then(dbUser=>res.json(dbUser))
    .catch(err=>res.json(err));
  },
  update: function(req, res) {
    db.User.update({
      user_id: req.body.user_id,
      username: req.body.username,
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
      // pic: req.body.pic
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));;
  },
  remove: function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));;
  }
}


