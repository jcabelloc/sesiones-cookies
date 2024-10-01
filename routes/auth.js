const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/ingresar', authController.getIngresar);

module.exports = router;