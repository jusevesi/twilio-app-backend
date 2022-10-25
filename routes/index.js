const { Router } = require('express');

const indexController = require('../controller/index');

const router = Router();

router.post('/index', indexController.sendMsg);

module.exports = router;