let arr = [1, 2, 3, 4]; // length
console.log(arr.length);
console.log(arr.toString()); //   arr  to string//

console.log(arr.join(':')); //    (:)   //using semi colom , it is also string. 


        //FRONT   // BEHIND//
        
        // -  shift();               Arr.pop();
        
        // +  unshift();               Arr.push();



//adding data  from behind//

arr.push(9); // only number
arr.push(8);
arr.push('lol');
arr.push(true);

console.log(arr);


// removing data  from behind//
arr.pop();
arr.pop();
arr.pop();
arr.pop();
arr.pop();
console.log(arr);


/////////////adding data from first//////


let arr1 = [1, 2, 3, 4, 5, 6, 7, 78];

console.log(arr1);
console.log(arr1.length);
console.log(arr1.toString());
console.log(arr1.join(':'));

// adding data = unshift////

arr1.unshift('love');
arr1.unshift(100);
console.log(arr1.toString());

//removing data = shift///
arr1.shift();
arr1.shift();
arr1.shift();
arr1.shift();

console.log(arr1.toString());




// concatenating//

let Girls = ["Cecilie", "Lone"];
let Boys = ["Emil", "Tobias", "Linulet"];
let myChildren = Girls.concat(Boys);

console.log(myChildren.toString());

//splice//

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.splice(2, 1, "Lemon", "Kiwi");// ** 
console.log(result.toString());

let srtArr=['apple','orange','pineapple','lemon'];
let result1 = srtArr.splice(1,0,'banana','strawberry');
console.log(result1);
console.log(srtArr); |//() IT FIRST position adds and second position subtract )



//splice////

let fruits1 = ["Banana", "Orange", "Apple", "Mango"];


let ju = fruits1.splice(2);
 console.log(ju);