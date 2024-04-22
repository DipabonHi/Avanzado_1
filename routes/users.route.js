const  { Router } = require('express');

const { viewUsers, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/users.controller');

const routerUser = Router();

routerUser.get('', viewUsers);
routerUser.post('', usuariosPost);
routerUser.put('/:id', usuariosPut);
routerUser.delete('/:id', usuariosDelete);

module.exports = routerUser;