const BaseConfig = require('./BaseConfig');
class StaggingConfig extends BaseConfig {
    constructor(){
        super(
            {
                hostAddr: process.env.STAGING_HOST,
                portAddr: process.env.STAGING_PORT,
                dbHostAddr: process.env.STAGING_DB_HOST,
                dbUser: process.env.STAGING_DB_USER,
                dbPassword: process.env.STAGING_DB_PASSWORD,
                dbPort: process.env.STAGING_DB_PORT,
                db: process.env.STAGING_DB,
                secret: process.env.SECRET
            },
        )
    }
}

module.exports = StaggingConfig;