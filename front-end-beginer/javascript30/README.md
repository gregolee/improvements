#front-end-beginer
#javascript30

#01-Javascript Drum Kit
1. css에서 실행되는 애니메이션이 있는데, 이를 제어할 수 있다. 
    - 'transitionend'로, 'transition'이 마치는 시점에서 이벤트를 활용하는 것으로 추측.
2. HTML tag audio를 활용해 재생을 컨트롤 가능하다.
    - 재생가능
    - 재생시점을 초기화가능
3. JQuery를 활용하지 않아도 document.querySelector()를 활용하면 JQuery selector와 동일하게 사용가능하다.
4. ES6 문법
    - 백틱 내 `abcde ${variable}` ${}의 위치에 소스코드를 대입하여 넣을 수 있다.
    - '=>' arrow function은 다소 익숙해질 필요가 있어보인다.

#02-CSS+JS_Clock
1. css에서 애니메이션을 담당하는 transition, 형태를 변하게 하는 transform을 활용
    - transform-origin: 100%; /*default : 0%, -?% ~ ?%, 중앙지점을 기준으로 모양을 변하게 한다.*/
    - transform: rotate(?deg); /*default: 0deg, 회전을 하며 각도를 지정한다.*/
    - transition: all 0.05s; /*에니메이션이 동작하는 총 시간을 설정한다. 이 부분을 빼먹어서 원하는 애니메이션이 동작하지 않았다.*/
    - transition-timing-function: cubic-bezier(?, ?, ?, ?); /*에니메이션이 동작하는 방식을 설정한다. chrome의 개발자도구를 활용하면 어떤 애니메이션으로 동작할지 시각화하여 볼 수 있고, 미리 활용도 가능하다. 잘 활용한다면 유려한 UI를 만들 수 있을 것으로 기대된다.*/
2. 굳이 jQuery를 활용하지 않아도 쉽게 style을 변경할 수 있다.
    - hourHand.style.transform = `rotate(${hourDegrees}deg)`;
3. setInterval(function(){}, microSeconds);
    - 자주 활용되는 문구이기는하나, 과거 무거운 function은 활용했다가 browser가 뻗어버리는 경우가 있었다. 조심히 활용토록 하자.