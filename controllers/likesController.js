const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.Likes.findAll({})
    .then(dbLikes => res.json(dbLikes))
    .catch(err => res.status(422).json(err));; 
  },
  findById: function(req, res) {
    db.likes.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(dbLikes => res.json(dbLikes))
    .catch(err => res.status(422).json(err));; 
  },
  create: function(req, res) {
    db.Likes.create({
      like: true,
      show_id: req.body.show_id,
      UserUserId: req.body.user_id,
    })
    .then(dbLikes=>res.json(dbLikes))
    .catch(err=>res.json(err));
  },
  // update: function(req, res) {
  //   db.Likes.update({
  //     name: req.body.name,
  //     description: req.body.description,
  //     bio: req.body.bio,
  //     city: req.body.city,
  //     state: req.body.state
  //   },
  //   {
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(dbLikes => res.json(dbLikes))
  //   .catch(err => res.status(422).json(err));;
  // },
  remove: function(req, res) {
    db.Likes.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbLikes => res.json(dbLikes))
    .catch(err => res.status(422).json(err));;
  }
}
