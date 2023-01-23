function checkstartwithcharacterA(str) {

    let firstcharacter = str.substring(0, 1);

    if (firstcharacter == 'a') {
        return 'start with a';
    } else if (firstcharacter == 'A') {
        return 'start with A';
    } else {
        return 'no';
    }

}

let firstcharacterresult = checkstartwithcharacterA('apple');
console.log(firstcharacterresult);


let firstcharacterresult1 = checkstartwithcharacterA('ball');
console.log(firstcharacterresult1);


let firstcharacterresult2 = checkstartwithcharacterA('Apple');
console.log(firstcharacterresult2);


//another// first latter

function capitalandsmall(str) {

    let letter = str.slice(0, 1);

    if (letter == 'a') {
        return 'letter a';
    } else if (letter == 'A') {
        return 'letter A';
    } else if (letter == 'b') {
        return 'letter b';
    } else if (letter == 'B') {
        return 'letter B;'
    } else {
        return 'error';
    }
}
let result = capitalandsmall('apple');
console.log(result);

let result1 = capitalandsmall('Ball');
console.log(result1);



function shortcut(str) {

    let short = str.slice(0, 1);

    if (short == 'a' || short == 'B' || short == 'b' || short == 'B') {
        return 'letter' + ' ' + short;

    } else {
        return 'no';
    }
}

let short = shortcut('apple');
console.log(short);



// reverce// last latter

function reverce(str) {

    let short = str.slice(-1); //  =str.subsrting(str.length-1); by using (length).

    if (short == 'e' || short == 'E' || short == 'b' || short == 'B') {
        return 'letter' + ' ' + short;

    } else {
        return 'no';
    }
}

let cut = reverce('apple');
console.log(cut);


//last 3 character//

function lastthree(str) {
    if(str.length<=3){
        return str;
    } else {
        let str1= str.slice(-3);
        return str1;
    }
}


let last = lastthree('dfvriughkvjndfiu');
console.log(last);





// minding middle character
// with odd

function midchar(str){
    console.log((str.substr(str.length/2)-0.5,1));

    return (str.substr((str.length/2) - 0.5,1)); 
}

let  cha = midchar('egg');
console.log(cha);

// with  even

function midchar(str){
    console.log((str.substr(str.length/2)-1,2));

    return (str.substr((str.length/2) - 1,2)); 
}

let  odd = midchar('eggs');
console.log(odd);


// by both

function mixchar(str){
    if(str.length%2==0){
        return  (str.substr((str.length/2) - 1,2)); 
    }else{
        return (str.substr((str.length/2) - 0.5,1)); 
    }    
}

let mix = mixchar('eggs');
console.log(mix);