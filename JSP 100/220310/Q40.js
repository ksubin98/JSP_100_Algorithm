'use strict'

const limit = prompt('제한 무게를 입력해주세요');
const n = prompt("몇명인지 입력해주세요");

let count = 0;
let total = 0;

for(let i=1; i<=n; i++){
  total += parseInt(prompt('몸무게를 입력해주세요'));
  if(total <= limit) {
    count = i;
  }
}
console.log(count);