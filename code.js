let button = document.getElementById('button');

button.addEventListener('click', () => {
  if(button.name == 'Es'){
      document.getElementById('button').name = 'En';
      document.getElementById('button').innerHTML='En'
      document.getElementById('text-1').innerHTML='Bienvenidos a mi cuarto de juegos!';
      document.getElementById('text-2').innerHTML='Este es el comienzo de mi proyecto, cuyo objetivo es aprender y practicar la animación en la programacion.'
  } else if (button.name == 'En'){
    document.getElementById('button').name = 'Es';
    document.getElementById('button').innerHTML='Es'
    document.getElementById('text-1').innerHTML='Welcome to my room game!';
    document.getElementById('text-2').innerHTML='This is the beginning of my project, which aims to learn and practice animation in programming.';
  }
})
 

function adivinador () {

     location.href = './sub-paginas/Adivinar-Numero/index.html'
     
};