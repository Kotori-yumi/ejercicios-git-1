document.write("<br>1-");
document.write("<br>2-");
document.write("<br>3-");
document.write("<br>4-");
document.write("<br>5-");

//while, do while, for

/*
while(condicion){
    todo el codigo que quiera ejecutar varias veces
    cambiar valor de condicion
}
*/
let contador = 1;
while(contador <=100){
    document.write("<br> Vuelta n: "+contador);
   contador ++; // contador=contador + 3;

}


//do while, hacer...mientras se cumple la condicion

let i=1;
do{
    document.write( "<br> Elemento: " +i);
    i=i+3;
}while(i<=100);


//for (iniciarlizar variable, condicion, incrementar variable)

for(let x=0; x<=100; x=x+5){
    document.write("<br> Items de for: " +x)
}