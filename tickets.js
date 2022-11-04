const botonResumen = document.querySelector('.resumen');
const valorTotal = document.querySelector('.valor');
const botonReset = document.querySelector('.reset');
const nombre = document.querySelector('.campoNombre');
const apellido = document.querySelector('.campoApellido');
const correo = document.querySelector('.campoCorreo');
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

form.addEventListener('submit', e =>{
    e.preventDefault();
    limpiar();
    validarNombre();
    validarApellido();
    validacionCorreo();
    const ticketDescuento = document.getElementById('inputCategoria').value;
    const entrada = valorEntrada(ticketDescuento);
    const precioTotal = calculoTotal(entrada);
    valorTotal.textContent = `Total a pagar: $${precioTotal}`;
});

const valorEntrada = (descuento) =>{
    const entrada = 200 * descuento;
    return entrada;   
}

const calculoTotal = (precio) =>{
    const ticketCantidad = document.querySelector('.cantidad').value;
    const total = ticketCantidad * precio;
    console.log(total);
    return total;
}

const limpiar = () =>{
    valorTotal.textContent = '';
}

botonReset.addEventListener('click', () =>{
    valorTotal.textContent = `Total a pagar: $`;
});


const validacionCorreo = () =>{
    regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(regexEmail.test(correo.value))
    if(!regexEmail.test(correo.value)){
        Swal.fire({
            title: 'Mail invalido',
            confirmButtonText: 'Okey',
            icon: 'error'
          })
    }
}
function validarNombre(){
    if(nombre.value.length < 3){
        Swal.fire({
            title: 'Nombre invalido',
            confirmButtonText: 'Okey',
            icon: 'error'
          })
    }  
}

function validarApellido(){
    if(apellido.value.length < 3){
        Swal.fire({
            title: 'Apellido invalido',
            confirmButtonText: 'Okey',
            icon: 'error'
          })
    }
  
}