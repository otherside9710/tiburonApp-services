const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

//router.delete('/:id', employeCtrl.deleteEmployee);
router.get('/findAll', userController.getUsers);
router.post('/save', userController.createUSer);
router.put('/update', userController.updateUSer);

//Esto para probar el jwt
router.post('/doLogin',  userController.getUsersByCredentials);

module.exports = router;
