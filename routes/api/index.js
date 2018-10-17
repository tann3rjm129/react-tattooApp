const router = require('express').Router();
const userRoutes = require('./users');
// const commentsRoutes = require('./comments');
// const signInRoutes = require('./signin');

router.use('/users', userRoutes);
// router.use('/comments', commentsRoutes);
// router.use('/account', signInRoutes);

module.exports = router;
