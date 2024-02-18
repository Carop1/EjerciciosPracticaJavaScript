array = [];
let numero;
alert("Ingrese 3 numeros");
for(let i = 0;i<3; i++){
    numero = Number(prompt("Ingrese un numero entero positivo: "));
    let comprobacion = Number.isInteger(numero);
    if (numero>0 && comprobacion){
        array.push(numero);
    }
    else {
        alert("Ingrese un número entero positivo válido.");
        // Restar i para que el bucle vuelva a pedir el mismo número
        i--;
    }
}
alert(array);
let suma = 0;

for(let j = 0; j<3; j++){
    suma = suma + array[j]; 
}
alert("La suma de los sumeros es: "+suma);