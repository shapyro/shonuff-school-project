const router = require('express').Router();
const likesController = require('../../controllers/likesController');

// Get all likes
router.route('/')
  .get(likesController.findAll)
  .post(likesController.create);


router.route('/:id')
  .get(likesController.findById)
  // .put(likesController.update)
  .delete(likesController.remove);

module.exports = router;
