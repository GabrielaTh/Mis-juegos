var max = 100;
var min = 1; 
var corona = Math.random()*(max-min) + min;
corona = parseInt(corona);


function myfunction() {
    
    var entrada = document.getElementsByTagName('input')[0].value;
    entrada = parseInt(entrada);
    console.log(entrada);
      
    if (entrada === corona) {
        document.getElementById('respuesta').innerHTML = 'Ganastes!!!';
    }
    else if (entrada < corona){
        document.getElementById('respuesta').innerHTML = 'es mas que ' + entrada;
    } 
    else if (entrada > corona){
        document.getElementById('respuesta').innerHTML = 'es menos que ' + entrada;
    }else {
        document.getElementById('respuesta').innerHTML = 'Por favor ingresar un numero!';
    }
}

myfunction();

function validate () {
    var entrada = document.getElementsByTagName('input')[0].value;
     
    entrada.keyonpress = (e) => {
        if(isNaN(this.value + String.fromCharCode(e.charCode)))
        return false;
    }
    entrada.onpaste = function(e){
        e.preventDefault();
    }

   return myfunction();
}

