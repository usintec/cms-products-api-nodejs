const { config } = require('dotenv');
const BaseConfig = require('./BaseConfig');
const DevConfig = require('./DevConfig');
const ProdConfig = require('./ProdConfig');
const StaggingConfig = require('./StaggingConfig');
class Enviroment {
    instance;
    constructor(name){
        this.name = name;
    }
     getEnviroment(){
        switch(this.name){
            case 'DEV':
                return new DevConfig();
            case 'STAGING':
                return  new StaggingConfig();
            case 'PROD': 
                return new ProdConfig

        }
    }
}

module.exports = Enviroment;