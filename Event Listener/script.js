
const container = document.getElementById("container")
const ele = document.getElementById("btn")

ele.addEventListener('click', function(){
    console.log("hello button")
}, true)

container.addEventListener('click', function(){
    console.log("hello div")
}, true)