const { DataTypes } = require('sequelize')
const Cachorro = require('./CachorroModel')

const db = require('../database/db')

const Atendimento = db.define('atendimentos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    concluido:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    idCachorro: {
        field: 'id_cachorro',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cachorro,
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
})


module.exports = Atendimento

