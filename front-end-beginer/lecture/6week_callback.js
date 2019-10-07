/*
 *  1. 콘솔을 직어주는 함수를 만든다.
 *  2. 해당 함수는 콘솔 메서드와 출력할 문자열을 받아서 출력만 해준다.
 *  3. console.log, dir, warn, error, info 등 다양하게 받아서 처리
 */
/*
function printMsg(consoleFunc, msg) {
  consoleFunc(msg);
}

printMsg(console.error, '에러!!!');
printMsg(console.warn, '경고');
printMsg(console.info, '정보');
printMsg(console.log, '로그 기록');
printMsg(console.dir, document.querySelector('body'));
*/
const consoleManager = function({ 
    printMessage = 'There is no message.', 
    callbackFn = console.log
}) {
    callbackFn(printMessage);
}

consoleManager({
  printMessage: '안녕하세요',
  callbackFn: console.log,
});

//Lagacy version
const consoleManager = function({ printMessage, callbackFn }) {
    const message = printMessage || 'There is no message';
    const fn = callbackFn || console.log;
    fn(message);
}