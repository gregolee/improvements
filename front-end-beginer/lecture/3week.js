//Hoisting
console.log(a);

var a = 10;

//위의 내용과 아래의 코드가 같다.
var a;

console.log(a);

a = 10;

//그래서 const를 활용하면 위의 undefined가 아닌 error를 내보낸다.
console.log(b);

const b = 10;


console.log()


var a =1;

function outer() {
    console.log(a);

    function inner() {
        console.log(a);
        var a = 3;
    }

    inner();

    console.log(a);
}

outer();
console.log(a);

//1
//undefined
//1
//1