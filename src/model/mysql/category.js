module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('category', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        slug: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
    return Category;
}