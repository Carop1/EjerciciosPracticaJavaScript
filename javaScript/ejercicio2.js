let arrayNombres = [];
let arrayEdad = [];
let arrayIMC = [];
let nombre;
let edad;
let peso;
let altura;
let IMC;
let categoria;

alert("Bienvenido a la calculado de IMC de Campuslands: ")
alert("Por favor ingrese los datos solicitados")

for(let i = 0;i<2; i++){
    nombre = prompt("Escriba su nombre");
    arrayNombres.push(nombre);
    edad = prompt("Escriba su edad");
    arrayEdad.push(edad);
    peso = Number(prompt("Escriba su peso en Kg"));
    altura = Number(prompt("Escriba su altura en metros"));
    IMC = peso/altura**2;
    arrayIMC.push(IMC);
}
for(let j = 0; j<2; j++){
    if(arrayIMC[j]<=24.9){
        categoria = "normal";
    }
    else if(arrayIMC[j]<=29.9){
        categoria = "sobrepeso";
    }
    else if(arrayIMC[j]<=34.9){
        categoria = "obesidad I";
    }
    else if(arrayIMC[j]<=39.9){
        categoria = "obesidad II";
    }
    else if(arrayIMC[j]>=40){
        categoria = "obesidad III";
    }
    alert(arrayNombres[j]+"\n"+arrayEdad[j]+"\n"+arrayIMC[j]+"\n" + categoria);
}
