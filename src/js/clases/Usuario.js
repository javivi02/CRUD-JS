export default class Usuario {

    static _contador = 1;

    constructor(nombre, apellidos, usuario, password) {

        this.id = Usuario._contador ++;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.usuario = usuario;
        this.password = password;

    }

}