const { set } = require("mongoose");

function log(a){
    console.log(a);
}

let a = new Set([1, 2, 3]);
let b = new Set([3, 2, 5]);


union = new Set([...a, ...b]);

log(union);