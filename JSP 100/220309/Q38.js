'use strict'

const score = prompt('점수를 입력해주세요').split(' ');
let rank = 0;

for(let i=0; i<=score.length; i++){
  if(score[i] >= score[i+1]){
    score[i] = score[i+1];
    rank += 1;
  }
}
console.log(rank); // result:7

// !!! 자바스크립트라는 사실을 까먹지말자 !!!!
//answer

const scores = prompt('점수입력').split(' ').map(function(n){
  return parseInt(n, 10);
});
// 점수입력 후 공백으로 구분한다 -> map()을 이용하여 string을 특정 10진수로 변환(정수형)

scores.sort((a, b) => { // sort()정렬
  return a-b;     // a-b : 두 숫자의 차를 이용하여 음수값인지 양수값인지 확인 -> 오름차순 정렬
});

let count = 0;
let arr = [];

while (arr.length < 3) { // arr의 배열 길이가 3 미만일동안 (1~3위찾는 동안)
  let n = scores.pop(); 
  if (!arr.includes(n)){ // includes() - 특정 요소를 포함하는지 식별
    arr.push(n);
  }
  count += 1;
}

console.log(count);