const CachorroService = require('../services/CachorroService')
const service = new CachorroService()


class CachorroController {

    async getCachorro(req, res) {
        try {

            const id = req.params.id
            const cachorro = await service.GetCachorro(id)

            // retornar status 200 e exibir o cachorro e todas as informações de seu cliente 
            res.status(200).json({
                nome: cachorro.nome,
                raca: cachorro.raca,
                sexo: cachorro.sexo,
                porte: cachorro.porte,
                idCliente: { 
                    id: cachorro.cliente.id,
                    nome: cachorro.cliente.nomeCompleto,
                    contato: cachorro.cliente.contato
                }

                // exibir todas as informações de cliente 
                
            })

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async getCachorros(_, res) {

        try {

            const cachorros = await service.GetCachorros()

            res.status(200).json(cachorros)

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async createCachorro(req, res) {
        try {
            
            const cachorro = req.body
            const newCachorro = await service.CreateCachorro(cachorro)

            res.status(201).json({ message: 'Cachorro criado com sucesso'})

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async updateCachorro(req, res) {
        try {
            
            const id = req.params.id
            const cachorro = req.body
            service.UpdateCachorro(id, cachorro)

            res.status(200).json({ message: 'Cachorro atualizado com sucesso'})

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async deleteCachorro(req, res) {

        try {
                
                const id = req.params.id
                await service.DeleteCachorro(id)
    
                res.status(200).json({ message: 'Cachorro deletado com sucesso'})
    
            } catch (err) {

                res.status(500).json({ message: err.message })
            }
    }
}

module.exports = CachorroController
