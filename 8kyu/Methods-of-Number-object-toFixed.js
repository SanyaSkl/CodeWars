// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.
//
// The first mission: let all elements in the array keep two decimal places(No need to convert number n).
//
// The second mission: Traversal arr, count the number of elements which are smaller than n and return it.

function howManySmaller(arr,n){
    //coding here..
    const myArray = arr.map (a => a.toFixed(2))
    const myElements = myArray.filter (b => b < n)
    return myElements.length
}


