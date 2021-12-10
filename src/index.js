import './styles.css';
import {navbar} from "./js/componentes/navBar";
import {datos} from "./js/componentes/datos";
import {tabla} from "./js/componentes/tabla";
import * as CRUD from "./js/providers/crud_usuarios";

navbar();
datos();
tabla();





/*CRUD.getUsuario(2)
    .then(console.log)
    .catch(console.log);*/



