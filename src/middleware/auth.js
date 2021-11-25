const jwt = require('jsonwebtoken');
const Enviroment = require('../configuration/Enviroment');
const configuration = new Enviroment(process.env.ENVIROMENT).getEnviroment();
const db = require('../model/mysql');
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers['Authorization'];
    if(!token){
        return res.status('403').send({message: 'No token is provided',
        sucess: false});
    }
    jwt.verify(token,configuration.secret,(err,decoded) => {
        if(err){
            return res.status(401).send({message: 'Unauthorised', success: false});
        }
        req.userId = decoded.id;
        next();
    });
}

isAdmin = async (req, res, next)  => {
    try{
        let user = await User.findByPK(req.userId);
        if(user.getRoles().include('admin')){
             next();
             return;
        }
        res.status(403).send({message: 'Required Admin role', sucess = false});
        
    }catch(error){
        res.status('403').send({message: 'User not found', status: false});
    }  
}

isCustomer = async (req, res, next)  => {
    try{
        let user = await User.findByPK(req.userId);
        if(user.getRoles().include('customer')){
             next();
             return;
        }
        res.status(403).send({message: 'Required customer role', sucess = false});
        
    }catch(error){
        res.status('403').send({message: 'User not found', status: false});
    }  
}