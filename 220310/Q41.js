//!!!! function 사용하자 !!!!!
//Q41
const data = prompt('숫자를 입력해주세요');
console.log(data);

for(let i=2; i<data; i++){
  if(data % i == 0) {
    console.log("Yes");
  }
  else console.log("No");
}

//answer
const num = prompt('숫자를 입력하세요');
function check_prime(num) {
  for(let i=2; i<num; i++){
    const result = num % i;
    if(result === 0) {
      console.log("NO");
      return false;
    }
  }
  if(num === 1){
    console.log('NO')
    return ;
  }
  console.log('YES');
}

check_prime(num);