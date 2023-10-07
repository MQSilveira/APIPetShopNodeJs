const Atendimento = require('../models/AtendimentoModel')

class AtendimentoRepository {

    async getId(id) {
        return await Atendimento.findOne({
            where: { id },
            include: 'cachorro'
        })
    }

    async getAll() {
        return await Atendimento.findAll()
    }

    async create(atendimento) {
        return await Atendimento.create(atendimento)
    }

    async update(id, atendimento) {

        return await Atendimento.update(atendimento, {
            where: { id: id }
        })
    }
    
    async delete(id) {
        return await Atendimento.destroy({
            where: { id: id }
        })
    }

    async getAtendimentosByCachorroId(id) {
        return await Atendimento.findAll({
            where: { id_cachorro : id }
        })
    }

}

module.exports = AtendimentoRepository
