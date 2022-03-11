
const num = prompt('숫자를 입력해주세요').split('');
let sum = 0;

for(let i=0; i<num.length; i++){
  sum = sum + parseInt(num[i], 10);
}

console.log(sum);

//answer
let n = prompt('숫자를 입력하세요.');
let s = 0;

while(n !== 0) {
  s += (n % 10);
  n = Math.floor(n/10);
}

console.log(s);