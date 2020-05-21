let numero1 = parseInt(prompt("ingrese el primer valor")); //ventana emergente para texto, el parseInt es para que no sea texto sino numero
let numero2 = parseInt (prompt ("ingrese el segundo valor"));

if(numero1 > numero2){
    document.write("El numero 1 es mayor que el numero 2");
}else{
    document.write("El numero 2 es mayor que el numero 1 o son iguales")
}