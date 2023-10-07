const AtendimentoRepository = require('../repositories/AtendimentoRepository')


const repository = new AtendimentoRepository()

class AtendimentoService {
    
    async GetAtendimento(id) {

        if (!await repository.getId(id)) {
            throw new Error('Atendimento não encontrado')

        } else {
            return await repository.getId(id)

        }
    }

    async GetAtendimentos() {
        if (!await repository.getAll()) {
            throw new Error('Não há atendimentos cadastrados')

        } else {
            return await repository.getAll()

        }
    }

    async CreateAtendimento(atendimento) {

        if (!atendimento.data || !atendimento.valor || !atendimento.idCachorro) {

            throw new Error('Data, valor e id do cachorro são obrigatórios')

        } else if (atendimento.data.length < 1) {

            throw new Error('Data inválida')

        } else if (atendimento.valor.length < 1) {
                
                throw new Error('Valor inválido')
    
        } else {
            return await repository.create(atendimento)
        }

    }

    async UpdateAtendimento(id, atendimento) {

        if (!await repository.getId(id)) {
            
            throw new Error('Atendimento não encontrado')

        } else if (!atendimento.data || !atendimento.valor || !atendimento.idCachorro) {

            throw new Error('Data, valor e id do cachorro são obrigatórios')

        } else if (atendimento.data.length < 1) {

            throw new Error('Data inválida')

        } else if (atendimento.valor.length < 1) {

            throw new Error('Valor inválido')

        } else {
            return await repository.update(id, atendimento)

        }
    }

    async DeleteAtendimento(id) {

        if (!await repository.getId(id)) {
            throw new Error('Atendimento não encontrado')

        } else {
            return await repository.delete(id)
        }

    }

    async GetAtendimentosByCachorroId(cachorroId) {

        if (!await repository.getAtendimentosByCachorroId(cachorroId)) {
            throw new Error('Cachorro não possui atendimentos cadastrados')

        } else {
            return await repository.getAtendimentosByCachorroId(cachorroId)
        }

    }

}

module.exports = AtendimentoService
