const router = require('express').Router();
const venuesController = require('../../controllers/venuesController');

// Get all venues
router.route('/')
  .get(venuesController.findAll)
  .post(venuesController.create);


router.route('/:id')
  .get(venuesController.findById)
  .put(venuesController.update)
  .delete(venuesController.remove);

module.exports = router;
