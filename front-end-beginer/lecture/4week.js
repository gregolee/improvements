/*
 * 붕어빵
 *  - 온도로 바삭함 
 *  - 맛 4가지(기본은 팥)
 *  - 굽는 메서드 필요
 */
 const Bread = function(shape='triangle', color='brown', tempo=65, taste='redBean') {
     this.shape = shape;
     this.color = color;
     this.tempo = tempo;
     this.taste = taste;
     this.cost = 1000;
}
    
Bread.prototype.crunchy = {
    rare: 'RARE',
    mediumRare: 'MEDIUM RARE',
    medium: 'Medium',
    mediumWell: 'MEDIUM WELL',
    wellDone: 'wellDone'
}
Bread.prototype.getCrunchy = function() {
    const crunchyValue = this.tempo<50 && 'rare'
            ||  this.tempo<60 && 'midiumRare'
            ||  this.tempo<70 && 'medium'
            ||  this.tempo<80 && 'mediumWell'
            ||  'wellDone';
    return this.crunchy[crunchyValue];
};
Bread.prototype.getTaste = function() {
    return this.taste;
};
Bread.prototype.bake = function() {
    return `Here is ${this.getCrunchy()} taste fishbread!!!`;
}

 const b1 = new Bread('squar', 'blue', 30);
 console.log(b1.getCrunchy());
 console.log(b1.getTaste());
 console.log(b1.bake());

 const b2 = new Bread();
 console.log(b2.getCrunchy());
 console.log(b2.getTaste());
 console.log(b2.bake());

 //======
 /*
    생성을 함과 동시에 메서드들을 프로토타입으로 변환시켜준다.
 */

class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age || 9;
    }
    sayName() {
        return 'aaaaaa';
    }
}

//babel? webpack?
//=======babel 을 활용하면 transfileing이 가능하다

//각 앱 제대로 정리할 것
//각 앱 UI작성