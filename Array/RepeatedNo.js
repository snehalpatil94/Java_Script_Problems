/**
 *  Find repeated numbers twice between 0-100  
 * 
 * @author : Snehal Patil
*/

let repeatedNumber = [];
function reverseOfNum(num) {
    let newNumber = 0;
    while (num != 0) {
        let remainder = num % 10;
        newNumber = newNumber * 10 + remainder;
        num = Math.floor(num / 10);
    }
    return newNumber;
}
for (let i = 0; i <= 100; i++) {
    if (reverseOfNum(i) === i && i > 9) {
        repeatedNumber.push(i)
    }
}
console.log('Repeated Numbers : ' + repeatedNumber);