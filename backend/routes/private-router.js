const router = require('express').Router();

const developerController = require('../controllers/DeveloperController');

router.get('/developers', developerController.getDevelopers);
router.get('/developers/:query', developerController.getFilteredDevelopers);

module.exports = router;
