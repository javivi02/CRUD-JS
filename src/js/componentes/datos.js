import Usuario from "../clases/Usuario";
import {crearRegistro} from "./tabla";
import {lista} from "../../index";
import * as CRUD from "../providers/crud_usuarios";

const body = document.body;
let registrar, formulario, modalNew, cerrar, IDUsuario;

const creaDatos = () => {

    const html = `

       <div class="modal fade" id="nuevoRegistro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><strong>Registro de nuevo usuario</strong></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="formalarioModalNuevo">
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Nombre:</label>
                    <input type="text" class="form-control" id="recipient-nombre" name="nombre" value="">
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Apellidos:</label>
                    <input type="text" class="form-control" id="recipient-apellidos" name="apellidos">
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Usuario:</label>
                    <input type="text" class="form-control" id="recipient-usario" name="user">
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Password:</label>
                    <input type="text" class="form-control" id="recipient-name" name="password">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="cerrar">Close</button>
                <button type="button" class="btn btn-primary" id="registrar" data-backdrop="false" 
                data-bs-dismiss="modal">Registrar</button>
              </div>
            </div>
          </div>
        </div>

        <br>
        
        <button type="button" class="btn btn-primary btn-block" id="add" data-bs-toggle="modal" 
        data-bs-target="#nuevoRegistro" >Nuevo registro</button>
        
    `;

    const div = document.createElement('div');
    div.classList.add('container', 'pt3');
    div.innerHTML = html;

    body.append(div);

    // Referencias

    registrar = document.querySelector('#registrar');
    cerrar = document.querySelector('#cerrar');
    formulario = document.querySelector('#formalarioModalNuevo');
    modalNew = new bootstrap.Modal(document.getElementById('nuevoRegistro'));

}

const eventos = () => {

    registrar.addEventListener('click', ()=>{

        const data = new FormData(formulario);
        const usuario = new Usuario(IDUsuario, data.get('nombre'), data.get('apellidos'), data.get('user'), data.get('password'));
        crearRegistro(usuario);
        lista.agregarUsuario(usuario);
        CRUD.crearUsuario({
            nombre: data.get('nombre'),
            apellidos: data.get('apellidos'),
            usuario: data.get('user'),
            password: data.get('password')
        }).then(console.log);
        console.log(lista);
        borrarDatosModal();
        modalNew.toggle();

    });

    cerrar.addEventListener('click', ()=> borrarDatosModal());

}

const borrarDatosModal = () => {

    const cache = formulario.getElementsByTagName('input');
    for (const item of cache) {
        item.value = "";
    }

}

const cargaDatos = async () => {

    const usuarios = await CRUD.getUsuarios();
    for (const usuario of usuarios) {
        lista.agregarUsuario(usuario);
        crearRegistro(usuario);
    }

    console.log(lista);

    IDUsuario = usuarios[usuarios.length -1].id + 1;
    console.log(`El siguiente ID es: ${IDUsuario}`)
}

export const datos = () => {
  cargaDatos();
  creaDatos();
  eventos();

}