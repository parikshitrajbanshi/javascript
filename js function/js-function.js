function greeting() {
    console.log('void function')

}
greeting();

function greetingwithname(name) {
    console.log('welcome' + name);

}
greetingwithname('parko');


function selfintroduction(name, age) {
    console.log('my name is ' + name);
    console.log('age' + age);
}
selfintroduction('parikshit', 25);



function findmax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
let max = findmax(2, 5);
console.log(max);




function findmini(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
let mimi = findmini(2, -5);
console.log(mimi);



function findmax1(a, b, c) {

    if (a < b || a < c) { // 
        return a;
    } else if (b < a || b < c) {
        return b;
    } else {
        return c;
    }



}

let result = findmax1(2, 5, 1);
console.log(result);




function findmaxx(a, b, c, d) {

    if (a > b && a > c && a > d) {
        return a;
    } else {
        return d;
    }
}

let result1 = findmaxx(3, -3, -4, 0);
console.log(result1);


function middlenum(a, b, c) {
    if ((a > b && a < c) || (a < b && a > c)) {
        return a;
    } else if ((b > a && b < c) || (b < a && b > c)) {
        return b;
    } else {
        return c;


    }
}
let sum = middlenum(1, 8, 9, );
console.log(sum);




/** 
function changetime(time) {
    if (time > 12) {
        return (time - 12) + 'PM'
    } else if (time){
        return (time) + 'AM'}

    else if (time = 12){
        return (time) + 'PM'
    }else(time = 24){
        return (time) + 'AM'}

    }
    
    
    
    
    let timee = changetime(18);
    console.log(timee);
    */

function changetime(time) {
    if (time < 12) {
        return time + 'AM'
    } else if (time == 12) {
        return time + 'PM'
    } else if (time == 24) {
        return '0 AM'
    } else {
        return (time - 12) + 'PM'
    }
}

let resulttime = changetime(23);
console.log(resulttime);



function duplicatenum(a, b, c) {
    if (a == b || a == c) {
        return a;

    } else if (b == c) {
        return b;

    } else {
        return 'no baby'


    }
}
let text = duplicatenum(4, 7, 7);
console.log(text);





// even or odd//


function oddoreven(a) {
    if (a % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}


let value = oddoreven(111);
console.log(value);



//difference//


function difference(a, b) {
    if (a > b) {
        return a - b;
    } else if (a < b) {
        return b - a;
    }else 
        return "no difference"
    }

let r = difference(10, 10);
console.log(r);