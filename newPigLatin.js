//piglatingoof modified and fixed (mainly rearranged)

var userText = "Now you can speak pig latin!"

// -------------------------------------------------------------- SUB FUNCTIONS
//split a paragraph so individual words are array items
function splitter(paragraph) {
    console.log(paragraph)
    return paragraph.split(" ")
}

//function that checks if a word starts with a vowel (using charAt)
function checkVowel(char) {
    if (char === "a" || char === "o" || char === "e" || char === "i" || char === "u"){
        return true
      } else {
        return false
      }
}

//loop that will check all words in the array that calls back checkVowel
function pigify(w) {
    var pigLatinArr = []
    // check if wordStr begins with a vowel
    if(checkVowel( w.charAt(0)) ) {
       //run the rule for a word that starts w a vowel
       return `${w}-way`
    }

    // split each word into arrays
    var letters = w.split('')

    //!---UNCOMMENT CONSOLE.LOG BELOW TO SHOW EVERY INDIVIDUAL WORD AS AN ARRAY
    // console.log("Each word split into a unique array: ", letters)

    // function that takes puncuation off end of word with letters.length-1
    if ( w[letters.length-1] === "." || w[letters.length-1] === "," || w[letters.length-1] === "!" || w[letters.length-1] === "?") {
        letters.pop()
    }

    // look for the first occurance of any vowel in each word (in the array "letters")
    function isAVowel(letter) {
        return checkVowel(letter)
    }
    // store the index # where the first vowel occurs in array
    var spliceAt = letters.findIndex(isAVowel)

    //!---UNCOMMENT THE NEXT 3 CONSOLE.LOGS BELOW TO SHOW splice method
    // console.log("spliced at [i] of first vowel-1: ", spliceAt) // <-------

    //splice letters array into two arrays where first vowel occurs
    var spliced = letters.splice(spliceAt)
    // console.log(letters) // <-------
    // console.log(spliced) // <-------

    letters.push("a", "y")
    // console.log(letters)

    var piggy1 = spliced.join("")
    // console.log(piggy1)

    var piggy2 = letters.join("")
    // console.log(piggy2)

    return pigified = `${piggy1}-${piggy2}`
}

// -------------------------------------------------------------- MAIN FUNCTION
function translate(text, splitterFunc) {
    console.log(":::STARTING PROGRAM:::")
    var wordsArray = splitterFunc(text)
    console.log(":::SPLIT PARAGRAPH:::", wordsArray)
    console.log(":::SPLIT & TRANSLATE WORDS:::")
    // console.log(":::TRANSLATE WORDS:::")
    var pigLatinArr = []
    for(let i = 0; i < wordsArray.length; i++){
        var word = wordsArray[i]
        pigify(word)
        pigLatinArr.push(pigified)
    }
    // console.log(pigLatinArr)
    console.log(":::CONCAT & JOIN BACK INTO STRING:::")
    return pigLatin = pigLatinArr.join(" ")
    console.log(pigLatin)
}

//something about qu returning the u too (check indexOf)
//function that creates new array of pigified words with .push() into []
//function that joins the array into a string with .join()

console.log(translate(userText, splitter));
