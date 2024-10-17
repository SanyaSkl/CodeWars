//Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
//
// The first mission: Traversing arr, find the shortest string length.
//
// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.


function cutIt(arr) {
    let minLength = arr[0].length
    arr.map(b => {
        if (minLength > b.length)
            minLength = b.length
    })
    const newArr = arr.map(b => b.slice(0, minLength))
    return newArr
}


// Второе решение


//function cutIt(arr){
//   const minLength = arr.reduce((min, curr) => Math.min(min, curr.length), Infinity);
//   return arr.map(element => element.substring(0, minLength));
// }

