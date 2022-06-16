var _ = require('lodash');

const array = [1, 2, 3, 4, 5, 6];
const deepArray = [[1, 2, [3, [4], [5, 6]]]];
console.log(_.flattenDeep(deepArray));
console.log(_.without(array, 3));

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

// "dependencies": {
//   "lodash": "^4.17.21"
//    semver: 4 = major release
//           17 = minor release
//           21 = patch release (fixing bugs)
// }
