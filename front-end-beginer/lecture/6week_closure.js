/*
 *  스코프는 블록단위, 함수단위로 쪼개진다.
 *  아래는 전역에서 해당 num1을 접근하는 방법이다.
 */
function privateClosure() {
    const num1 = 1;
    return num1;
} 

const num1 = privateClosure();

console.log(num1);


/*
 *   bind처럼 변형이 가능하도록 하다.
 */
const sum = function(num1) {
  return function(num2) {
    return num1 + num2;
  }
}

const sumArrow = (num1 => ((num2) => num1+num2));


console.log(sum(1)(2));     // => 3
console.log(sumArrow(1)(2));     // => 3

const sumOne = sum(1);
const sumTotal = sumOne(2);
console.log(sumTotal); // => 3


