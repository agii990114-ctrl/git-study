// // server.mjs
// import { createServer } from 'node:http';
// import { controller } from './main.js';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//   res.end(controller(req));
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// // run with `node server.mjs`



import { createServer } from 'node:http';
import Main from './main.js';
const server = createServer(Main);
server.listen(3000, "127.0.0.1", () => {
  console.log('Listening on 127.0.0.1:3000');
});