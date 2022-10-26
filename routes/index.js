const { Router } = require('express');

const indexController = require('../controller/index');

const router = Router();

router.post('/msg', indexController.sendMsg);
router.get('/msgs', indexController.getMsgs);

module.exports = router;