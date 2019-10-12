window.onload = function() {
    const list = document.querySelectorAll('.list');
    const clickEventFn = (ele) => ele.addEventListener('click', (e) => {
        /**
         * Event Bubbling, Capturing, delegation
         * 1. Bubbling : 아래 -> 위 로 이벤트를 감지
         * 2. Capturing : 위 -> 아래 로 이벤트를 감지
         */
        const isDelegation = function(nodeName) {
            return function(element) {
                return e.target.nodeName = element;
            }
        }
        const isButton = isDelegation('BUTTON');
        const isLi = isDelegation('LI');
        const isUl = isDelegation('UL');

        if(isButton) {
            console.log('버튼을 클릭하셨네요.');
        } else if(isLi) {
            console.log('LI을 클릭하셨네요.');
        } else if(isUl) {
            console.log('UL을 클릭하셨네요.');
        }
    });
    
    //List Constructoring
    //1. [...list]
    //2. Array.from(list)
    list.forEach(clickEventFn);

}

console.log('HELLO')