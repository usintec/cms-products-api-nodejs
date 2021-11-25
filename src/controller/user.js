const db = require('../model/mysql');
const User = db.user;
const Role = db.role;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Enviroment = require('../configuration/Enviroment');
const configuration = new Enviroment(process.env.ENVIROMENT).getEnviroment();

exports.signupCustomer = async (req, res) => {
    try{
        let user = await User.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        });
        let role = await Role.findAll({
            where: {
                name: 'admin'
            }
        });
        const token = jwt.sign({id: user.id}, configuration.secret, {expiresIn: 86400});
        await user.setRoles(role);

        res.status(200).send({
            user: user,
            token: token,
            role: role,
            success: true
        });
    }catch(error){
        res.status(403).send({message: error.message, success: false});
    }
}

exports.signinCustomer = async (req, res) => {
    try{
        let user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if(!user)
            return res.status(403).send({message: 'User not found',
            success: false});
            console.log(user.password);
        console.log(user.password);
        let valid = bcrypt.compareSync(req.body.password, user.password);
        if(!valid)
            return res.status(403).send({message: 'Invalid password', success: false});
        let token = jwt.sign({id: user.id}, configuration.secret, {expiresIn: 86400});
        res.status(200).send({
            user: user,
            token: token,
            status: true,
        })
    }catch(error){
        res.status(403).send({message: error.message, success: false});
    }
}