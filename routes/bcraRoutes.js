const express = require('express'); 
const router = express.Router();
const { getCreditStatus } = require('../controllers/bcraController');

//GET /api/credit-status/:cuil
router.get('/:cuil', getCreditStatus);

module.exports = router;