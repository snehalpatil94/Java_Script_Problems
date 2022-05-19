/**
 * Step1 : Finding 3 digit numbers using ramdom funtion
 * Step2 : Sorting that numbers into a array
 * Step3 : Finding 2nd largest and 2nd Smallest number 
 * 
 * @author : Snehal Patil
*/

let maxCount = 10;
let count = 0;
const number = [];

for(i = 0; i < maxCount; i++){
    for( j = i; j < maxCount; j++){
        if(number[i] > number[j]){
            temp = number[i];
            number[i] = number[j];
            number[j] = temp;
        }
    }
}
console.log('Sorted Array : ' + number);

console.log('Second Max number :'+number[number.length-2]);
console.log('Second min number : '+ number[1]);
