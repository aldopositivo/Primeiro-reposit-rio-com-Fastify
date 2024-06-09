import Fastify from 'fastify'

// const servidor = Fastify({})
const servidor = Fastify({
    logger: true
})

servidor.get('/teste', function controlador (req, res) {
        const saudacao = "Bem Vindo ao meu primeiro servidor Node.JS com Typescript"
        return res.send(saudacao)
})

servidor.listen({
    port: 3000
})