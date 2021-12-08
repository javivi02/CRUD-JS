import modal from "bootstrap/js/src/modal";
import {lista} from "../../index";

const body = document.body;
let tbody, referenciaEdicionModal, modalNombre, modalApellido, modalUser, modalPassword, actualizar, modalEdit,
    formularioedit, modalCerrar;

const crearTabla = () => {

    const html = `

        <div class="modal fade" id="editRegistro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabelEdit"><strong>Editar</strong></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="editformulario">
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Nombre:</label>
                    <input type="text" class="form-control" id="edit-nombre" name="nombre" value="">
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Apellidos:</label>
                    <input type="text" class="form-control" id="edit-apellidos" name="apellidos">
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Usuario:</label>
                    <input type="text" class="form-control" id="edit-user" name="user">
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Password:</label>
                    <input type="text" class="form-control" id="edit-password" name="password">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="editCerrar">Close</button>
                <button type="button" class="btn btn-primary" id="actualizar" data-backdrop="false" 
                data-bs-dismiss="modal">Actualizar</button>
              </div>
            </div>
          </div>
        </div>
        
        <table class="table" id="table"> <!-- table-striped -->
            
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Password</th>
                    <th scope="col"></th>
                </tr>
            </thead>
              
            <tbody>
            <!-- Content generated with JS -->
            </tbody>
        </table>
    `;

    const divPadre = document.createElement('div');
    divPadre.classList.add('container', 'pt-3');
    const div = document.createElement('div');
    div.classList.add('mt-5');
    div.innerHTML = html;
    divPadre.append(div);
    body.append(divPadre);

    // Referencias

    tbody = document.querySelector('tbody');
    modalNombre = document.querySelector('#edit-nombre');
    modalApellido = document.querySelector('#edit-apellidos');
    modalUser = document.querySelector('#edit-user');
    modalPassword = document.querySelector('#edit-password');
    actualizar = document.querySelector('#actualizar');
    modalCerrar = document.querySelector('#editCerrar');
    formularioedit = document.querySelector('#editformulario');
    modalEdit = new bootstrap.Modal(document.getElementById('editRegistro'));

}

export const crearRegistro = (usuario) => {

    const row = tbody.insertRow();
    row.setAttribute('id', `${usuario.id}`);
    row.innerHTML = `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellidos}</td>
            <td>${usuario.user}</td>
            <td>${usuario.password}</td>
            <td class="text-right"></td>
        </tr>
    `;

    const buttonEditar = document.createElement('button');
    buttonEditar.setAttribute('data-bs-toggle', 'modal');
    buttonEditar.setAttribute('data-bs-target', '#editRegistro');
    buttonEditar.classList.add('btn','btn-primary','mb-1', 'ml-1');
    buttonEditar.innerHTML = '<i class="bi bi-pencil-fill"></i>';

    const buttonEliminar = document.createElement('button');
    buttonEliminar.classList.add('btn','btn-danger','mb-1', 'ml-1',);
    buttonEliminar.innerHTML = '<i class="bi bi-trash-fill"></i>';

    row.children[4].appendChild(buttonEditar);
    row.children[4].appendChild(buttonEliminar);

    let id = row.getAttribute('id');

    buttonEditar.addEventListener('click', ()=>{

        modalNombre.value = usuario.nombre;
        modalApellido.value = usuario.apellidos;
        modalUser.value = usuario.user;
        modalPassword.value = usuario.password;

        referenciaEdicionModal = id;
    });

    buttonEliminar.addEventListener('click', ()=>{

        document.getElementById(id).remove();
    });

}

const eventos = () => {

    actualizar.addEventListener('click', ()=>{

        //console.log(referenciaEdicionModal);
        const row = document.getElementById(referenciaEdicionModal);
        const usuario = lista.buscarUsuario(referenciaEdicionModal);

        row.children[0].innerText = modalNombre.value;
        usuario.nombre = modalNombre.value;

        row.children[1].innerText = modalApellido.value;
        usuario.apellidos = modalApellido.value;

        row.children[2].innerText = modalUser.value;
        usuario.user = modalUser.value;

        row.children[3].innerText = modalPassword.value;
        usuario.password = modalPassword.value;

        modalEdit.toggle();
    });

    modalCerrar.addEventListener('click', ()=> borrarDatosModal());
}

const borrarDatosModal = () => {

    const cache = formularioedit.getElementsByTagName('input');
    for (const item of cache) {
        item.value = "";
    }

}


export const tabla = () => {
    crearTabla();
    eventos();
}