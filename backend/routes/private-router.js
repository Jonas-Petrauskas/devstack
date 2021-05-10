const router = require('express').Router();

const userController = require('../controllers/UserController');

router.get('/users', userController.getUsers);

module.exports = router;
