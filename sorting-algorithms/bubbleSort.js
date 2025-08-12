//A sorting algorithm where the largest values bubble to the top

//Start looping from the end of the array towards the beginning with a variable called i from the end of the array towards the beginning
//Start an innter loop with a variable called j from the beginning until i - 1
//If arr[j] is greater than arr[j+1], swap those two values
//Return the sorted array

//Naive/Basic approach

//Big O(n^2) due to nested for loop
function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
    return arr;
   
}

console.log(bubbleSort([37, 45, 29, 8,12,-31]));


//Optimized Version
//If there are no swaps on a pass, break out of the for loop and return the array
////Big O(n^2) due to nested for loop; can be Big O(n) if almost sorted with this version
function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwaps = false;
            } 
        }

        if (noSwaps) break;
    }
    return arr;
   
}
console.log(bubbleSort([8, 1, 2, 3, 4, 5]));
console.log(bubbleSort(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"]));

