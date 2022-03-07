'use strict'

//Q26
const planet = prompt('행성의 한글이름을 입력해주세요');
switch (planet) {
  case '수성':
    console.log("Mercury");
    break;
  case '금성':
    console.log("Venus");
    break;
  case '지구':
    console.log("Earth");
    break;
  case '화성':
    console.log("Mars");
    break;
  case '목성':
    console.log("Jupiter");
    break;
  case '토성':
    console.log("Saturn");
    break;
  case '천왕성':
    console.log("Uranus");
    break;
  case '해왕성':
    console.log("Neptune");
    break;

  default:
    break;
}

//answer
const planets = {
  '수성' : 'Mercury',
  '금성' : 'Venus',
  '지구' : 'Earth',
  '화성' : 'Mars',
  '목성' : 'Jupiter',
  '토성' : 'Saturn',
  '천왕성' : 'Uranus',
  '해왕성' : 'Neptune',
};

const name = prompt("행성의 이름을 입력하세요.");
console.log(planets[name]);