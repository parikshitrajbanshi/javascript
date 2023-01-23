// replace string//

let text = "Please visit Microsoft!";
let newText = text.replace("visit", "W3Schools");
let Text = text.replace("microsoft", "W3Schools");

console.log(newText);
console.log(Text);

// only (replace) first match/////////////////////////////////////////
// LOVING UPPER CASE will not work 

let family='loving mother and  loving father';
console.log(family.replace('loving','dear'));

function first(str){
    return str.replace('loving','dear');
}
let result = first('loving mother and  loving father');
console.log(result);


//   (replaceaAll) srtring////////////////////////////////////////////////////////////////////////////

function car(str){
    return str.replaceAll('car', 'bus');
}
let automobilse = car('car i like and car is drive most');
console.log(automobilse);

