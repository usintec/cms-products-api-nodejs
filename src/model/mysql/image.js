module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define('image', {
        path: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}