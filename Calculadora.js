//Declaramos la variable para introducir los numeros en el primer bloque
var input_content = document.getElementById("operation").value;

// Declaracion de funciones
function pulsar(tecla) {    
    switch(tecla) {
        case 'C':
            document.getElementById("operation").value = ' ';
            break;
    
        case '=':
            var resultado = eval(document.getElementById("operation").value);
            document.getElementById("operation").value = resultado;
            break;
            
        default:
            document.getElementById("operation").value = document.getElementById("operation").value + tecla;
    }
    
}



