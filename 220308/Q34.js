'use strict'

const unsorted = prompt('키를 입력해주세요');
const sorted = "";

sorted == unsorted
          .split(" ")
          .sort(function(a,b) {
            return a-b;
          })
          .join(" ");

if(unsorted == sorted){
  console.log("YES");
}else console.log("NO");