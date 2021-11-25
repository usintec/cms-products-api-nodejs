class BaseConfig {
    constructor(
        config
    ){
        if(new.target == BaseConfig) 
        throw new TypeError('Can not contructo BaseConfig directly');
        if(!this.hostAddr){
            this.hostAddr = config.hostAddr;
            this.portAddr = config.portAddr;
            this.db = config.db;
            this.dbHostAddr = config.dbHostAddr;
            this.dbUser = config.dbUser;
            this.dbPassword = config.dbPassword;
            this.dbPort = config.dbPort;
            this.secret = config.secret;
        }

    }
}

module.exports = BaseConfig;