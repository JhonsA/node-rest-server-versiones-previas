const Role = require('../models/Role');
const Usuario = require('../models/Usuario');

// Valida si el rol existe en la BD
const esRolValido = async(rol = '') => {
    
    const existeRol = await Role.findOne({ rol });
    if( !existeRol ) {
        // Error personalizado que va ser atrapado por el custom
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }

}

// Verifica si el correo existe
const emailExiste = async( correo ) => {

    const existeEmail = await Usuario.findOne({ correo });
    if( existeEmail ){
        throw new Error(`El correo ${ correo }, ya está registrado`);
    }

}

// Verificar si existe un usuario con esa id
const existeUsuarioPorId = async( id ) => {

    const existeUsuario = await Usuario.findById( id );
    if( !existeUsuario ){
        throw new Error(`El Id ${ id }, no existe`);
    }

}

module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
}