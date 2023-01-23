///concate//

let text1 = "Hello";
let text2 = "World";

let text3= text1.concat(" ", text2);
console.log(text3);



let family1='loving mother';
let family2='and  loving father';

console.log(family1.concat(' ',family2));

function first(str,str1){
    // return str.concat(str1,str1,str1);
    return str.concat(" ",str1);
}
let result1 = first('Loving Mother',' and  Loving Father');
console.log(result1);



