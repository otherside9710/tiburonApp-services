const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const userController = require('../controllers/user.controller');

//router.delete('/:id', employeCtrl.deleteEmployee);
//router.get('/findAll', userController.getUsers);
router.post('/save', userController.createUSer);
//router.get('/:id', userController.getEmployee);
router.put('/update', userController.updateUSer);

//Esto para probar el jwt
router.post('/doLogin', (req, res) => {
	let username = req.body.user
  	let password = req.body.password
	
	if( !(username === "test" && password==="1234")){
	    res.status(401).send({
	      error: 'usuario o contraseña inválidos'
	    })
	    return;
  	}

  	let tokenData = {
	    username: username
	    role: ["ROLE_USER", "ROLE_ADMIN"]
  	}
	 
	let token = jwt.sign(tokenData, 'Secret Password', {
	    expiresIn: 60 * 60 // expires in 1 hours
	})
	 
	res.send({
	  token
	})
});

module.exports = router;
