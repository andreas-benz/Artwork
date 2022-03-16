const server = require('./server')

//use port 3000 unless you are not given another host. Heroku will use a different port.
const port = process.env.PORT || 3000


server.listen(port, function () {
//consolelogging this to see whether server listens to frontend:
  console.log('Server is listening on port', port)
})