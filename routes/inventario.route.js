const  { Router } = require('express');

const { viewinv, invPost, invPut, invDelete, invPatch } = require('../controllers/inventario.controller');

const routerUser = Router();

routerUser.get('', viewinv);
routerUser.post('', invPost);
routerUser.put('/:id', invPut);
routerUser.delete('/:id', invDelete);
routerUser.patch('', invPatch);

module.exports = routerUser;