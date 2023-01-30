/* 
let j = 0;
for (let i = 1; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 === 0){
        j += i
    }
}
console.log(j); 
*/

let x = 1;
let y = 2;
let a = [];
while (y <= 4000000) {
    a.push(x);
    a.push(y);
    x = x + y;
    y = x + y;
}

let z = 0; 

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        z += a[i];
    }
}

console.log(z);