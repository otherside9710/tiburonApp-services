const userController = {};

const jwt = require('jsonwebtoken');
const Notice = require('../models/notice');

noticeController.getNotice = async (req, res) => {
    try {
        const notice = await Notice.find();
        res.json(notice);
    } catch (err) {
        res.json({status: err.code, message: err.message});
    }
};

userController.createUSer = async (req, res) => {
    const notice = new Notice({
        title: req.body.title,
        content: req.body.content,
        notify: req.body.phone,
        image: req.body.image,
        status: 'A'
    });
    try {
        const noticeCreated = await notice.save();
        res.status(201).send({
            token: generateToken(req),
            status: '201',
            message: 'Notice created',
            noticeData: noticeCreated
        });
    } catch (err) {
        res.json({status: err.code, message: err.message});
    }
};

userController.updateUSer = async (req, res) => {
    const user = new User({
        name: req.body.name,
        lastName: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        status: req.body.status
    });
    try {
        await User.findByIdAndUpdate(req.params.id, {$set: user}, {new: false});
        res.json({status: '200', message: 'User updated'});
    } catch (err) {
        res.json({status: err.code, message: err.message});
    }
};