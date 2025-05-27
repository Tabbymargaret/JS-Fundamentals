
const add = (a, b) => {
  const number1 = parseInt(a);
  const number2 = parseInt(b);
  if (isNaN(number1) || isNaN(number2)) {
    console.log("Both inputs must be valid integers");
  } else {
    console.log(`The sum of ${number1} and ${number2} is: ${number1 + number2}`);
  }
};

add(5, 10);