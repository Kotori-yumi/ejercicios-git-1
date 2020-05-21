let suma = 0;

do {
    let numero = prompt("Introduce un numero");
    if (Number(numero) == numero) {
        suma = suma + numero;
    } else{ if (numero != undefined){
        alert("No es un numero");}}

}while(confirm("Desea seguir?"));
document.write(suma);