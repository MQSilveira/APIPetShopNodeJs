const ClienteService = require('../services/ClienteService')
const service = new ClienteService()


class ClienteController {

    async getCliente(req, res) {
        try {

            const id = req.params.id
            const cliente = await service.GetCliente(id)

            res.status(200).json({
                nomeCompleto: cliente.nomeCompleto,
                contato: cliente.contato,
                idCachorro: cliente.cachorros.map(cachorro => {

                    return {
                        id: cachorro.id,
                        nome: cachorro.nome,
                        raca: cachorro.raca,
                        sexo: cachorro.sexo,
                        porte: cachorro.porte
                    }
                })
            })

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async getClientes(_, res) {
        try {

            const clientes = await service.GetClientes()

            res.status(200).json(clientes)

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async createCliente(req, res) {
        try {

            const cliente = req.body
            const newCliente = await service.CreateCliente(cliente)

            // retornar uma mensagem de sucesso
            res.status(201).json({ message: 'Cliente criado com sucesso'})

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async updateCliente(req, res) {
        try {

            const id = req.params.id
            const cliente = req.body
            const updatedCliente = await service.UpdateCliente(id, cliente)

            res.status(200).json({ message: 'Cliente atualizado com sucesso'})

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async deleteCliente(req, res) {
        try {

            const id = req.params.id
            await service.DeleteCliente(id)

            res.status(200).json({ message: 'Cliente deletado com sucesso'})

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

}

module.exports = ClienteController
