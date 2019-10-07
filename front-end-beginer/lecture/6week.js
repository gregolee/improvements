/*
 *  Callback
 *    - javascript 에서는 코드가 비동기적으로 처리되는 것이 디폴트다. 이에따라 순서가 보장되면 안된다.
 *    - javascript는 스레드가 없다.
 *    - 이에따라 callback hell이 일어나는 이유다
 */
function FakeDOM() {}

FakeDOM.prototype.addEventListener = function(eventType, cbFunc) {
    if (eventType === 'click') {
        cbFunc('click 이벤트를 호출했습니다.');
    }
}

const DOM = new FakeDOM();

DOM.addEventListener('click', console.log);