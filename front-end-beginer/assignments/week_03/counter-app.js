function Counter () {
    this.count = 0;
    this.getCount = function() {
        return this.count;
    }
    this.increment = function (num = 1) {
        this.count += num;
    }
    this.decrement = function (num = 1) {
        this.count -= num;
    }
}

const counter = new Counter();

console.log(counter.getCount()); // 0
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
counter.decrement();
console.log(counter.getCount()); // 1
/*
console.log(counter.getCount()); // 0
counter.increment(5);
console.log(counter.getCount()); // 5
counter.decrement(2);
console.log(counter.getCount()); // 3
*/
