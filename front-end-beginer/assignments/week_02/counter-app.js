const Counter = {
    count : 0,
    getCount : function() {
        return this.count;
    },
    increment : function(num = 1) {
        this.count += num;
    },
    decrement : function(num = 1) {
        this.count -= num;
    },
}
console.log(Counter.getCount()); // 0
Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // 2
Counter.decrement();
console.log(Counter.getCount()); // 1
/*
console.log(Counter.getCount()); // 0
Counter.increment(5);
console.log(Counter.getCount()); // 5
Counter.decrement(2);
console.log(Counter.getCount()); // 3
*/
