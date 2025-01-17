// Methods of String object--concat() split() and its good friend join()
// Task
// Implement a function which accepts 2 arguments: string and separator.
//
// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

function splitAndMerge(string, separator) {
    const words = string.split(' ')
    const result = words.map(w => {
        return w.split('').join(separator)
    })
    return result.join(' ')
}