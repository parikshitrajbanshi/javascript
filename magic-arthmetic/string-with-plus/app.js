/**
 * string  with plus operator 
 */
 
let strplusStr = 'hello' +  'world';// string + string = string 
console.log( typeof strplusStr +' : '+ strplusStr);

let strplusNumber = 'hello' +  123;// string + string = string 
console.log( typeof strplusNumber +' : '+ strplusNumber);

let strplusundifined = 'hello' +  undefined;// string + string = string 
console.log( typeof strplusundifined+' : '+ strplusundifined);

let strplusNull = 'hello' +  null;// string + string = string 
console.log( typeof strplusNull +' : '+ strplusNull);

let strplusboolean = 'hello' + true;// string + string = string 
console.log( typeof strplusboolean +' : '+ strplusboolean);