let luckyNumber = [5, 10, 7, 15, 23, 5, 9, 8, 15, 23];

var jogfol = 0;
for (var i = 0; i < luckyNumber.length; i++) {
  jogfol = jogfol + luckyNumber[i];
}
console.log(jogfol);
var oddNumber = 0;
for (var i = 0; i < luckyNumber.length; i++) {
  if (luckyNumber[i] % 2 !== 0) {
    oddNumber = oddNumber + luckyNumber[i];
  }
}
console.log(oddNumber);
var evenNumber = 0;
for (var i = 0; i < luckyNumber.length; i++) {
  if (luckyNumber[i] % 2 === 0) {
    evenNumber = evenNumber + luckyNumber[i];
  }
}
console.log(evenNumber);
