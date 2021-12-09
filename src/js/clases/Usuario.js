export default class Usuario {

    //static _contador = 1;

    constructor(id, nombre, apellidos, usuario, password) {

        //this.id = Usuario._contador ++;
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.usuario = usuario;
        this.password = password;

    }

}