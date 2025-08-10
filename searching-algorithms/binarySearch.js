//The function accepts a sorted array and a value
//Left pointer at the start of the array, right pointer at the end of the array
//While the left pointer comes before the right pointer
    // create a pointer in the middle
    //If you land on the correct value, return the index
    //If the value is too small, move the left pointer up to where the middle is
    //If the value is too big, move the right pointer down to where the middle is
    //If the value is never found, return -1


function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === val) return mid;

        else if (arr[mid] > val) end = mid - 1;

        else start = mid + 1;
    }

    return -1;
}


console.log(binarySearch([1,3,7,8,10,12,15], 12));
console.log(binarySearch([1,3,7,8,10,12,15], 15));
console.log(binarySearch([1,3,7,8,10,12,15], 22));