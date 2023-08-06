let name='Max';
let age = 29;
let hasHobbies = true;
// console.log(name);

// function summarizeUser(userName, userAge, userHasHobbies){
//     return 'Name: '+userName+', Age: '+userAge+', and the user has hobbies: '+userHasHobbies;
// }

// const summarizeUser = function(userName, userAge, userHasHobbies){
//     return 'Name: '+userName+', Age: '+userAge+', and the user has hobbies: '+userHasHobbies;
// };

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return 'Name: '+userName+', Age: '+userAge+', and the user has hobbies: '+userHasHobbies;
};

// const sum = (a,b)=>{
//   return (a+b);  
// };

const sum = (a,b)=> a+b;

const addOne = (a)=> a+1

const addRandom = ()=> 7+5


console.log(sum(1,4))
console.log(addOne(4))
console.log(addRandom())

console.log(summarizeUser(name,age,hasHobbies));

