//Count the number of times a smaller string appears in a longer string
//Straightforward / naive approach involves checking paris of characters individually

//Loop over the longer string
//loop over the shorter string
//If the characters don't match, break out of the inner lop
//If the characters do match, keep going
//If cou complete the intter loop and find a match, increment the count of matches
//Return the count


function naiveStringSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++){
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) break;

        }
        if (j === short.length - 1) count++;
    }

    return count;

}


console.log(naiveStringSearch("lorie loled", "lol"));