const status = false;

console.log("Task 1")

const promise = new Promise(function(resolve, reject){
    if(status){
        resolve("Task 2");
    }else{
        reject("Failed");
    }
}, 1000)

promise.then(function(value){
    console.log(value);
})

promise.catch( function(err){
    console.log(err);
})

console.log("Task 3")