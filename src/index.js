import './styles.css';
import {navbar} from "./js/componentes/navBar";
import {datos} from "./js/componentes/datos";
import {tabla} from "./js/componentes/tabla";
import ListaUsuarios from "./js/clases/UsuariosLista";
import * as CRUD from "./js/providers/crud_usuarios";

navbar();
datos();
tabla();

export const lista = new ListaUsuarios();

/*
CRUD.crearUsuario({
    nombre: 'Luis',
    apellidos: 'Palacios',
    usuario: 'elPalace',
    password: '000000'
}).then(console.log);
*/


