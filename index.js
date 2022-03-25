// start your server here
const server = require('./api/server')
const PORT = process.env.port || 5000

server.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`)
})