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
        for(let j = 1; j <= i;j++){//1.prints:'8',2.prints:'88',prints:''
         prints = prints + '8';
        }
       console.log(prints);
    }
}

pattern(2);
/*
1.iterate 5 times

(1)check if 1 <= 5


*/

