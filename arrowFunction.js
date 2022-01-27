let js = {
    name: "JavaScript",
    libraries: ['Angular', 'Vue', 'React'],
    printLibraries : function(){
        this.libraries.forEach( (a) =>{
            console.log(`${this.name} loves ${a}`)
        } );
    }

};

js.printLibraries();
//arrow js
let myName = () => console.log("MD. ABRAR FAHIM");

myName();