var javaScript = {
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function () {
        this.libraries.forEach( (a) => {
            console.log(this.name, a)
        })
    }
}

javaScript.printLibraries()