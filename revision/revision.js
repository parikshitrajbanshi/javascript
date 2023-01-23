let a = 10;
let b = 'toyata';
let c = true;
let d = [];

d[0] = 12;
console.log(d);
d[1] = 13;
d[2] = 14;
d[3] = 25;
console.log(d);
d[3] = 15;
console.log(d); //it update the new value


num = [1, 2, 3, 4];
num.pop();
console.log(num);

let removednum = num.pop();
console.log(removednum);




//////////////function/// addition

function sumArrdata(arr) {
    let fiEle = arr[0];
    let seEle = arr[1];
    let sum = fiEle + seEle;
    return sum;


}
let sums = sumArrdata([1, 2]);
console.log(sums);



/// maximum//

function maxarr(arr) {
    let f = arr[0];
    let s = arr[
        arr.length - 1];
    if (f > s) {
        return f;
    } else {
        return s;
    }
}

let result = maxarr([1, 26, -1, 2, 9]);
console.log(result);



/////[]///
function empty(arr) {

    let length = arr.length; //arr[]
    if (length == 0) {
        return 0;
    } else if (length == 1) {
        return arr[0];
    } else {
        let f = arr[0];
        let s = arr[arr.length - 1];
        if (f > s) {
            return f;
        } else {
            return s;
        }
    }
}
let x = empty([]);
console.log(x);






//////


function mix(arr) {

    let length = arr.length;
    if (length == 0) {
        return 0;
    } else if (length == 1) {
        return arr[0];
    } else {
        let f = arr[0];
        let s = arr[arr.length - 1];
        if (f == s) {
            return (f +s)*2;
        } else {
            return (f+s);
        }
    }
}
let value = mix([8,3,4,5,6,7,2]);
console.log(value);