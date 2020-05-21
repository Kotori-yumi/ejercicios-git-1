let frase = prompt("Ingrese una frase");
let cantidad = frase.length;

document.write("Cantidad de caracteres: " + cantidad)

for (let indice = 0; indice < cantidad; indice++) {
    if (frase.substr(indice, 1) == "a" || frase.substr(indice, 1) == "e" || frase.substr(indice, 1) == "i" || frase.substr(indice, 1) == "o"||frase.substr(indice,1)=="u"){
        document.write("<br>"+frase.substr(indice,1));
    }
}

// frase.substr(indice,1)
//el 1 es porque quiero acceder a un valor 
//la primera posicion en JS es 0, no se cuenta desde el 1 