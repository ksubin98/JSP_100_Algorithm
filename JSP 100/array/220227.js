'use strict'
//Q1
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop(); 
// pop vs slice 

//Q2
var arr = [200,100,300];
arr.pop();
arr.push(10000);
arr.push(300);

//answer
arr.splice(2,0,10000);

console.log(arr);