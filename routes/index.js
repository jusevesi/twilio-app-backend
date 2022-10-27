const { Router } = require('express');

const indexController = require('../controller/index');
const validateCel = require('../middlewares/validations-posts');

const router = Router();

router.post('/msg', validateCel, indexController.sendMsg);
router.get('/msgs', indexController.getMsgs);

module.exports = router;