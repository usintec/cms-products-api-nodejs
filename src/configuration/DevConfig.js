const BaseConfig = require('./BaseConfig');
class DevConfig extends BaseConfig {
    constructor(){
        super(
            {
                hostAddr: process.env.DEV_HOST,
                portAddr: process.env.DEV_PORT,
                dbHostAddr: process.env.DEV_DB_HOST,
                dbUser: process.env.DEV_DB_USER,
                dbPassword: process.env.DEV_DB_PASSWORD,
                dbPort: process.env.DEV_DB_PORT,
                db: process.env.DEV_DB
            },
        )
    }
}

module.exports = DevConfig;