"use strict"

document.getElementById("FormContact").addEventListener("submit" , (e) => {
    e.preventDefault();
    let inputnombre = document.getElementById("nombre").value;
    let inputapellido = document.getElementById("apellido").value;
    let inputemail = document.getElementById("email").value;
    let inputphone = document.getElementById("telefono").value;
    let inputprovincia = document.getElementById("provincia").value;
    let inputlocalidad = document.getElementById("localidad").value;
    let inputcodigo_postal = document.getElementById("codigo_postal").value;


let informacion = [`Nombre: ${inputnombre}, Apellido: ${inputapellido}, Email: ${inputemail}, Telefono: ${inputphone}, Provincia: "${inputprovincia} , Localidad: "${inputlocalidad} , Codigo Postal: "${inputcodigo_postal}`]



// Estas 2 lineas van tal cual como estan aca (informacion es el arreglo que creamos arriba)
let blob = new Blob ([informacion], {type: "text/plain;charset=utf-8"})
    // form. txt es el nombre del archivo que se descarga 
    saveAs (blob,"form.txt")

    })
