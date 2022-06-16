// Coletar as teclas pressionadas e mostrar na tela
const numeros = document.querySelectorAll('.numeros');
const display = document.querySelector('.valores');

numeros.forEach(tecla => {
  tecla.addEventListener('click', (e) => {
    e.preventDefault();
    display.innerHTML += e.target.innerHTML; 
  });
});

// Limpar o display
const teclaApagar = document.querySelector('.apagar');

teclaApagar.addEventListener('click', (e) => {
  e.preventDefault();
  display.innerHTML = '';
});

// Limpar o último número digitado
const teclaApagarUltimo = document.querySelector('.apagar-ultimo');

teclaApagarUltimo.addEventListener('click', (e) => {
  e.preventDefault();
  display.innerHTML = display.innerHTML.slice(0, -1);
});

// Coletar as teclas das operações
const teclaSoma = document.querySelector('.soma');
const teclaSubtracao = document.querySelector('.subtracao');
const teclaMultiplicacao = document.querySelector('.multiplicacao');
const teclaDivisao = document.querySelector('.divisao');
const teclaFatorial = document.querySelector('.fatorial');
const resultado = document.querySelector('.obter-resultado');

// FUnção para calcular o resultado
function calculo() {
  let primeiroNumero = display.innerHTML.slice(0, -1);
  let segundoNumero = display.innerHTML.slice(-1);
  display.innerHTML = primeiroNumero + segundoNumero;

  resultado.addEventListener('click', (e) => {
    e.preventDefault();
    display.innerHTML = eval(display.innerHTML);
  });
};

// Soma
teclaSoma.addEventListener('click', (e) => {
  e.preventDefault();
  display.innerHTML += ' + ';
  calculo();
});

// Subtração
teclaSubtracao.addEventListener('click', (e) => {
  e.preventDefault();
  display.innerHTML += ' - ';
  calculo();
});

// Multiplicação
teclaMultiplicacao.addEventListener('click', (e) => {
  e.preventDefault();
  display.innerHTML += ' * ';
  calculo();
});

// Divisão
teclaDivisao.addEventListener('click', (e) => {
  e.preventDefault();
  display.innerHTML += ' / ';
  calculo();
});

// Fatorial
teclaFatorial.addEventListener('click', (e) => {
  e.preventDefault();
  display.innerHTML += '!';
  // Calculo de fatorial
  resultado.addEventListener('click', (e) => {
    e.preventDefault();
    let fatorial = 1;
    let numero = display.innerHTML.slice(0, -1);
    for (let i = numero; i > 0; i--) {
      fatorial *= i;
    }
    display.innerHTML = fatorial;
  });
});
