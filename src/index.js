import './styles.css';
import {navbar} from "./js/componentes/navBar";
import {datos} from "./js/componentes/datos";
import {tabla} from "./js/componentes/tabla";
import ListaUsuarios from "./js/clases/UsuariosLista";

navbar();
datos();
tabla();

export const lista = new ListaUsuarios();




