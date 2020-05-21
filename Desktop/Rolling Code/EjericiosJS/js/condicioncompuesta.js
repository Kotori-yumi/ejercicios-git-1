let numero = parseInt(prompt("Ingrese un numero"));

if (numero >= 5) {
    if (numero <= 15) {
        document.write("el numero ingresado esta dentro del rango 5-15");
    }else{document.write("El numero esta fuera del rango, es mayor")}
}else{document.write("el numero esta fuera del rango, es menor")}