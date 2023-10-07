const ClienteRepository = require('../repositories/ClienteRepository')


const repository = new ClienteRepository()

class ClienteService {

    async GetCliente(id) {

        if (!await repository.getId(id)) {
            throw new Error('Cliente não encontrado')

        } else {
            return await repository.getId(id)
        }
    }

    async GetClientes() {
        if (!await repository.getAll()) {
            throw new Error('Não há clientes cadastrados')

        } else {
            return await repository.getAll()
        }
    }

    async CreateCliente(cliente) {
        
        if (!cliente.nomeCompleto || !cliente.contato) {
            throw new Error('Nome e contato são obrigatórios')

        } else if (cliente.contato.length != 11) {
            throw new Error('Contato inválido')

        } else if (cliente.nomeCompleto.length < 5 || cliente.nomeCompleto.length > 150) {
            throw new Error('Nome inválido')

        } else {
            return await repository.create(cliente)
        }
    }

    async UpdateCliente(id, cliente) {

        if (!await repository.getId(id)) {
            throw new Error('Cliente não encontrado')
        
        } else if (!cliente.nomeCompleto || !cliente.contato) {
            throw new Error('Nome e contato são obrigatórios')

        } else if (cliente.contato.length < 11 || cliente.contato.length > 11) {
            throw new Error('Contato inválido')

        } else if (cliente.nomeCompleto.length < 5 || cliente.nomeCompleto.length > 150) {
            throw new Error('Nome inválido')

        } else {
            return await repository.update(id, cliente)

        }
    }

    async DeleteCliente(id) {

        if (!await repository.getId(id)) {
            throw new Error('Cliente não encontrado')

        } else {
            return await repository.delete(id)
        }
    }

}

module.exports = ClienteService

