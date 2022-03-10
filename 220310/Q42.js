'use strict'

const a = prompt('몇 월인지 입력하세요');
const b = prompt('며칠인지 입력하세요');

function solution (a, b){
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const date = new Date('2020-'+a+'-'+b);
  return day[date.getDay()];
}

console.log(solution(a,b));