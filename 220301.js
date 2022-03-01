'use strict'
//Q15
const name = prompt('이름을 입력해주세요');
console.log(`안녕하세요. 저는 ${name} 입니다.`);
//es6부터는 backtick 문자열 안에서 $와 중괄호 표현식을 사용할 수 있다.
//이를 '템플릿 리터럴' 이라 한다.

//Q16
const a = prompt();
const b = a.split('').reverse().join('');
//split(), reverse(), join() 
console.log(b);

//Q17
const height = prompt('키를 입력하시오');
if(height>150){
    console.log("YES");
}else {
    console.log("NO");
}

