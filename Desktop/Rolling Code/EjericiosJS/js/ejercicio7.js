let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let numero3 = parseInt(prompt("Ingrese el tercer numero"));

if(numero1 > numero2 &&  numero1 > numero3){
    document.write("El numero  mas grande es el: " + numero1);
}else if(numero2 > numero3){
    document.write("el numero 2 es el mas grande: " + numero2);
}else{
    document.write("el numero 3 es el mas grande: " + numero3);
}