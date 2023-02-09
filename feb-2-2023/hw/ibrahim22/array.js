


let luckyNumber = [5, 10, 7, 15, 23, 5, 9, 8, 15, 23];


var sum=0;

for(var i=0; i<luckyNumber.length; i++ ){

sum=sum+luckyNumber[i];

}

 document.write("Sum Of This Array = "+sum+"\n");

 var evenNumber=0;

 for(var i=0; i<luckyNumber.length; i++ ){
 if(luckyNumber[i]%2===0)
 evenNumber=evenNumber+luckyNumber[i];
    
    }

    document.write("Even Number Of This Array = "+evenNumber);

    var oddNumber=0;

 for(var i=0; i<luckyNumber.length; i++ ){
 if(luckyNumber[i]%2!==0)
 oddNumber=oddNumber+luckyNumber[i];
    
    }

    document.write("Add Number Of This Array = "+oddNumber);