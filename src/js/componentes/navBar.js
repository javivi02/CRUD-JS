const body = document.body;
let limpiar, buscar;

const creaNavBar = () => {

    const html = `
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">CRUD-JS</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" id="buscar">
                <button class="btn btn-outline-success" type="button" id="limpiar">Limpiar</button>
            </form>
        </div>

        </div>
    </nav>
    
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    // Referencias

    limpiar = document.querySelector('#limpiar');
    buscar  = document.querySelector('#buscar');

}

const eventos = () => {

    limpiar.addEventListener('click', ()=> {

        buscar.value = "";

        const [, ...rows] = document.getElementsByTagName('tr');

        for (const row of rows) {
            row.classList.remove('d-none');
        }

    });

    buscar.addEventListener('keyup', ()=>{

        const valor = buscar.value;
        busqueda(valor);

    });

}

const busqueda = (valor) => {

    const [, ...rows] = document.getElementsByTagName('tr');

    for (const row of rows) {

        let ocultarFila = false;

        // Almaceno cada td en variables, utilizando la desectruturacion de objetos.
        const [nombre, apellido, usuario] = row.children;

        ocultarFila = !(nombre.textContent.toLowerCase().includes(valor)
            || apellido.textContent.toLowerCase().includes(valor)
            || usuario.textContent.toLowerCase().includes(valor));

        if (ocultarFila) row.classList.add('d-none');
        else row.classList.remove('d-none');
    }
}


export const navbar = () => {
    creaNavBar();
    eventos();
}

