const userController = {};

const jwt = require('jsonwebtoken');
const User = require('../models/user');


userController.getUsersByCredentials = async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;

        console.log("searching: ",email , password);
        let user = await User.find({"$and":[{"email":email}, {"password":password}]});

        if (Object.keys(user).length > 0) {
            let tokenData = {
            username: email,
            role: ["ROLE_USER", "ROLE_ADMIN"]
            };

            let token = jwt.sign(tokenData, 'Secret_Password', {
                expiresIn: 60 * 60 // expires in 1 hours
            });

            res.send({
                token
            });
        }
        else {
            res.status(401).send({
                error: 'usuario o contraseña inválidos'
            });
        }
    } catch (err) {
        res.status(500).send({
            status: err.code,
            message: err.message
        });
    }
    
};


userController.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({status: err.code, message: err.message});
    }
};

userController.createUSer = async (req, res) => {
    const user = new User({
       name : req.body.name,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        status: 'A'
    });
    try {
        const userCreated = await user.save();
        res.json({status:'201', message: 'User created', entity: userCreated});
    } catch (err) {
        res.json({status: err.code, message: err.message});
    }
};

userController.updateUSer = async (req, res) => {
    const user = new User({
        name : req.body.name,
        lastName: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        status: req.body.status
    });
    try {
        await User.findByIdAndUpdate(req.params.id, {$set: user}, {new: false});
        res.json({status:'200', message: 'User updated'});
    } catch (err) {
        res.json({status: err.code, message: err.message});
    }
};

module.exports = userController;
