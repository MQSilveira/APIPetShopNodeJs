const { Sequelize } = require('sequelize')
const { development } = require('../config')


const conexao = new Sequelize(development)

conexao.sync()
    .then(() => {
        console.log('Conectado ao banco de dados')
    })
    .catch((err) => {
        console.log(`Erro ao conectar ao banco de dados: ${err}`)
    }
)

module.exports = conexao
