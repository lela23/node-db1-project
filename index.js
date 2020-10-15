const server = require('./server.js');

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.send(`Hey Server! ${PORT}`)
})

server.listen(PORT, () => {
  console.log(`Hey Server ${PORT}`);
});
