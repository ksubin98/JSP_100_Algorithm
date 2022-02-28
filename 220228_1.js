'use strict'
//Q9
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second
// concat() - 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열을 반환
//answer
//var = result = year.concat("/", month, "/", day, " ", hour, ":", minute, ":", second)

console.log(result);

//Q10
var a = prompt();

for(var i=0; i<=a; i++){
    for(var j=a; j>i; j--){
        document.write('&nbsp'); //&nbsp - 공백
    }

    for(var j=0; j<=i; j++){
        document.write('*');
    }
    for(var j=1; j<=i; j++){
        document.write('*');
    }
    document.write('<br>');
}
//let 과 var 구분?하기?
//answer
const n = prompt('숫자를 입력하세요.');
let tree = '';

for(let i=1; i<=n; i++){
    let star = '';
    for(let j=1; j<=n-i; j++){
        star += ' ';
    }
    for(let k=1; k<2*i-1; k++){
        star += '*';
    }
    tree += star + '\n';
}
console.log(tree);

//Q11
let s = 0;
for(let x=1; x<=100; x++){
    s += x;
}

console.log(s);

//Q12
class Wizard {
    constructor(health, mana, armor){
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack(){
        console.log("파이어볼");
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();