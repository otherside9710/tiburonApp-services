const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/findAll', userController.getUsers);
router.post('/save', userController.createUSer);
//router.get('/:id', userController.getEmployee);
router.put('/update', userController.updateUSer);
//router.delete('/:id', employeCtrl.deleteEmployee);

module.exports = router;
