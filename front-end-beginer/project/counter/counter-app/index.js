const counter = new CounterClass(100);
document.querySelector('.showCount').innerHTML = counter.getCount();
document.querySelector('.increment').addEventListener('click', function(event){
   const interval = document.querySelector('.interval').value;
   counter.increment(interval);
   document.querySelector('.showCount').innerHTML = counter.getCount();
});
document.querySelector('.decrement').addEventListener('click', function(event){
   const interval = document.querySelector('.interval').value;
   counter.decrement(interval);
   document.querySelector('.showCount').innerHTML = counter.getCount();
});