const router = require('express').Router();
const bandsController = require('../../controllers/bandsController');

// Get all bands
router.route('/')
  .get(bandsController.findAll)
  .post(bandsController.create);


router.route('/:id')
  .get(bandsController.findById)
  .put(bandsController.update)
  .delete(bandsController.remove);

module.exports = router;
