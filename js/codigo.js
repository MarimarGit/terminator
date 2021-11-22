var contador = 0;

//comentario git

//Va incrementando el contador en cada click del botón
function incrementarContador() {
   contador++;
   document.getElementById("terminados").innerHTML = contador;
}

//Resetea el contador
function resetearContador() {
   contador = 0;
   document.getElementById("terminados").innerHTML = contador;
}
        
