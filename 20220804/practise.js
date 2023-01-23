 let marks = 90;

 switch () { // 90
     case (marks > 90): // false
         console.log("rank A");
         break;

     case (marks >= 81 && marks <= 90): // true === 90
         console.log('rank B');
         break;

     case (marks >= 61 && marks <= 80):
         console.log('rank c');
         break;

     default:
         console.log('Default');
 }