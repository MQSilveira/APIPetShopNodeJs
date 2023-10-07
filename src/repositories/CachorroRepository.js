const Cachorro = require('../models/CachorroModel')


class CachorroRepository {

    async getId(id) {
        return await Cachorro.findOne({
            where: { id },
            include: 'cliente'
        })
    }

    async getAll() {
        return await Cachorro.findAll()
    }

    async create(cachorro) {
        return await Cachorro.create(cachorro)
    }

    async update(id, cachorro) {
        return await Cachorro.update(cachorro, {
            where: { id: id }
        })
    }

    async delete(id) {
        return await Cachorro.destroy({
            where: { id: id }
        })
    }
}

module.exports = CachorroRepository

