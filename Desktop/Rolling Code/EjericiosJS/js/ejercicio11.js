let numero = parseInt(prompt("Elige un numero"))

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    document.write("El numero es divisible en 2,3,5 o 7 <br>" )
} else { document.write("El numero NO es divisible por 2,3,5 o 7")}

if(numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0){
    document.write("Mas precisamente por: <br>")
    if (numero % 2 === 0){
        document.write("Es divisible en 2<br>")}
    } if (numero % 3 === 0){
        document.write("Es divisible en 3<br>")
    } if (numero % 5 === 0){
        document.write("Es divisible en 5<br>")
    } if (numero % 7 === 0){
        document.write("Es divisible en 7<br>")
    }



