module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        slug: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
    return Product;
}