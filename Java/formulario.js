var nombre = document.getElementById('nombre');
var rut  =  document.getElementById('rut');
var apPaterno  =  document.getElementById('apPaterno');
var apMaterno  =  document.getElementById('apMaterno');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('enviando formnulario...');
    
    var  mensajeerror = [];
    if(nombre.value === null || nombre.value === ''){
        mensajeerror.push('Ingresa tu nombre');
    }
    if(password.value === null || password.value === ''){
            mensajeerror.push('Ingresa tu password');
    error.innerHTML = mensajeerror.join(', ');

    }
    if(rut.value === null || rut.value === ''){
        mensajeerror.push('Ingresa tu Rut');
    }
    if(apPaterno.value === null || apPaterno.value === ''){
        mensajeerror.push('Ingresa tu Apellido Paterno');
    }    
    if(apMaterno.value === null || apMaterno.value === ''){
        mensajeerror.push('Ingresa tu Apellido Materno');
    }  
    return  false;
}