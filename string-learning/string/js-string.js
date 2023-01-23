/**
 * method=function
 * 
 * defult method//
 * 
 */


let str = 'hello world123';

 //method name length method

 console.log(str.length);

 //slice function of string
 console.log(str.slice(0,5));
 console.log(str.slice(6,11));

let str1 = 'apple,banana,kiwi,orange';

console.log(str1.slice(-6));
console.log(str1.slice(6,12));
console.log(str1.slice(13,17));
console.log(str1.slice(18,24));
console.log(str1.slice(6,17));// also can be slice by using negative number (-1,-2)//
console.log(str1.slice(13,24));
console.log(str1.slice(0,12));
console.log(str1.slice(-6));
console.log(str1.slice(-11,-7));


console.log(str1.slice(0,5) +' '+str1.slice(13,17));


// substring  functin of string //
let str2 = 'apple,banana,kiwi,orange';

 console.log(str2.substring(6,12)) ;
 
 console.log(str2.substring(6,12));
 console.log(str2.substring(13,17));
 console.log(str2.substring(18,24));
 console.log(str2.substring(6,17));
 console.log(str2.substring(13,24));
 console.log(str2.substring(0,12));
 console.log(str2.substring(0,5));
 console.log(str2.substring(-6));    // do not read - number below 0//
 console.log(str2.substring(-11,-7)); // read it as 0//

