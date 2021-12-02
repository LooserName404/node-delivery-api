import server from './server.js'

const port = process.env.SERVER_PORT

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
