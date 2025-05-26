function display(noOfTimes)
{
    let i=0;
    do
    {
        console.log(`${i + 1} C is fun`);
        i++;
    }
    while(i < noOfTimes);
};
let number;
number = parseInt(prompt("Enter number of times to display C is fun:"));
if (isNaN(number) || number < 0) {
    console.log("Missing number of occurrences");
}
else{
    display(number);
}
