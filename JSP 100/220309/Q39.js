'use strict'

const result = prompt('문장을 입력해주세요');
const str = result.replace('q', 'e');
console.log(str);

//answer
//1. 함수 사용
const word = prompt('입력하세요.');

function replaceAll(str, searchStr, replaceStr) {
   return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word,"q","e"));

//2. 정규식 사용
const word = prompt('입력하세요.');

console.log(word.replace(/q/gi, 'e'));
//gi - g: 발생할 모든 pattern에 대한 전역검색
//   - i: 대/소문자 구분 안함