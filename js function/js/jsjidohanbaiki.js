 function buyfruite(fruit, money, n) { // apple,1000,4
     if (fruit == "apple") {
         let totalCost = 200 * n; // 800
         if (money < totalCost) {
             return (totalCost - money) + " insffent money";
         } else if (money == totalCost) {
             return 'Thank You';
         } else {
             return (money - totalCost) + ' return';
         }
     }
     //orange//
     if (fruit == "orange") {
         if (money < 50) {
             return (50 - money) + "insffent money";
         } else {
             return (money - 50) + '  RETURN';


         }
     }

     //pineapple//

     if (fruit == "pineapple") {
         if ((money < (n * 300))) {
                 return ((300 * n) - money) + "insffent money";
             } else {
                 return (money - (n * 300)) + '  RETURN p';
             }
         }
         //watermelon//

         if (fruit == "watermelon") {
             if (money < 1000) {
                 return (1000 - money) + "insffent money";
             } else if (money == money) {
                 return "thank you for buying";
             } else {
                 return (money - 1000) + '  RETURN';
             }


         }
     }


     console.log(buyfruite('apple', 800, 4))
     console.log(buyfruite('orange', 4550, 2))
     console.log(buyfruite('pineapple', 1000, 2))
     console.log(buyfruite('watermelon', 1000, 2))