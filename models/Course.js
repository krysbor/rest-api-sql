'use strict';
module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userid: {

        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        estimatedTime: {
            type: DataTypes.STRING,
            allowNull: true
        },
        materials: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {});
    User.associate = function(models){

    };
    return Course;
}