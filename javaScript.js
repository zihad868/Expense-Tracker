var prinFunctionName = function (obj){
    obj.printName = function (){
        console.log(this.name)
    }
}

sakib = {
    name: 'sakib',
    age: 25
}

prinFunctionName(sakib)

sakib.printName()