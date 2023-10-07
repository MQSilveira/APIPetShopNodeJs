const { DataTypes } = require('sequelize')
const Cachorro = require('./CachorroModel')

const db = require('../database/db')


const Cliente = db.define('clientes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomeCompleto: {
        field: 'nome_completo',
        type: DataTypes.STRING,
        allowNull: false
    },
    contato: {
        field: 'contato',
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    createdAt: false,
    updatedAt: false
})

Cachorro.belongsTo(Cliente, { foreignKey: 'id_cliente' });
Cliente.hasMany(Cachorro, { foreignKey: 'id_cliente'});

module.exports = Cliente

