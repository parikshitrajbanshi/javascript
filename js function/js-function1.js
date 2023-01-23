function sumevennumber(a, b, c, d) {
    let sum = 0;
    if (a % 2 == 0) {
        sum += a;
    }
    if (b % 2 == 0) {
        sum += b;
    }
    if (c % 2 == 0) {
        sum += c;
    }
    if (d % 2 == 0) {
        sum += d;
    }
    return sum;
}

let sum1 = sumevennumber(2, 6, 4, 3);
console.log(sum1);

// tax//


function calculatetax(money, insideoutside) {
    if (insideoutside == false) {
        let tax = money * 0.08;
        return money + tax;
    } else {
        let tax = money * 0.1;
        return money + tax;
    }
}
let value1 = calculatetax(1000, true);
console.log(value1);