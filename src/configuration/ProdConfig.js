const BaseConfig = require('./BaseConfig');
class ProdConfig extends BaseConfig {
    constructor(){
        super(
            {
                hostAddr: process.env.PROD_HOST,
                portAddr: process.env.PROD_PORT,
                dbHostAddr: process.env.PROD_DB_HOST,
                dbUser: process.env.PROD_DB_USER,
                dbPassword: process.env.PROD_DB_PASSWORD,
                dbPort: process.env.PROD_DB_PORT,
                db: process.env.PROD_DB,
                secret: process.env.SECRET
            },
        )
    }
}

module.exports = ProdConfig;