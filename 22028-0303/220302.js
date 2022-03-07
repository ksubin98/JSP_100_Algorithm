'use strict'

//Q18
const score = prompt('점수를 입력해주세요').split('');
const sum = 0;

for(let i; i<3; i++){
    sum += i;
    sum/3;
}
console.log(sum);
//answer
const scores = prompt('점수를 입력해주세요').split('');
let sum2 = 0;
for(let i=0; i<3; i++){
    sum2 += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입 변환
    // parseInt()
}
console.log(Math.floor(sum2/3)); 
//Math.floor - 소수점 자리를 모두 버림

//Q19
const number = prompt('2개의 숫자를 입력하세요').split(' ');
console.log(Math.pow(parseInt(number[0], 10), parseInt(number[1], 10)));

//Q20
const n = prompt('숫자를 입력하세요').split(' ');
const n2 = Math.floor( parseInt(number[0], 10) / parseInt(number[1], 10) );
const n3 = (parseInt(number[0], 10)) % (parseInt(number[1], 10));

console.log(n2, n3);