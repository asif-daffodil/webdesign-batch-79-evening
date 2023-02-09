let luckyNumber = [5, 10, 7, 15, 23, 5, 9, 8, 15, 23];
let newArr = Array.from(new Set(luckyNumber));

/*
for (let i = 0; i < luckyNumber.length; i++) {
    if (newArr.indexOf(luckyNumber[i]) == -1) {
        newArr.push(luckyNumber[i]);
    }
}
*/

console.log(newArr);