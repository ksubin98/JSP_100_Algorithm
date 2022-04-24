//Q13
const n = prompt();

switch(n){
    case '1':
        console.log("수성");
        break;
    case '2':
        console.log("금성");
        break;
    case '3':
        console.log("지구");
        break;
    case '4':
        console.log("화성");
        break;
    case '5':
        console.log("목성");
        break;
    case '6':
        console.log("토성");
        break;
    case '7':
        console.log("천왕성");
        break;
    case '8':
        console.log("해왕성");
        break;
}

//answer
/*const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
const n = prompt('몇 번째 행성인가요?');
console.log(planets[n-1]);*/

//Q14
const a = prompt();

if((a%3)==0){
    console.log("짝");
}
else {
    console.log(a);
}
