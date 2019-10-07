/*
 *  'this'를 명시적으로 조작하기 좋은 방식이 call, apply, bind이다.
 *    - 함수 : window(Browser), global(node.js)
 *    - 생성자 : 생성된 인스턴스
 *    - 이벤트함수 : event.target
 *    - 객체 : 해당 객체
 *     ...
 *     ==============> 'this'를 강제적으로 지정하기 위해서 활용
 * 
 *    *** 순수함수 : 들어오는 값과 나오는 값이 일정해야 된다. ex) 로그인아이디와 패스워드를 전달하면 항상 로그인이 되는 함수
 *         - this는 실행컨텍스트라서 순수함수를 적용하기 어렵다.
 */
//call : 함수, 생성자함수를 상속할대 많이 쓰임
function consoleMgr() {
    console.log(this)
}

const fakeWindow = {
    name: 'fake'
}
consoleMgr();
consoleMgr.call(fakeWindow);


function consoleMgr2(message) {
    console.log(`${message}이며: this는 ${this}`);
}
consoleMgr2.call(fakeWindow, 'hello');

/*
 *  call을 이용한 생성자 함수 확장(상속)
 *    - 간단한 상속은 아래와 같이 구현한다. (objectCreate??를 활용하여 하는 것이 안전))
 */
//Legacy
function Person(name, age) {
    this.name = name;
    this.age = age;
}
function Jooseon(name, age) {
    Person.call(this, name, age);   //상속
    this.hobby = 'game';
}
const jooseon = new Jooseon('주선', 99);
console.log(jooseon);

//새로운 상속 문법 (ES6)
class PersonES6 {
  constructor() {
    this.name = name;
    this.age = age;
  }
}

class JooseonES6 extends PersonES6 {
  constructor(name, age) {
    super(name, age);
    this.hobby = 'game';
  }
}
const jooseonES6 = new Jooseon('주선ES6', 99+' ES6');
console.log(jooseonES6);

//apply : 배열
function consoleMgr3(message1, message2, message3) {
    console.log(`${message1}_${message2}_${message3}이며: this는 ${this}`);
}
const arr = ['123', '456', '789'];
consoleMgr3.apply(fakeWindow, arr);


//bind : 
//higher-order function 참조
const pokemon1 = {
  firstname: 'Pika',
  lastname: 'chu',
  getPokeName: function(firstname, lastname) {
    return  `${this.firstname} ${this.lastname} Pika! Pika!`;
  },
};
const pokemon2 = {
  firstname: 'Pision',
  lastname: 'Two',
  getPokeName: function() {
    return  `${this.firstname} ${this.lastname} zzZzzzZzzzzzzZ`;
  },
};
const pokemon3 = {
  firstname: 'Evi',
  lastname: 'Fire',
  getPokeName: function() {
    return  `${this.firstname} ${this.lastname} pretty!!!`;
  },
};

const pokemonName = function(snack, hobby) {
    return `${this.getPokeName()} loves ${snack} and ${hobby}.`;
}

//call
const resultCall = pokemonName.call(pokemon1, 'Toritos', 'playing card games');
console.log(resultCall);
/*
이와 같이 작성하면 오류가 발생한다.
또한 call 호출시 parameter가 고정이어야 하는데, bind는 유동적으로 변경이 가능하도록 해준다.
const resultCall1 = pokemonName.call(pokemon1);
console.log(resultCall1('Toritos', 'playing card games')); 
*/

//bind
const resultBind1 = pokemonName.bind(pokemon1);
console.log(resultBind1('Pision', 'Two'));

const resultBind2 = pokemonName.bind(pokemon2);
console.log(resultBind2('Pision', 'Two'));

const resultBind3 = pokemonName.bind(pokemon3);
console.log(resultBind3('Pision', 'Two'));