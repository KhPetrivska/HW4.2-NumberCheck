'use strict';
const number = prompt('Enter three digit number.');
const absIntNumber = parseInt(Math.abs(number));

//validation
if (number === null) {
    alert('You canceled the input');
} else if (!number.trim) {
    alert('Input cannot be empty!');
} else if (isNaN(number)) {
    alert('Input must consist of digits only!')
} else if (absIntNumber.toString().length !== 3) {
    alert('Number must has three digits.');
}else{
    //is a 3digit number
    const numObject = absIntNumber.toString().split("");
    const sameThreeDigits = numObject[0] === numObject[1] && numObject[1] === numObject[2];
    const sameTwoDigits = numObject[0] === numObject[1] 
    || numObject[1] === numObject[2] 
    || numObject[0] === numObject[2];
    if(sameThreeDigits){
        console.log("All digits are same.");
    }else if(sameTwoDigits){
        console.log("There are same digits in the number.");
    }else{
        console.log("All digits are different.");
    };
};