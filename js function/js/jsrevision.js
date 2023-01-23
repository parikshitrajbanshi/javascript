function calculategrade(n) {
    if (n >= 91) {
        return "s";

    } else if (n >= 81) {
        return "A";
    } else if (n >= 71) {
        return "B";
    } else if (n >= 61) {
        return "c";
    } else if (n >= 40) {
        return "D";
    } else {
        return "E";
    }
}
let result = calculategrade(91);
console.log(result);


function mini(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}
let resultmini = mini(1, -7, 0);
console.log(resultmini);







function max(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
let resultmax = max(1, -7, 0);
console.log(resultmax);



function mid(a, b, c) {
    if ((a < b && b > c) || (a > b && a < c)) {
        return a;

    } else if ((b < a && a > c) || (b > a && b < c)) {
        return b;
    } else {
        return c;
    }
}
let resultmid = mid(-1, -7, 0);
console.log(resultmid);

// function ordernum(a, b, c) {
//     let min, max, mid;

//     /**
//         // min//
//         if (a < b && a < c) {
//             min = a;
//         } else if (b < a && b < c) {
//             min = b;
//         } else {
//             min= c;
//         }
//                     // max//

//         if (a > b && a > c) {
//             max = a;
//         } else if (b > a && b > c) {
//             max = b;
//         } else {
//             max = c;
//         }

//         // mid//

//         if ((a < b && b > c) || (a > b && a < c)) {
//             mid = a;

//         } else if ((b < a && a > c) || (b > a && b < c)) {
//             mid =b;
//         } else {
//             mid = c;
//         }

//          */
//     // shotcut//
//     function ordernum(a, b, c) {
//         let min, max, mid;
//         min = min(a, b, c);
//         min = max(a, b, c);
//         min = max(a, b, c);

//         return min + '' + mid + '' + max;

//     }
//     let sum = ordernum(-9, -6, 0);
//     console.log(sum);
function orderThreeNumber(a, b, c) {
    let min, middle, maxi;

    min = mini(a,b,c);
    middle = mid(a,b,c);
    maxi = max(a,b,c);
    // // min
    // if (a < b && a < c) {
    //     min = a;
    // } else if (b < a && b < c) {
    //     min = b;
    // } else {
    //     min = c;
    // }

    // // mid
    // if (a < b && a > c || a > b && a < c) {
    //     mid = a;
    // } else if (b < a && b > c || b > a && b < c) {
    //     mid = b;
    // } else {
    //     mid = c;
    // }

    // // max
    // if (a > b && a > c) {
    //     max = a;
    // } else if (b > a && b > c) {
    //     max = b;
    // }else{
    //     max = c;
    // }

    return min +' '+ middle +' ' + maxi;
}
console.log(orderThreeNumber(-1,0,-4));