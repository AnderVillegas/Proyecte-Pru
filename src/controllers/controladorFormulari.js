//pasos para capturar la info de un formaulico usando Js

import { gastos } from "./simuladorAPI";

//paso 1 Se almacena cada Input/select o tex area en una variable

let cajaDescripcion=document.getElementById("descripcion");
let cajaFecha=document.getElementById("Date");
let cajaValor=document.getElementById("valor");
let cajaCategoria=document.getElementById("categoria");

//paso 2 se almacena el boton del formulario en una variable

let botonformulari=document.getElementById("botonRegistro");


//paso 3 se detectan los eventos de formulario
botonformulari.addEventListener("click",function(evento){
    evento.preventDefault()

//paso 4 se capturan los datos

let gasto={
    id:5,
    categoria:cajaCategoria.value,
    fecha:cajaFecha.value,
    descripcion:cajaDescripcion.value,
    valor:cajaValor.value
}

    console.log(gasto)

    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });


    
})




