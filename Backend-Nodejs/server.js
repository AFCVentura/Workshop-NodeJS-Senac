import { fastify } from "fastify";

const server = fastify();

// server.get('/', () => {
//     return 'Hello World';
// });

// server.get('/teste', () => {
//     return 'Hello Marcos';
// });


server.listen({
    port: 3333
});
