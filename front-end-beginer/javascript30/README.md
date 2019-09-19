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

#03-Playing with CSS vatiables and JS
1. css의 변수(variable)을 관리가 가능.
    - document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      ; 위와 같은 형식으로 해당 변수를 수정이 가능하게끔 해두었다. 상세한 컨트롤 방법은 css에 대한 학습이 필요한 것으로 생각된다.
2. EventListener
    - change : 값이 변경된 후를 감지함. 드래그하는 동안의 값의 변경은 감지하지 않음
    - mousemove : 마우스가 이동하는 것음 감지한다. 추후 강의에서 함수를 추가하게 되는데, 모든 움직임을 감지하기 때문에 리소스를 줄여주기 위한 함수를 추가해야 한다.
3. input의 type
    - range : 값의 범위를 드래그하여 사용한다.
    - color : 색을 지정할 수 있는 타입.
4. html tag 내 data 관리
    - tag 내 'data-'라는 접두어를 붙여서 데이터를 관리할 수 있다.
    - const suffix = this.dataset.sizing || '';
        ; this는 해당 tag의 인스턴스를 뜻하며, dataset을 호출하면 해당 인스턴스의 모든 'data-'로 나타낸 것들을 객체형태로 호출할 수 있다.

#04-Array Cardio Day 1
1. Array 내 prototype 함수 중 유용한 것들이 다음과 같이 있다.
    - 1.1. Array.prototype.filter()
        ; 해당 배열을 순회하면서 필터링을 한 값을 return해준다. true를 return하면 해당 element가 담긴 배열을 return 한다.
    - 1.2. Array.prototype.map()
        ; 해당 배열을 순회하면서 가공된 값이 담긴 배열을 return한다.
    - 1.3. Array.prototype.sort()
        ; 해당 배열을 순회하면서 오름차순, 내림차순으로 정렬한다.
    - 1.4. Array.prototype.reduce()
        ; map()의 경우 element마다 가공된 값을 배열으로 return했다면, reduce()의 경우는 customizing하게 가공한 값을 전달할 수 있다.
        -- map() :: element만 가공하여 배열에 담는다. 순회하면서 정리된 누적값, 이전 element와의 비교는 할 수 없다.
        -- reduce() :: map()보다 포괄적인 return이 가능하다. 순회하면서 return된 값을 토대로 편집이 가능하다. 이를 위해서는 반드시 return하는 값의 datatype을 일치해줘야 한다.

2. 1번에서 설명한 함수들을 활용하기 위해서는 datatype이 Array로 변경되어야 사용할 수 있다.
    - const links = category.querySelectorAll('a');     //datatype이 nodeList로서 map()이 prototype에 들어 있지 않음. 이에 따라 Array로 변경해줘야 함.
    - const links = Array.from(category.querySelectorAll('a'));   //ES6 이전
    - const links = [...category.querySelectorAll('a')];   //ES6

3. 1번의 함수들은 java에서는 stream으로 검색하면 활용이 가능하다.
    - java에서는 datatype에 대한 조건이 까다로워서, javascript처럼 동일하게 사용할 수는 없다.

4. 1번의 함수들은 과거 for문(statement)보다 훨씬 빠른 순회가 가능하다.
    - java의 stream에서 해당 내용을 정리할 예정.

5. 배열을 리턴하는 일부 함수의 경우 다음과 같이 활용이 가능하다.
    - const parts = lastOne.split(', ');          //이와 같이 하면 코드가 지저분해지기 쉽다. 불필요하게 길어지는 경우가 존재한다.
    - const [aLast, aFirst] = lastOne.split(', ');  //현재와 같이 사용하면 간결하고 명시적으로 활용이 가능하다.

#05-Flex-Panels-Image-Gallery
1. CSS에 대한 이해가 많이 필요하다...
    - .panels { display: flex; } : 해당 tag의 하위 html tag들을 flex로 보여주는 역할을 한다. default로 가로로 배열을 보여주게끔한다.
    - .panel {
        flex: 1;     : 가로로 정렬된 패널이 각 1:1:1:1:1의 비율로 정돈하게끔 해준다. 이 값이 없으면 화면이 조정됨에 따른 유동적인 변화가 이뤄지지 않는다.
        justify-content: center;        : https://css-tricks.com/almanac/properties/j/justify-content/
        align-items: center;        : https://css-tricks.com/almanac/properties/a/align-items/
        display: flex;      : flex 활용
        flex-direction: column;     : flex가 정렬되는 방향
      }
    - .panel > * {             : 하위의 자식 노드를 모두 선택. 자식의 자식까지 해당하지는 않는다.
        border: 1px solid red;
        flex: 1 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    -   .panel > *:first-child { transform: translateY(-100%); }
        .panel.open-active > *:first-child { transform: translateY(0); }
        .panel > *:last-child { transform: translateY(100%); }
        .panel.open-active > *:last-child { transform: translateY(0); }
        ; first-child, last-child - css에서 자식노드 중 선택할 수 있는 예약어로 추측된다.

2. this.classList.toggle('open-active');
    - classList : class를 List로 반환
    - toggle('open-active') : 켰다, 껐다하는 on/off 스위치처럼 'open-active'라는 class가 없으면 추가하고, 존재하면 없앤다.