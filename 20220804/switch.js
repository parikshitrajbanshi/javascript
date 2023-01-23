let x = 5;

switch (x) {
    case 1:
        console.log('number one');
        break;
    case 2:
        console.log('number two');
        break;
    case 3:
        console.log('number three');
        break;
    case 4:
        console.log('number four');
        break;
    case 5:
        console.log('number five'); //compair to case five =5 result five
        break;
}

let y = 5;
switch (y) {
    case '5':
        console.log('string');
        break;
    case 5:
    console.log('number 5'); //result
    break;

}



let z = 5;
switch (z) {
    case 1:
        console.log('Number one');
        break;
    case 1:
        console.log('Number two');
        break;
    case 2:
        console.log('Number three');
        break;
    default:
        console.log('this is defult ');
        break;
}