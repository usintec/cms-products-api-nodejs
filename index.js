require('dotenv').config();
const enviroment = require('./src/configuration/Enviroment');
const express = require('express');
const configuration = new enviroment(process.env.ENVIROMENT).getEnviroment();

var app = new express();

app.get('/',()=>{
    console.log('Hello world');
});

app.listen(configuration.portAddr, configuration.hostAddr,()=>{
    console.log(`server listening on  ${configuration.portAddr} : ${configuration.hostAddr}`);
})

