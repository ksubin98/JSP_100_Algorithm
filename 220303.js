'use  strict'

//Q24
var name = prompt("(영어)이름을 입력해주세요");
console.log(name.toUpperCase());
//toUpperCase - 대문자변환

//Q25
const r = prompt("반지름을 입력해주세요");
const r2 = parseInt(r[0], 10);
console.log(r2*r2*3.14);

//answer
function circle(n){
  const result = n * n * 3.14;
  return result;
}

const r3 = prompt("원의 반지름을 입력하세요");
console.log(circle(r3));