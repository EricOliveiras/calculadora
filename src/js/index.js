const teclas = document.querySelectorAll('.numeros');
const display = document.querySelector('.valores');

teclas.forEach(tecla => {
    tecla.addEventListener('click', (e) => {
      e.preventDefault();
      display.innerHTML += e.target.innerHTML; 
    }
  );
});

const teclaApagar = document.querySelector('.apagar');

teclaApagar.addEventListener('click', (e) => {
  e.preventDefault();
  display.innerHTML = '';
});

const teclaApagarUltimo = document.querySelector('.apagar-ultimo');

teclaApagarUltimo.addEventListener('click', (e) => {
  e.preventDefault();
  display.innerHTML = display.innerHTML.slice(0, -1);
});

const teclaRaiz = document.querySelector('.raiz');

teclaRaiz.addEventListener('click', (e) => {
  e.preventDefault();
  display.innerHTML = Math.sqrt(display.innerHTML);
});

const soma = document.querySelector('.soma');
const resultado = document.querySelector('.obter-resultado');

soma.addEventListener('click', (e) => {
  e.preventDefault();
  display.innerHTML += '+';
  let primeiroNumero = display.innerHTML.slice(0, -1);
  let segundoNumero = display.innerHTML.slice(-1);
  display.innerHTML = primeiroNumero + segundoNumero;

  resultado.addEventListener('click', (e) => {
    e.preventDefault();
    display.innerHTML = eval(display.innerHTML);
  });
});

