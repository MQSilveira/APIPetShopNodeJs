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
