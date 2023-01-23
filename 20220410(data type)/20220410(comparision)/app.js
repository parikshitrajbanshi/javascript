/**
 * comparision operation(Boolean(true or false))
 * 
 * is equal to    -> a==b
 * not equal to   ->a!=b
  * is gerater then   -> a>b 
 * is less then          a<b
 * is  less then  or equal to   a<=b
 * is greater then  or equal to a>=b
 * not equal to       a!==b
 * 
 * strict[equality]  a===b
 * strict [not equality] a!==b
 * 
 * 
 */
let a = 10;
let b = 20;
let isEqual=(a==b);
console.log('is equal operator>' + isEqual);

let isNotEqual=(a!=b);
 console.log('is not equal operator>'+isNotEqual);

let x = 10;
let y = '10';

let normalEqual = (x==y);// is x=y// check Data value only .
console.log('Normal Equal>'+ normalEqual);

let strictEqual =(x===y);// its check data value and data type.
console.log('strict Equal>'+ strictEqual);

let normalNotEqual = ( x!=y);  //(x is not equal to y)check only data value
console.log('normal not Equal>'+ normalNotEqual);

let staticNotEqual = ( x!==y);  
console.log('normal not Equal>'+ staticNotEqual);


