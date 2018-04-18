// import axios from 'axios'

const router = require('express').Router();
const songKickShowsController = require('../../controllers/songKickShowsController');

// Get all shows
router.route('/')
  .get(songKickShowsController.findAll)


  module.exports = router;
