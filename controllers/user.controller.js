const userController = {};

const User = require('../models/user');

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
        lastName: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        status: 'A'
    });
    try {
        await user.save();
        res.json({status:'201', message: 'User created'});
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
        //await Employee.findByIdAndUpdate(req.params.id, {$set: Employee}, {new: false});
        const userFindOne = user.findByEmail
        await user.save();
        res.json({status:'200', message: 'User updated'});
    } catch (err) {
        res.json({status: err.code, message: err.message});
    }
};