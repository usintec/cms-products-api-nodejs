require('dotenv').config();
const Enviroment = require('./src/configuration/Enviroment');
const express = require('express');
const morgan = require('morgan');
const db = require('./src/model/mysql');
const configuration = new Enviroment(process.env.ENVIROMENT).getEnviroment();

console.log(configuration);
var app = new express();
app.use(morgan('dev'));
db.sequelize.sync();
app.get('/',()=>{
    console.log('Hello world');
});

app.listen(configuration.portAddr, configuration.hostAddr,()=>{
    console.log(`server listening on  ${configuration.portAddr} : ${configuration.hostAddr}`);
})

