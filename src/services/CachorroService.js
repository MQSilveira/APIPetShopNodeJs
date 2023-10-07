const CachorroRepository = require('../repositories/CachorroRepository')

const repository = new CachorroRepository()

class CachorroService {

    async GetCachorro(id) {

        if (!await repository.getId(id)) {
            throw new Error('Cachorro não encontrado')

        } else {
            return await repository.getId(id)
        }
    }

    async GetCachorros() {
        if (!await repository.getAll()) {
            throw new Error('Não há cachorros cadastrados')
        
        } else {
            return await repository.getAll()
        }
    }

    async CreateCachorro(cachorro) {

        if (!cachorro.nome || !cachorro.raca || !cachorro.sexo || !cachorro.porte || !cachorro.idCliente) {
            throw new Error('Nome, raça, sexo, porte e id do cliente são obrigatórios')

        } else if (cachorro.nome.length < 3 || cachorro.nome.length > 50) {
            
            throw new Error('Nome inválido')
        
        } else if (cachorro.raca.length < 3 || cachorro.raca.length > 50) {
            
            throw new Error('Raça inválida')

        } else if (cachorro.sexo.length < 1) {

            throw new Error('Sexo inválido')

        } else if (cachorro.porte.length < 1) {
                
                throw new Error('Porte inválido')
    
            }
        else { 
            return await repository.create(cachorro)
        }
    }

    async UpdateCachorro(id, cachorro) {

        if (!await repository.getId(id)) {

            throw new Error('Cachorro não encontrado')

        } else if (!cachorro.nome || !cachorro.raca || !cachorro.sexo || !cachorro.porte || !cachorro.idCliente) {

            throw new Error('Nome, raça, sexo, porte e id do cliente são obrigatórios')

        } else if (cachorro.nome.length < 3 || cachorro.nome.length > 50) {

            throw new Error('Nome inválido')

        } else if (cachorro.raca.length < 3 || cachorro.raca.length > 50) {

            throw new Error('Raça inválida')

        } else if (cachorro.sexo.length < 1) {

            throw new Error('Sexo inválido')

        } else if (cachorro.porte.length < 1) {

            throw new Error('Porte inválido')

        } else {
            return await repository.update(id, cachorro)

        }
    }

    async DeleteCachorro(id) {
            
            if (!await repository.getId(id)) {
                throw new Error('Cachorro não encontrado')
    
            } else {
                return await repository.delete(id)
            }
        }
}

module.exports = CachorroService
