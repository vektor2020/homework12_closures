function calcSum(){
    let a = 0;
    return function(b){
        return a = a + b;
    };
}
const sum = calcSum();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));


function createCounter(start, step){
    let count = start;
    return function(reset){
        if (reset) {
            return count = start;
        }else {
            return count += step;
        }
    }
}
const counter = createCounter(2, 3);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(true));
console.log(counter());