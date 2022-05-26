var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var direction = document.querySelector('.linear-direction');

var body = document.querySelector('body');

function setGradient() {
  body.style.background = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  css.textContent = `${body.style.background}`;
  console.log(body.style.background);
}
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

direction.addEventListener('change', setGradient);
