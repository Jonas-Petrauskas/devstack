const router = require('express').Router();

const userController = require('../controllers/UserController');

router.get('/users', userController.getUsers);
router.get('/users/:query', userController.getFilteredUsers);

module.exports = router;
