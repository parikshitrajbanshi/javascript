
///padStart//
let sum='apple';
let padding=sum.padStart(7,'$');
console.log(padding);

function boy(str){
    return str.padStart(10,"*");
}
let result = boy('body');
console.log(result);

////padEnd///
let sum1='pineapple';
let padding1=sum.padEnd(17,'$');
console.log(padding1);

function boy1(str){
    return str.padEnd(15,"*");
}
let result1 = boy1('bodyguard');
console.log(result1);