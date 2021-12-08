export default class ListaUsuarios {

    constructor() {
        this.userList = [];
    }

    agregarUsuario(usuario){
        this.userList.push(usuario);
    }

    eliminarUsuario(id){
        this.userList = this.userList.filter(usuario => usuario.id !== id);

    }

    buscarUsuario(id){

        for (const usuario of this.userList) {
            if(usuario.id == id) return usuario;
        }
    }

}