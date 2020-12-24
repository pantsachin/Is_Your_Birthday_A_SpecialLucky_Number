var readlineSync = require("readline-sync");

var userBirthday = readlineSync.question("What is your date of birth?\n\n(please fill it in DD-MM-YYYY format) ");

var userLuckyNum = readlineSync.question("What is your lucky number? ");

var n = (userBirthday);

var number = n.split('-')
// console.log(number);

n = Number(number.join(''));
// console.log(n);





var a = 0;
var b = 0;
var sum = 0;

var array = [];

while (n>1) {
  a = n%10;
  array.push(a);
  b = n-a;
  n=b/10;

}

// console.log(array);

for (var i=0; i<array.length; i=i+1) {
  var d = array[i];
  sum = sum+ d;
}

// console.log(sum);

if (sum%userLuckyNum == 0) {
  console.log("Your date of birth is a special lucky number!")
}
else {
  console.log("Your date of birth is not a special lucky number")
}



