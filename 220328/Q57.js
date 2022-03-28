let s = '';

for(let i=0; i<=1000; i++){
  s += i;
}
console.log(s.match(/1/g).length);