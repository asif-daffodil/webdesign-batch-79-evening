var personName = ["Sifat", "Jamal", "Tomal", "Ibrahim"];

personName.push("Hawlader");
personName.push("Moin Vai", "Abdur Rhman");
personName.pop();
personName.shift();
personName.unshift("Abdur Rhman");

/*
console.log(personName);
console.log(personName.length);
console.log(personName.indexOf("Hawlader"));
*/

for (let i = 0; i < personName.length; i++) {
    console.log(personName[i]);
}

let luckyNumber = [5, 10, 7, 15, 23, 5, 10, 7, 15, 23];



/**
 * find the sumation of the odd n umbers in this array
 * for
 * if
 * %
 * !==
 * new var for the result
 * += 
 */

let jogfol = 0;

for (let i = 0; i < luckyNumber.length; i++) {
    if(luckyNumber[i] % 2 !== 0){
        jogfol += luckyNumber[i];
    }
}
console.log(jogfol);
