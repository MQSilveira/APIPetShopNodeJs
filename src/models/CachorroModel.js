const { DataTypes } = require('sequelize')
const Cliente = require('./ClienteModel')
const Atendimento = require('./AtendimentoModel')

const db = require('../database/db')


const Cachorro = db.define('cachorros', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        field: 'nome',
        type: DataTypes.STRING,
        allowNull: false
    },
    raca: {
        field: 'raca',
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        field: 'sexo',
        type: DataTypes.STRING,
        allowNull: false
    },
    porte: {
        field: 'porte',
        type: DataTypes.STRING,
        allowNull: false
    },
    idCliente: {
        field: 'id_cliente',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
})

Cachorro.hasMany(Atendimento, { foreignKey: 'id_cachorro' });
Atendimento.belongsTo(Cachorro, { foreignKey: 'id_cachorro' });



module.exports = Cachorro

