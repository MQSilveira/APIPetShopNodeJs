
// Arquivo principal da aplicação
// Responsável por iniciar o servidor e chamar o router

// Router > Controller > Services > Repository > Model

// Router: Responsável por receber as requisições e chamar o controller
//         Somente controla a verificações de requisição e autenticação de acesso
//         Não deve conter regras de negócio

// Controller: Não precisa saber sobre a autrnticação de usuários e afins
//             Responsável por receber os dados do router, 
//             Validar os campos de requisição e chamar a regra de negócio (Services)
//             Envia o retorno para o Usuário

// Services: Toda a regra de negócio fica no Services
//           Não precisa saber sobre a autenticação de usuários e afins
//           Recebe os dados do controller, executa a regra de negócio e retorna o resultado para o controller

// Repository: Responsável pela regra de acesso ao banco de dados

// Model: Apenas a definição da estrutura da tabela no banco de dados
//        Não pode exixtir logica de negócio no model

const express = require('express')
const router = require('./src/routers/PetshopRouter')




const app = express()
const port = 3000

app.use(express.json())
app.use('/', router)


app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
    }
)
