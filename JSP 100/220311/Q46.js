let arr = [];
let sum = 0;

for(let i=0; i<20; i++){
  arr[i] = i+1 ;
}

arr.forEach((n) => {
  while(n !== 0) {
    sum += (n % 10);
    n = Math.floor(n/10);
  }
})
console.log(sum);

