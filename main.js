/* Time getter */
function showDate() {
  var today = new Date();
  document.write(today.toDateString());
  console.log("Today's date is " + today);
}

console.log("Connected");

// function thisIsTrue(arg, arg2) {
//   if (arg === 'nice' && arg2 === 'Nice'){
//     console.log(`You are ${arg}`);
//   } else {
//     console.log('false');
//   }
// }

// function thisIsTrue(arg1, arg2) {
//   if (arg1.length < 3) {
//     console.log(`You are ${arg1}`);
//   }
//   else if (arg2.length > 0){
//     console.log(`You are ${arg2}`);
//   } else {
//     console.log('You are NOTHING');
//   }
// }
//thisIsTrue('nice',  'mickeymouse');

const canDrive = (age) => {
    if(!(age >= 15)) {
      return true;
    }
    return false;
}
const answer = canDrive(13);
console.log(answer);
