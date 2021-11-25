require('dotenv').config();
const Enviroment = require('./src/configuration/Enviroment');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const UserRouter = require('./src/router/user');
const db = require('./src/model/mysql');
const Role = db.role;
const configuration = new Enviroment(process.env.ENVIROMENT).getEnviroment();

var app = new express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Metheds', 'GET,POST,PUT,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use(morgan('dev'));
app.use('/api', UserRouter);

db.sequelize.sync();
// db.sequelize.sync({force: true}).then(() => createRoles() );
app.get('/',()=>{
    console.log('Hello world');
});

app.listen(configuration.portAddr, configuration.hostAddr,()=>{
    console.log(`server listening on  ${configuration.portAddr} : ${configuration.hostAddr}`);
})


function createRoles(){
    Role.create({
        id: 1,
        name: 'admin'
    });
    Role.create({
        id: 2,
        name: 'student'
    });
}
