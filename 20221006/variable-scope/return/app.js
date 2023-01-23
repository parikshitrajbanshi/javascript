/**
 * return function
 * 
 */
function greet() {
    console.log('you ');
    return 'hello';
}

// 1 inch = 2.54
function inchToCm(num) {
    return num * 2.54;
}

let msg = greet();
console.log(typeof msg + ' ' + msg);


let result = inchToCm(2);
console.log(result);


// let  msg = greet();
// console.log(typeof msg + '>' + msg);

// function addtwonumber(numOne, numTwo){
//      return numOne  + numTwo;

// }

// console.log(addtwonumber(2,6));


// // name

// function greetingmsgwith(name){
//     let msg = 'werlcome'+ name;
//     return msg;
// }

// let name = greetingmsgwith('Parik');
// console.log(name);





/**
 * 
 * function
 * void return
 * 
 */

function voidfunction(para) {
    console.log('this is void function' + para);

}
voidfunction(1111);

function max(para1, para2) {
    if (para1 > para2) {
        return para1;
    } else {
        return para2;
    }


}


function mini(para1, para2) {
    if (para1 < para2) {
        return para1;
    } else {
        return para2;
    }


}

function max(para1, para2, para3) {
    if (para1 > para2 && para1 > para3) {
        return para1;

    }
    if (para2 > para3) {
        return para2;
    } else {

        return para3;

    }
}
let max3 = max(18, 8, 20);
console.log('max is ' + max3);

max3 = max(-9, -8, -2);
console.log('max is ' + max3);

let maxNum = max(2, 4);
console.log('maximun num is' + maxNum);


let miniNum = mini(8, 9);
console.log('mini no is' + miniNum);


//  COMPAIR//


function max(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return a;
    } 
    else if (b > c && b > d) {
        return b;
    } else if (c > d) {
        return c;
    } else {
         return d;

    }
}

let max = max(1, 2, 3, 4);
console.log('max is' + max);



function duplicatenumber(x ,b ,c){
    if (x == c) {
    
return x;
    }
}