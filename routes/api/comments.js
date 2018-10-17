const router = require('express').Router();
const userController = require('../../controllers/commentController');

// Matches with "/api/comments"
router
    .route('/')
    .get(userController.findAll)
    .post(userController.create);


router
    .route('/:projectId')
    .get(userController.findById)
module.exports = router;