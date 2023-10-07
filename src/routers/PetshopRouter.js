const express = require('express')
const ClienteController = require('../controllers/ClienteController')
const CachorroController = require('../controllers/CachorroController')
const AtendimentoController = require('../controllers/AtendimentoController')


const clienteController = new ClienteController()
const cachorroController = new CachorroController()
const atendimentoController = new AtendimentoController()

const router = express.Router()

// Rotas de Cliente
router.get('/api/clientes', clienteController.getClientes)
router.get('/api/cliente/:id', clienteController.getCliente)
router.post('/api/cliente', clienteController.createCliente)
router.put('/api/cliente/:id', clienteController.updateCliente)
router.delete('/api/cliente/:id', clienteController.deleteCliente)

// Rotas de Cachorro
router.get('/api/cachorros', cachorroController.getCachorros)
router.get('/api/cachorro/:id', cachorroController.getCachorro)
router.post('/api/cachorro', cachorroController.createCachorro)
router.put('/api/cachorro/:id', cachorroController.updateCachorro)
router.delete('/api/cachorro/:id', cachorroController.deleteCachorro)

// Rotas de Atendimento
router.get('/api/atendimentos', atendimentoController.getAtendimentos)
router.get('/api/atendimento/:id', atendimentoController.getAtendimento)
router.post('/api/atendimento', atendimentoController.createAtendimento)
router.put('/api/atendimento/:id', atendimentoController.updateAtendimento)
router.delete('/api/atendimento/:id', atendimentoController.deleteAtendimento)
router.get('/api/atendimentos/:id', atendimentoController.getAtendimentosByCachorroId)



module.exports = router

