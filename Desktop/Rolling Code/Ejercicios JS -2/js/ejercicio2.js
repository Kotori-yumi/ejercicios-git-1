let nota =parseInt(prompt("Ingresa tu nota"))

if(nota>10 || nota<0){alert("Introduce un número válido")}

if(nota ==0 || nota <= 2){alert("Tu nota es: Muy deficiente")};
if(nota ==3 || nota == 4){alert("Tu nota es:  Insuficiente")};
if(nota ==5||nota == 6){alert("Tu nota es: Suficiente")};
if(nota ==7){alert("Tu nota es: Bien")};
if(nota ==8|| nota ==9){alert("Tu nota es: Notable")}
if(nota ==10){alert("Tu nota es: Sobresaliente")}