////trim///

let text1 = "      Hello World!      ";
let text2 = text1.trim();

console.log(text1);
console.log(text2);

// trim- space cutting/////////  (str.trim )

function text(str){
    return str.trim();
}
let result = text('    oh god     ');
console.log(result);



// .trimStart();// .trimEnd();

let one = '       aeroplane     l  ';
let two =one.trimStart();
console.log(two);
/////function
function start(str){
    return str.trimStart();
}
let result1=start('      GOD    ');
console.log(result1);

//end//

let mount= '     everest     k   ';
let hill=mount.trimEnd();
console.log(hill);


