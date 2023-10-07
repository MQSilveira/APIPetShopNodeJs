const AtendimentoService = require('../services/AtendimentoService')

const service = new AtendimentoService()


class AtendimentoController {

    async getAtendimento(req, res) {
        try {

            const id = req.params.id
            const atendimento = await service.GetAtendimento(id)

            res.status(200).json(atendimento)

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async getAtendimentos(_, res) {

        try {

            const atendimentos = await service.GetAtendimentos()

            res.status(200).json(atendimentos)

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
    
    async createAtendimento(req, res) {

        try {
            
            const atendimento = req.body
            await service.CreateAtendimento(atendimento)

            res.status(201).json({ message: 'Atendimento criado com sucesso'})

        } catch (err) {
            res.status(500).json({ message: err.message })
        
        }           
    }

    async deleteAtendimento(req, res) {
        
        try {
                const id = req.params.id
                await service.DeleteAtendimento(id)
    
                res.status(200).json({ message: 'Atendimento deletado com sucesso'})

            } catch (err) {
                    
                    res.status(500).json({ message: err.message })
                }
        }

    async updateAtendimento(req, res) {
        try{
                
                const id = req.params.id
                const atendimento = req.body
                service.UpdateAtendimento(id, atendimento)
    
                res.status(200).json({ message: 'Atendimento atualizado com sucesso'})
    
        } catch (err) {
                res.status(500).json({ message: err.message })
            }        
    }

    async getAtendimentosByCachorroId(req, res) {
        try {
            
            const id = req.params.id
            const atendimentos = await service.GetAtendimentosByCachorroId(id)

            res.status(200).json(atendimentos)

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

}


module.exports = AtendimentoController

