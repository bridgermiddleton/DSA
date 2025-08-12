//Similar to bubble sort, but instead of first placing large values into sorted position
//it places small values into sorted position

//make a variable to store the minimum value (start w first item in array)
//compare it to the next item
//if it's smaller, swap
//if not, continue

//Selection sort only really better than bubble sort when you are worried about number of swap

function selectionSort(arr) {

    var min;

    for (var i = 0; i < arr.length; i++) {
        min = i;
        for (var j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
            
        }
        if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
        
    }
    return arr;

}


console.log(selectionSort([4,2,7,1,3]));