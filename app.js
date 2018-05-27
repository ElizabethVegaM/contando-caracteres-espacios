window.onload = () => {
  printPhrase();
  spaces();
  each();
}

let phrase = prompt('Ingresa una frase').toUpperCase();
let countLetters = 0;

//para imprimir los caracteres en la consola(omite espacios)
const printPhrase = () => {
  let printed = phrase.split('');
  for(a = 0; a < printed.length; a++){
    if(printed[a] === ' ') {
      printed[a] = printed[a+1];
    }
    console.log(printed[a]);
  }
}

//Para contar caracteres totales
function each() {
  Array.from(phrase).forEach(function(){
      countLetters++;
     
});
return countLetters;
}; 

//Cuenta espacios vacíos
const spaces = () => {
  let countSpace = 0;
  for(a = 0; a < phrase.length; a++) {
    if(phrase[a] === ' ') {
      countSpace++;
    }
  }
  return countSpace;
}

//Resta los espacios del total de caracteres
let total = each() - spaces();

document.getElementById('results').innerHTML = 'Tu frase contiene ' + total + ' letras y ' + spaces() + ' espacios.'; 

//Valida que no ingrese respuesta
if(phrase === '') {
  alert('Error, por favor intenta de nuevo');
  location.reload();
}


