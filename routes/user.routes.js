const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const userController = require('../controllers/user.controller');

//router.delete('/:id', employeCtrl.deleteEmployee);
router.get('/findAll', userController.getUsers);
router.post('/save', userController.createUSer);
router.put('/update', userController.updateUSer);

//Esto para probar el jwt
router.post('/doLogin', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    (userController.getUsersByCredentials(email, password)).then( () => {
    	res.status(401).send({
            error: 'usuario o contraseña inválidos'
        });
        return;
    })
    .catch( () => {
    	let tokenData = {
        username: email,
        role: ["ROLE_USER", "ROLE_ADMIN"]
	    };

	    let token = jwt.sign(tokenData, 'Secret Password', {
	        expiresIn: 60 * 60 // expires in 1 hours
	    })

	    res.send({
	        token
	    })
    })
});

module.exports = router;
