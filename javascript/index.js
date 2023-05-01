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

// console.log("star pattern");
/*

8
88
888
8888
88888

*/
// looping:it is a must to have terminating point(number)
// let firstName = 'serge';
// let secondName = 'rudasingwa';
// let fullName = firstName + firstName;
// console.log("My name is:", fullName)
// let pattern = (n) =>{
//     for(let i = 1; i <= n;i++){
//         let prints = '';
//         for(let j = 1;j <= i;j++){//1.prints:'8',2.prints:'88',prints:''
//          prints = prints + '8';
//         }
//        console.log(prints);
//     }
// }

// let conditions = (num) =>{
// if(false){
//     console.log("voted yes")
// }
// else if(num = 2){
//     console.log("voted nothing")
// }
// if(num === 0 || num === 6 || num == 7){
//     console.log("voted no");
// }
// }
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

// let arrayExample = [1,2,3,4,5,6,7,8]
// let index = 0;

// console.log("array Example" ,arrayExample);
// console.log("arrayLength", arrayExample.length);
// console.log(`the item on index ${arrayExample.length - 1}:`, arrayExample[arrayExample.length - 1]);
// for(let i = 0; i < arrayExample.length; i++){
//     console.log(arrayExample[i]*2)
// }
// arrayExample.push(9);
// console.log("new array:", arrayExample)
// arrayExample.pop()
// console.log("poped array:", arrayExample)
// arrayExample.shift();
// console.log("shift operation on array:", arrayExample);
// arrayExample.unshift(90);//append on the be...
// console.log("shift operation on array:", arrayExample);
// pattern(2);
/*
1.iterate 5 times
(1)check if 1 <= 5
*/
/*
access property in object
objectName.property 

 */
// let userArray = [];
// let sergeDetails = {firstName:"serge",lastname:"rudasingwa",job:"system admin"};
// let richrdDetails = {firstName:"Richard",lastname:"Ishimwe",job:"engineer"};
// userArray.push(sergeDetails);
// userArray.push(richrdDetails)
// console.log("first name of serge",sergeDetails.firstName)
// console.log("all users:", userArray);
// let login = (user) =>{
//  for(let i = 0; i < userArray.length; i++){
//     if(user === userArray[i].firstName){
//         return console.log("welcome to admin dashbord");
//     }
//     console.log("please do a signup");
//  }
// }

// login("Richard");
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
// let allArray = [[1,2,3,4,5,5],[]];

// let allUsers = [
//   { firtsName: 'john', secondName: 'ntwali', role: 'user' },
//   { firtsName: 'king', secondName: 'kale', role: 'customer' },
//   { firtsName: 'queen', secondName: 'cse', role: 'guest' },
//   { firtsName: 'serge', secondName: 'rudasingwa', role: 'admin' },
// ];
// // 1.2.

// let adminArray = [];

// let sortAdmin = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let adminExist = array[i].role;
//     if(adminExist === 'admin') {
//      adminArray.push(array[i]);
//      console.log("admin is found", array[i].firtsName);
//      for( let j = 0; j < array.length; j++){
//         let guestExist = array[j].role;
//         if(guestExist === "guest"){
//             return console.log("the guest is found");
//         }
//      }
//     }
//     //console.log("adminexist:", adminExist);
//     // console.log("value:",i,"of adminExist", adminExist);
//     // if(adminExist === "guest"){
//     //   console.log("guest is found to be:", array[i].firtsName);
//     // }
//   }
//   console.log("All admins are:", adminArray)
// //   console.log("there is no adim in our array")
// };
// sortAdmin(allUsers);

// alert("hellooooo")
// let htmlButton = document.getElementById('btn');
// let htmlP = document.getElementById('paragraph');
// let paragraphTwo = document.querySelector('.down');
// let buttonTwo = document.querySelector('.dropDown');

// console.log('reading html button', htmlButton);
// /*
// addeventlistener params
// addEventListener(event, callbackFunction)
// */
// htmlButton.addEventListener('click', () => {
//   // window.alert("i am clicked");
//   console.log('i am clicked');
//   htmlP.innerHTML = 'from submitted';
// });

// buttonTwo.addEventListener('click', () => {
//   paragraphTwo.innerHTML = 'class was selected successful';
// });

/*
1.increment and decrement a number with two different buttons.
2.sort array of object and serch for a guest if a role of admin is found
in the array.
 */

/*
bookmark app
1.storing app link(ex:google, facebook, youtube)

a.figma
b.html and css
check student only if  a leader exist
-find student and console.log his/her name
-also display a message when a leader or student is not found
*/

// let visitorsArray = [{name: "trey", age: 12, title: "student"},{name: "kalisa", age: 30, title: "leader"},{name: "brown", age: 12, title: "student"},{name: "white", age: 30, title: "ceo"},
//                      {name: "grey", age: 43, title: "teacher"},{name: "black", age: 31, title: "leader"},{name: "indigo", age: 2, title: "student"},{name: "kamariza", age: 70, title: "ceo"}]

// let checkVisitors = (array) =>{

//  for( let h = 0;h < array.length; h++ ){
//     let checkLeader = array[h].title;
//     if(checkLeader === "leader")
//     {
//     // console.log("leader is found");
//     }
//  }

// }
// checkVisitors(visitorsArray);

// let checkUser = (array, age) =>{
//     for( let r = 0; r < array.length; r++){
//         let studentExist = array[r].title;
//         if(studentExist === "student"){
//             if(array[r].age === age){
//                 console.log(`student with age:${age} exist`)
//             }
//             console.log("student is there")
//         }
//     }
// }

// checkUser(visitorsArray, 2);

// let array2 = [1,2]
// let arrayNumber = [12,32,3,4,2,2,4,2,5,5,56];

// let addNummbers = (array) =>{
//     let result = 0;
//    for( let i = 0; i < array.length; i++){
//      result = result + array[i];
//    }
//    console.log(`the sum of${array} is: ${result}`)
// }

// addNummbers(array2);

// let emailField = document.getElementById("email");
// let passwordField = document.getElementById("password");
// let button = document.getElementById("button");

// button.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log("email:", emailField.value);
//     console.log("password:", passwordField.value);
//     if(emailField.value != "ishimwerichard26@gmail.com"){
//         return console.log(`${emailField.value} you are not authorized`);
//     }
//     console.log(`${emailField.value} you are welcome`);
// });

// let arrayString = ["12345678901234567890", "dsgj", "djnsk", "dn", "fdnsjkgn", "nsdfjkgn", "onrtkdsgmkr"];

// let checkLongest = (array) =>{
//     let large = 0;
//     for( let i = 0; i < array.length; i++){
//         if(array[i].length > large){
//             large = array[i].length;
//         }
//     }
//     console.log(large)
// }
// checkLongest(arrayString);

// sum of array
// higher order functions
// map,filter

let array = [3, 344, 34, 3, 54, 5, 4, 3, 2, 23, 34, 1,4];

// sprid operator 
let newArray = [...array,76,54,4,34,3,43,4]//[3, 344, 34, 3, 54, 5, 4, 3, 2, 23, 34, 1]
console.log("new Array:", newArray);
// let filteredArray = array.filter((items) => items === 1);
// if(filteredArray[0]){
//   console.log("item exist");
// }else{
//   console.log("no item");
// }
// tenary operator
// filteredArray[0] ? console.log("the element exist") : console.log("no element");
// console.log("array:", filteredArray);
// console.log("this is array",array);

// let sum = (anyArray) => {
//   let result = 0;
//   for (let i = 0; i < anyArray.length; i++) {
//     result = result + anyArray[i];
//   }
//   console.log('sum:', result);
// };
// sum(array);

// localstorage
// localStorage.setItem("key",value);
// localStorage.setItem("myArray", JSON.stringify(array));
// let getArray = JSON.parse(localStorage.getItem("myArray"));
// console.log(getArray[2]);
// localStorage.setItem("number", 123455544);
// let getItem = localStorage.getItem("number");
// console.log("item from localstorage:", getItem)

/*
login page
  *******
1.if user login and he/she is not in our database you 
have to sign him/her in.
2.if the user exist alert that the user already exist
// */
let education = document.querySelector('.education');
let ent = document.querySelector('.ent');
let person = document.getElementById('person');
let category = document.getElementById('category');
let button = document.getElementById('button');

button.addEventListener('click', (e) => {
  // alert(person.value);
 e.preventDefault();
  if(category.value === "education"){
    let paragraph = document.createElement('p');
    paragraph.innerHTML = person.value;
    education.appendChild(paragraph);
  }
  if(category.value === "ent"){
    let paragraph = document.createElement('p');
    paragraph.innerHTML = person.value;
    ent.appendChild(paragraph);
  }
})


