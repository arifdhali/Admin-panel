const express = require('express');
const controller = require('../controllers/login.controller');
const router = express.Router();

router.get("/", controller);
router.get("/login", controller);

module.exports = router;

