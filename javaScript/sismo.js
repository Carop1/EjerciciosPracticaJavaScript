let arrayCiudades = [];
let n = 0;
let Active = true;
let opcion;
let repetido;
let ciudad;
let contadorCiudades = 0;
let arraySismo1 = [];
let arraySismo2 = [];
let arraySismo3 = [];
let arraySismo4 = [];
let arraySismo5 = [];
let arrayGrande =[];
let sismo;
let contaN1 = 0;
let contaN2 = 0;
let contaN3 = 0;
let contaN4 = 0;
let contaN5 = 0;
let indexCiudad;
let ciudadBuscar;
let indexCiudadBuscar;
let suma = 0;
let promedio = 0;
let numero = 0;

alert("Bienvenido al sistema de registro de sismos \nPor favor seleccione una opcion del menu que aparecera a continuación");
n = prompt("Ingrese el numero de sismos a agregar en las ciudades")
while(Active == true){
    opcion = Number(prompt("1. Registrar ciudad \n2. Registrar Sismo \n3. Buscar sismos por ciudad \n4. Informe de riesgo \n5. Salir"));
    if(opcion==1){
        if(contadorCiudades < 5){
            ciudad = prompt("Escriba el nombre de la ciudad");
            repetido = arrayCiudades.indexOf(ciudad);
            if(repetido > -1){
                alert("Escribio una ciudad que ya existe");
            }
            if(repetido == -1){
            arrayCiudades.push(ciudad);
            contadorCiudades = contadorCiudades+1;
            }
        }
        if(contadorCiudades == 5){
            alert("Ya escribio el maximo de ciudades");
        }
        alert("Arreglo ciudades \n" + arrayCiudades);
    }
    else if(opcion == 2){
        ciudadRegistrar = prompt("Escriba la ciudad a agregar los sismos");
        sismo = Number(prompt("Escriba la magnitud del sismo a registrar"));
        indexCiudad = arrayCiudades.indexOf(ciudadRegistrar);
        if(indexCiudad == 0 && contaN1 <n){
            arraySismo1.push(sismo);
            arrayGrande[indexCiudad] = arraySismo1;
            contaN1 = contaN1 + 1;
        }
        if(indexCiudad == 1 && contaN2 <n){
            arraySismo2.push(sismo);
            arrayGrande[indexCiudad] = arraySismo2;
            contaN2 = contaN2 + 1;
        }
        if(indexCiudad == 2 && contaN3 <n){
            arraySismo3.push(sismo);
            arrayGrande[indexCiudad] = arraySismo3;
            contaN3 = contaN3 + 1;
        }
        if(indexCiudad == 3 && contaN4 <n){
            arraySismo4.push(sismo);
            arrayGrande[indexCiudad] = arraySismo4;
            contaN4 = contaN4 + 1;
        }
        if(indexCiudad == 4 && contaN5 <n){
            arraySismo5.push(sismo);
            arrayGrande[indexCiudad] = arraySismo5;
            contaN5 = contaN5 + 1;
        }
        // alert("El array total es: "+arrayGrande);    
    }
    else if(opcion==3){
        ciudadBuscar = prompt("Escriba la ciudad a buscar los sismos");
        indexCiudadBuscar = arrayCiudades.indexOf(ciudadBuscar);
        alert(arrayGrande[indexCiudadBuscar]);
    }
    else if(opcion==4){
        for(let i = 0; i<5; i++){
            let subarreglo = arrayGrande[i];            
            for(let j=0;j<n;j++){
                numero = Number(subarreglo[j]);
                suma = suma + numero;
            }            
            promedio = suma/n;
            if(promedio<2.5){
            alert("La ciudad "+arrayCiudades[i] + "  tiene nivel de riesgo de Amarillo (Sin riesgo)");
            }
            if(promedio>2.6 && promedio<4.5){
                alert("La ciudad "+arrayCiudades[i] + "  tiene nivel de riesgo de Naranja (Riesgo medio))");
            }
            if(promedio > 4.5){
                alert("La ciudad "+arrayCiudades[i] + "  tiene nivel de riesgo de Rojo (Riego alto))");
            }
        }

    }
    else if(opcion == 5){
        Active = false;
    }
    // else{
    //     continue;
    // }
        
}
