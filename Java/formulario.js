var nombre = document.getElementById('nombre');
var rut  =  document.getElementById('rut');
var apPaterno  =  document.getElementById('apPaterno');
var apMaterno  =  document.getElementById('apMaterno');
var edad = document.getElementById('edad')
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('enviando formnulario...');
    
    var  mensajeerror = [];
    if(nombre.value === null || nombre.value === ''){
        mensajeerror.push('Ingresa tu nombre');
    }
    if(rut.value === null || rut.value === ''){
        mensajeerror.push('Ingresa tu Rut');
    }
    if(apPaterno.value === null || apPaterno.value === ''){
        mensajeerror.push('Ingresa tu Apellido Paterno');
    } 
    if (edad==""){
        alert("Tiene que introducir un número entero en su edad.")
        document.fvalida.edad.focus()
        return 0;
     }
     else{
        if (edad<18){
               alert("Debe ser mayor de 18 años.")
               document.fvalida.edad.focus()
               return 0;
        }
        if (edad>35){
            alert("Debe ser Menor de 35 años.")
            document.fvalida.edad.focus()
            return 0;
     }
 }
    
    if(apMaterno.value === null || apMaterno.value === ''){
        mensajeerror.push('Ingresa tu Apellido Materno');
        error.innerHTML = mensajeerror.join(', ');
    }
      
    return  false;
}