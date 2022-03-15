function stemp(s) {
  s.sort((a,b) => {
    return a-b;
  });

for(let i=0; i < s.length-1; i++){
  if(s[i]+1 !== s[i+1]){
    return 'NO';
    }
  }
  return 'YES';
}

const num = prompt('숫자를 입력하세요').split(' ').map(num => parseInt(num,10));
console.log(stemp(num));