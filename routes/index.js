// requiring express
const express = require('express');
const router = express.Router();
// importing controller
const homeController = require('../controller/homecontroller');
// parser is inserted here
router.use(express.urlencoded());

// display task router
router.get('/',homeController.home);
// create task router
router.post('/create_task',homeController.createTAsk);
// delete task router
router.post('/delete_task',homeController.deleteTask);

// router is exported
module.exports = router;
