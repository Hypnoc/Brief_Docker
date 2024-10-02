// Importation du module http
const http = require('http');

// Définir le port d'écoute
const port = 3000;

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

// Faire écouter le serveur sur le port défini
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
