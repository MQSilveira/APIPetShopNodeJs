const Cliente = require('../models/ClienteModel')


class ClienteRepository {

    async getId(id) {
        return await Cliente.findOne({
            where: { id },
            include: 'cachorros'
            
        })
    }

    async getAll() {
        return await Cliente.findAll()
    }

    
    async create(cliente) {
        return await Cliente.create(cliente)
    }

    async update(id, cliente) {
        return await Cliente.update(cliente, {
            where: { id: id }
        })
    }

    async delete(id) {
        return await Cliente.destroy({
            where: { id: id }
        })
    }
}

module.exports = ClienteRepository

