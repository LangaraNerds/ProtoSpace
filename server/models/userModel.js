module.exports = (sequelize, Sequelize) => {

    return sequelize.define("users", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,

        },
        college_number: {
            type: Sequelize.INTEGER,
            allowNull: true,
            unique: true,

        },
        role: {
            type: Sequelize.STRING,

        },
        photo: {
            type: Sequelize.STRING
        },

        last_login: {
            type: Sequelize.DATE,
            validate: {
                isDate: true
            }
        }
    })
};