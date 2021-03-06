'use strict';

const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');

//Creates model
module.exports = (sequelize) => {
    class User extends Model {}
    User.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A first name is required.'
                },
                notEmpty: {
                    msg: 'Please provide a first name'
                },
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A last name is required.'
                },
                notEmpty: {
                    msg: 'Please provide a last name'
                },
            }
            
        },
        emailAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'The email you entered is already being used.'
            },
            validate: {
                notNull: {
                    msg: 'An email is required.'
                },
                isEmail: {
                    msg: 'Please provide a valid email address.'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A password is required.'
                },
                notEmpty: {
                    msg: 'Please provide a password.'
                }
            },
        },
        
    }, { 
        hooks: {
            afterValidate: async (user) => {
                user.password = await bcrypt.hashSync(user.password, 10)
            }
        },
        sequelize });

    //Creates association with course model
    User.associate = (models) => {
        User.hasMany(models.Course, {
            foreignKey: {
                fieldName: 'userId',
                allowNull: false,
                validate: {
                    notNull : {
                        msg: 'A user ID is required.'
                    },
                    notEmpty: {
                        msg: 'Please provide a user ID'
                    }
                }
            },
        })
    }

    return User;
}