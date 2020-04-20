const express = require('express');
const veterinarioController = require('./controllers/veterinarioController');
const clienteController = require('./controllers/clienteController');
const perfilController = require('./controllers/perfilController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/veterinario', veterinarioController.index);
routes.post('/veterinario', veterinarioController.create);

routes.get('/perfil', perfilController.index);

routes.get('/cliente', clienteController.index);
routes.post('/cliente', clienteController.create);
routes.delete('/cliente/:id', clienteController.delete);

    module.exports = routes;
