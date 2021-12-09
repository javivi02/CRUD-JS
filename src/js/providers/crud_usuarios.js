const urlCRUD = 'http://localhost:8090/api/usuario';


export const getUsuarios = async () => {

    try {

        const respuesta = await fetch('http://localhost:8090/api/usuarios');
        if(!respuesta.ok) throw 'No se ha podido realizar la peticion';
        //console.log(datos);
        return await respuesta.json();

    }catch (err){
        throw err;
    }

}

const getUsuario = async (id) => {

    try {

        const response = await fetch(`${urlCRUD}/${id}`);
        const {data} = await response.json();
        return data;

    }catch (err){ throw err; }

}

const crearUsuario = async (usuario)=>{

    try {

        const response = await fetch(urlCRUD, {
            method : 'POST',
            body : JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return await response.json();

    }catch (err){ throw err; }

}

const actualizarUsuario = async( id, usuario ) => {

    try {

        const response = await fetch(`${ urlCRUD }/${ id }`, {
            method: 'PUT',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return await response.json();

    }catch (err){ throw err; }

}

const borrarUsuario = async( id ) => {

    try{

        const response = await fetch( `${ urlCRUD }/${ id }`, {
            method: 'DELETE'
        });

        return ( response.ok ) ? 'Borrado' : 'No se pudo eliminar';

    }catch (err){ throw err; }

}

export {

    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}