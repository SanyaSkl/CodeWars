// Methods of String object--toUpperCase() toLowerCase() and replace()
// Task
// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.
//
// We translate the sentence into an alien language according to the following rules:
//
// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

function alienLanguage(str){
    //coding here...
    const words = str.toUpperCase()
    const result = words.split(' ')
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].slice(0, -1) + result[i].slice(-1).toLowerCase()
    }
    return result.join(' ')
}