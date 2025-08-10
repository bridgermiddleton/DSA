//Go through each item in the array starting from index 0 until
//you the correct value is found.  If found, return the index
//If not found, return -1
//This is typically used on unsorted arrays, doesn't make sense
//for sorted arrays
//Big O(N)


function linearSearch(arr, val) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===val) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1,2,3,5,4,9,6,7], 5));

console.log(linearSearch([1,3,2,4], 7));
