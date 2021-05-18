const router = require('express').Router();

const companyController = require('../controllers/CompanyController');
const countryController = require('../controllers/CountryController');
const developerTypeController = require('../controllers/DeveloperTypeController');
const technologyController = require('../controllers/TechnologyController');
const experienceLevelController = require('../controllers/ExperienceLevelController');

// Public routes, accessible without an authorisation token.
router.get('/login/company', companyController.loginCompany);
// router.get('/login/developer', developerTypeController.loginDeveloper); // TODO

router.get('/countries', countryController.getCountries);
router.get('/developer_types', developerTypeController.getDeveloperTypes);
router.get('/technologies', technologyController.getTechnologies);
router.get('/experience_levels', experienceLevelController.getExperienceLevels);

module.exports = router;
