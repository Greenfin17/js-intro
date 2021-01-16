/* Time getter */
function showDate() {
  var today = new Date();
  document.write(today.toDateString());
  console.log("Today's date is " + today);
}

console.log("Connected");
sayHello();

function sayHello() {
  console.log("Hello");
}


/*
const sayHello = function() {
  console.log("Hello");
}

  const sayHello = () => {
  console.log("Hello");
}
*/
/********* FUNCTIONS WITH ARGUMENTS */
// function logsHello(name){
//   console.log(`Hello ${name}`);
// }

// logsHello('John');

const sum = 55;

const addTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log("Console log inside the function: " + sum);
  return sum;
}
console.log(addTwoNumbers(13,7));
console.log("Console log of global scope variable " + sum); 
