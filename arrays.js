let  hobbies = ['Sports','Reading','Travelling'];

// for(h of hobbies){
//     console.log(h)
// }

// console.log(hobbies.map(hobby=>{
//     return 'Hobby: '+hobby;
// }))

// console.log(hobbies.map(hobby=> 'Hobby: '+hobby));
// hobbies.push('Programming');
// console.log(hobbies)

let hobbiesArr = hobbies.slice();
let coppiedHobbiesArr = [hobbies];
let coppiedHobbiesArr2 = [...hobbies];

console.log(hobbies);
console.log(hobbiesArr);
console.log(coppiedHobbiesArr);
console.log(coppiedHobbiesArr2);