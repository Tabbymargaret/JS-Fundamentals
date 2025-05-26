function display(noOfTimes)
{
    for(let i = 0; i < noOfTimes; i++) {
        console.log("C is fun");
    }
};
let number;
number = parseInt(prompt("Enter number of times to display C is fun:"));
if (isNaN(number) || number < 0) {
    console.log("Missing number of occurrences");
}
else{
    display(number);
}
