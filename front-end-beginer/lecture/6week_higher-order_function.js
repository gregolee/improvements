/*
 *  higher-order function
 */
const sum = (num1, num2) => num1 + num2;
const genMsg = (num, name) => `${name}의 가격을 합치면 ${num}이네요`;

function consoleMgr(num1, num2) {
  return genMsg(sum(num1, num2), this.name);  //모니터의 가격을 합치면 1500이네요
  //return genMsg(sum, this.name);    //모니터의 가격을 합치면 (num1, num2) => num1 + num2이네요
}

const obj = {
  name: '모니터'
}

const result = consoleMgr.apply(obj, [500, 1000]);
console.log(result);