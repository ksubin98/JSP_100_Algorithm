const s = prompt('입력해주세요');
const n = 25 + parseInt((s.length/2),10);

const a = s.padStart(n, '=');
console.log(a.padEnd(50, '='));
