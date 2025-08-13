//Quick Sort

//Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
//Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
//Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

//Pivot Helper

//Given an array, this helper function should designate an element as the pivot
//It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved
//to the right of the pivot
//The order of elements on either side of the pivot doesn't matter
//The helper should do this in place, that is, it should not create a new array
//When complete, the helper should return the index of the pivot

//Picking a pivot
//runtime of quick sort depends in part on how one selects the pivot
//Should roughly be the median value in the data set you're sorting
//For simplicity, we'll always choose pivot to be first element 

    //Pseudocode
    //It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
    //Grab pivot from the start of the array
    //Store the current pivot index in a variable (keep track of where pivot should end up)
    //Loop through the array.  If pivot is greater than the current element, increment the pivot index variable and the swap the current element with the element at the pivot index
    //Swap the starting element (i.e. the pivot) with the pivot index
    //Return the pivot index
    

    function pivot(arr, start=0, end=arr.length - 1) {
        
        function swap(array, i, j) {
            [array[i], array[j]] = [array[j], array[i]];
        }
        var pivot = arr[start];

        var swapIdx = start;

        for (var i = start + 1; i < arr.length; i++) {
            if (pivot > arr[i]) {
                swapIdx++;
                swap(arr, swapIdx, i);

            }
        }

        swap(arr, start, swapIdx);

        return swapIdx;

    }

    console.log("Pivot function:", pivot([4,8,2,1,5,7,6,3]));


//Quick Sort Pseudocode
    //Call the povt helper on the array
    //When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of the index

    //Time Complexity

        //Best Case:  Big O(nlogn)
        //Worst Case: Big O(n^2) (when the pivot that is chosen is the min/max every time)

    //Space Complexity
        //Big O(logn)

    function quickSort(arr, left = 0, right = arr.length - 1) {
        if (left < right){

        let pivotIdx = pivot(arr, left, right);

        quickSort(arr, left, pivotIdx - 1);

        quickSort(arr, pivotIdx + 1, right);
        }

        return arr;

    }

    console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
