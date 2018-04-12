const router = require('express').Router();
const showsController = require('../../controllers/showsController');

// Get all shows
router.route('/')
  .get(showsController.findAll)
  .post(showsController.create);


router.route('/:id')
  .get(showsController.findById)
  .put(showsController.update)
  .delete(showsController.remove);

module.exports = router;
