var age = -60;

if (age <= 12 && age > 0) {
    console.log("You are a baby!");
}else if (age <= 19 && age > 12) {
    console.log("you are a teeanager!");
}else if (age < 30 && age > 19) {
    console.log("You are a young person!");
}else if(age < 50 && age >= 30){
    console.log("you are a middle aged person!");
}else if(age < 200 && age >= 50){
    console.log("You are a old man!");
}else{
    console.log("You are not in this world!");
}

function checkBoy(c) {
    if(c == "yes"){
        return "You are a good boy!";
    }else if(c == "no"){
        return "You are a bad boy"
    }else{
        return "Prease provide yeas or no as a value";
    }
}

console.log(checkBoy("Sifat boy")); 

function checkLeap (y) {
    if(y % 400 === 0){
        return `${y} is a leap year`;
    }else if (y % 100 === 0) {
        return `${y} is not a leap year`;
    }else if (y % 4 === 0) {
        return `${y} is a leap year`;
    }else{
        return `${y} is a leap year`;
    }
} 

console.log(checkLeap(2000));

