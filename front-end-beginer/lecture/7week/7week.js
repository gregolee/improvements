//curry
const curry = (fn) => (a) => (b) => fn(a,b);
const sum = (a, b) => a + b;
const devide = (a, b) => a / b;

const sumFn = curry(sum);
const devideFn = curry(devide);

console.log(sumFn(1)(3));
console.log(devideFn(5)(4));


//IIFE 즉시실행함수
/**
 * 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지할 수 있을 뿐 아니라 IIFE 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법이다.
 */
const counterApp = (function() {
  let count = 0;
  const add = (num) => count += num;
  const getCount = () => `현재 count는 ${count}입니다.`
  return { 
    getCount: getCount,
    add: add
  }
})();

console.dir(counterApp);
console.log(counterApp.add(123));
console.log(counterApp.getCount());


