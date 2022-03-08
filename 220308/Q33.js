'use strict'

const number = prompt('숫자를 여러개 입력해주세요').split('').reverse();
console.log(number);

//answer
const data = prompt('숫자를 입력하세요').split(' ').reverse();
const result = '';

for(let i=0; i<data.length; i++){
  result += data[i];
}
console.log(result);