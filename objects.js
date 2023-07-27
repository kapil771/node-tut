
const person = {
    name:'Max',
    age:29,
    // It is giving error as "this" is working for global node in this example.
    // greet:()=>{
    //         console.log('My name is : '+this.name+' and my age is:', this.age);
    //     }

    // this is working fine now.
    // greet:function(){
    //     console.log('My name is : '+this.name+' and my age is:', this.age);
    // }

    // this is working fine now.
    greet(){
        console.log('My name is : '+this.name+' and my age is:', this.age);
    }
}

person.greet();

