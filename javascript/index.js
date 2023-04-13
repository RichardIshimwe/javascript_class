// let loop = (n) => {
// for(let z = 2;z <= n;z++){
//     console.log("multiplication table of:", z);
//     for(let i = 1;i <= 12;i++){
//         const result = z * i;
//         console.log(z,"*",i,"=",result);
//     }
// }
// }
// loop(6);

/*
condition statements

1.
if statement
operations
*or ||
*and && assignment
i(condition){
    statements
}
if else
2.
switch 

*/

console.log("star pattern");
/*

8
88
888
8888
88888

*/ 
// looping:it is a must to have terminating point(number)
let firstName = 'serge';
let secondName = 'rudasingwa';
let fullName = firstName + firstName;
console.log("My name is:", fullName)
let pattern = (n) =>{
    for(let i = 1; i <= n;i++){
        let prints = '';
        for(let j = 1;j <= i;j++){//1.prints:'8',2.prints:'88',prints:''
         prints = prints + '8';
        }
       console.log(prints);
    }
}

let conditions = (num) =>{
if(false){
    console.log("voted yes")
}
else if(num = 2){
    console.log("voted nothing")
}
// if(num === 0 || num === 6 || num == 7){
//     console.log("voted no");
// }
}
//confirm:1,11,9
//reject:0,6,7
// conditions(9);

// let switchExample = (vote) =>{
// switch (vote){
//    case 1:
//     console.log("voted yes");
//     break;
//    case 0:
//     console.log("voted no");
//     break;
//    default:
//     console.log("invalid vote provide")
//     break;
// }
// }

// switchExample(0);
/*
array stores items of the same data type
built-in method
.length
arrangement of array items
index[0,1,2,3..................n]
[1,2,3,4,5,6,7,8]actual array
[0,1,2,3,4,5,6,7]index
arrayName[index]//access the item on index
how to append an item on array
arrayName.push(newItem);
remove the last item
arrayName.pop()//nothing to pass in
append an item on the beginning of array
arraName.unshift(newItem)
delete the firt item 
arrayName.shift()
*/

let arrayExample = [1,2,3,4,5,6,7,8]
let index = 0;

console.log("array Example" ,arrayExample);
console.log("arrayLength", arrayExample.length);
console.log(`the item on index ${arrayExample.length - 1}:`, arrayExample[arrayExample.length - 1]);
for(let i = 0; i < arrayExample.length; i++){
    console.log(arrayExample[i]*2)
}
arrayExample.push(9);
console.log("new array:", arrayExample)
arrayExample.pop()
console.log("poped array:", arrayExample)
arrayExample.shift();
console.log("shift operation on array:", arrayExample);
arrayExample.unshift(90);//append on the be...
console.log("shift operation on array:", arrayExample);
// pattern(2);
/*
1.iterate 5 times
(1)check if 1 <= 5
*/
/*
access property in object
objectName.property 

 */
let userArray = [];
let sergeDetails = {firstName:"serge",lastname:"rudasingwa",job:"system admin"};
let richrdDetails = {firstName:"Richard",lastname:"Ishimwe",job:"engineer"};
userArray.push(sergeDetails);
userArray.push(richrdDetails)
console.log("first name of serge",sergeDetails.firstName)
console.log("all users:", userArray);
let login = (user) =>{
 for(let i = 0; i < userArray.length; i++){
    if(user === userArray[i].firstName){
        return console.log("welcome to admin dashbord");
    }
    console.log("please do a signup");
 }
}

login("Richard");
// assignment

// nested if statement
/**
 * rich(20000-40000)
 * moderate(10000-19999)
 * poor(<10000)
 */
// develop an app which determine the status of someone

/*
an app which redirect someone according to his/her role
1.admin dashboard
2.agent page
3.customer page
4.guest page
*/
