{
    times = parseInt(noOfTimes);
    if(isNaN(times) || times < 0) {
        console.log("Missing number of occurrences");
    }
    else
    {
        for(let i=0; i<times; i++) {  
            console.log(`${i + 1} C is fun`);
        }
    }
}

display(6);
display(1);
display(3);