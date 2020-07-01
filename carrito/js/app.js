// Variables

const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCurso = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')

//eventos

eventListener();

function eventListener() {

    //Dispara cuando se presiona agregar carrito
    cursos.addEventListener('click', agregarCarrito);

    //eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Eliminar todos los cursos
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito)

    //Mostrar los cursos de local storage
    document.addEventListener('DOMContentLoaded', leerLocalStorage)
}

//Funciones

//Función añade al carrito
function agregarCarrito(e) {

    e.preventDefault();

    //Delegation para agregar al carrito
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
    }
}

//Función leer datos del curso
function leerDatosCurso(curso) {

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoCurso);
}

//Muestra el curso en el carrito
function insertarCarrito(curso) {

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href"#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCurso.appendChild(row);
    guardarCursoLocalStorage(curso);
}

//Eliminar un curso del carrito

function eliminarCurso(e) {
    e.preventDefault();

    let curso, cursoId;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove()
        curso = e.target.parentElement.parentElement
        cursoId = curso.querySelector('a').getAttribute('data-id');
    };
    eliminarCursoLocalStorage(cursoId)


}

//Elimminar todos los cursos del carrito
function vaciarCarrito() {

    //Forma recomendada
    while (listaCurso.firstChild) {
        listaCurso.removeChild(listaCurso.firstChild);
    }
    vaciarLocalStorage();
    return false;

    //Otra forma no recomendada
    //listaCurso.innerHTML = '';
}

//almacenar en local storage
function guardarCursoLocalStorage(curso) {
    let cursos;

    //Obteniendo los cursos guardados en local storage
    cursos = ObtenerCursoLocalStorage();

    //Introduciendo curso en arreglo antes de guradar en local storage
    cursos.push(curso);

    //Guardando cursos en local storage
    localStorage.setItem('cursos', JSON.stringify(cursos))

}

//Comrpueba los cursos de local storage
function ObtenerCursoLocalStorage() {

    let cursosLs;

    if (localStorage.getItem('cursos') === null) {
        cursosLs = [];
    } else {
        cursosLs = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLs;
}

//Obtener cursos local storage e imprimir en ele carrito

function leerLocalStorage() {

    let cursosLS;
    cursosLS = ObtenerCursoLocalStorage();

    cursosLS.map(function (curso) {

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href"#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
        listaCurso.appendChild(row);
    })

}

//Elimmiar en curso por el Id de local Storage

function eliminarCursoLocalStorage (curso){
    let cursosLS;

    cursosLS = ObtenerCursoLocalStorage();

    cursosLS.forEach(function(cursoLS, index){
        if(cursoLS.id === curso){
            cursosLS.splice(index, 1)
        }
    })
    localStorage.setItem('cursos', JSON.stringify(cursosLS))
}

function vaciarLocalStorage(){
    localStorage.clear();
}