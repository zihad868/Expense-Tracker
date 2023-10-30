numbers = [1, 2, 3];

var sum = numbers.reduce((current, previous) =>{
    return previous + current
});

console.log(sum)