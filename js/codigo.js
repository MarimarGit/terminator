var contador = 0;

//Va incrementando el contador en cada click del botón
function incrementarContador() {
   contador++;
   /*if (contador == 1) {
      document.getElementById("terminados").innerHTML = contador;
   } else {
      document.getElementById("terminados").innerHTML = contador;
   }*/

   document.getElementById("terminados").innerHTML = contador;
}

//Resetea el contador
function resetearContador() {
   contador = 0;
   document.getElementById("terminados").innerHTML = contador;
}
        