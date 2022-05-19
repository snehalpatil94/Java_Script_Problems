/**
 * Finding prime factors of a given number N and storinng in a array
 * 
 * @author : Snehal Patil
 */

 const readline = require('readline-sync');
 let number = Number(readline.question('Enter your number : '));
 let primeFactors  = [];

 for( i = 2; i <= number; i++){
     while(number % i == 0){
         number = number / i;
         console.log(i);
         primeFactors.push(i);
     }
 }

 if(number != 1){
      console.log(number);
  }
 console.log('Prime factors are :  ' + primeFactors);