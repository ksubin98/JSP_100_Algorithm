'use strict'

const number = prompt('숫자를 입력해주세요');
let mul = '';

for(let i=1; i<=9; i++){
  mul += number * i + ' ';
}
console.log(mul);