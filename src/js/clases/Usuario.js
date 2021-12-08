export default class Usuario {

    static _contador = 1;

    constructor(nombre, apellidos, user, password) {

        this.id = Usuario._contador ++;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.user = user;
        this.password = password;

    }

}