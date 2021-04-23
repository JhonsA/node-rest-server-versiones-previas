const { response, request } = require('express'); // Para tener ayuda de vsc

const usuariosGet = (req = request, res = response ) => {

    // Query params
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res = response ) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        body: {
            nombre,
            edad
        }
    });
}

const usuariosPut = (req, res = response ) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosDelete = (req, res = response ) => {
    res.json({
        msg: 'delete API - controlador',
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}