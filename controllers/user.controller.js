const userController = {};

const User = require('../models/user');


userController.getUsersByCredentials = async (email, password) => {
    try {
        //const users = await User.findByEmailAndPassword(username, password);
        const users = await User.findByEmail(email);
        return users;
    } catch (err) {
        console.error({
            status: err.code,
            message: err.message
        });
    }
    return false;
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
        const userCreated = await User.create(user);
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
