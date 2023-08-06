const person = {
    name: 'kapil',
    age:30,
    greet(){
        console.log('My name is '+this.name);
    }
}

const printName = ({name, age})=>{
    console.log(name);
    console.log(age);
}
printName(person);

const {name, age} = person;
console.log(name, age);

const hobbies = ['Sports','Reading','Programming'];

const [hobby1,hobby2,hobby3] = hobbies;
console.log(hobby1,hobby2,hobby3);