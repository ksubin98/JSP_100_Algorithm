'use strict'

const a = prompt('알파벳 한 개를 입력해주세요');

if(('A' <= a) && ('Z' >= a)){
  console.log('Yes');
} else console.log('No');

// answer 
const data = prompt('알파벳을 입력하세요');
if (data === data.toUpperCase()){
  console.log('YES');
} else {
  console.log('NO');
} 
//toUpperCase()