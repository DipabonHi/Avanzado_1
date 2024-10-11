const {response, request} = require('express');

const viewinv = async (req = request, res = response) => {
    res.json({
        'msg':'exito'
    })
};

const invGet = (req = request, res = response) => {

    //Ejemplo de desestructuración de variables por parte del query
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    //ejemplo de respuesta tipo json
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const invPost = (req, res = response) => {

    //ejemplo de desestructuración de datos del body
    const { nombreProd, cantidad } = req.body;

    //ejemplo de respuesta del body
    res.status(201).json({
        msg: 'post API - invPost',
        nombreProd, 
        cantidad
    });
}

const invPut = (req, res = response) => {

    //ejemplo de desestructuracion de datos que viajan por los params
    const { id } = req.params;

    //ejemplo de respuesta del body
    res.status(201).json({
        msg: 'put API - invPut',
        id
    });
}

const invPatch = (req, res = response) => {

    const { id } = req.params;

    res.status(201).json({
        msg: 'patch API - invPatch',
        id
    });
}

const invDelete = (req, res = response) => {
    res.status(410).json({
        msg: 'delete API - invDelete'
    });
}

module.exports = {
    invGet,
    invPost,
    invPut,
    invDelete,
    viewinv,
    invPatch
}