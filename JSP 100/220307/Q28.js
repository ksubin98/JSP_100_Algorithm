'use strict'

const result = prompt('문자를 입력해주세요');

for(let i=0; i < result.length-1; i++){
  console.log(result[i], result[i+1]);
}