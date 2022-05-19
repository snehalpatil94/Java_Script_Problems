/**
 * Step1 : Finding 3 digit numbers using ramdom funtion
 * Step2 : Finding 2nd largest and 2nd Smallest number 
 * 
 * @author : Snehal Patil
**/

let maxCount = 10;
let count = 0;
const number = [];

// Taking three ramdom number between 100-1000
while (count < maxCount){
    number[count] = Math.floor(Math.random()*900)+100;
    count++;
}

if(count<10){
console.log(Math.floor(Math.random)*900)+100;
count++;
}

console.log(number);
let max = secondMax = number[1];
let min = secondMin = number[1];

// Finding second largest number
for(i=0; i < number.length; i++){
    if(number[i]>max){
        secondMax = max;
        max = number[i];
    }
    else if (number[i] > secondMax && number[i] != max){
        secondMax = number[i];
    }
}
console.log('Second Max : ' + secondMax);

// Finding second smallest number
for(i = 0; i < number.length; i++){
    if(number[i]<min){
        secondMin = min;
        min = number[i];
    }
    else if (number[i] < secondMin && number[i] != min){
        secondMin = number[i];
    }
}
console.log('Second Min : ' + secondMin);