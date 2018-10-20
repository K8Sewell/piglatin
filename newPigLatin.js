// PIG LATIN TRANSLATOR

// pass a string that requires all rules of the program to be applied.
// var userText = "The quick brown fox jumped over the lazy dog. Squealing xylophones!"

// -------------------------------------------------------------- MINOR SUB FUNCTIONS
// split a paragraph so individual words are array items
function splitter(paragraph) {
//    console.log(paragraph)
    return paragraph.split(" ")
}

// function that checks if a word starts with a vowel (returns a boolean)
function checkVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
        return true
      } else {
        return false
      }
}

// check if a character is a capital (ie: for first words of sentences)
function checkCap(char) {
    if(char === char.toUpperCase()) {
        return true
    }
}

// -------------------------------------------------------------- MAJOR SUB FUNCTIONS
// function that takes a word as an array, looks for an index to splice that array
// and is passed an array that is either empty or containing punctuation
function pigLatin(lettersArr, spliceIndex, punctuation) {
    // splice the word depending on where the first vowel occurs in the word
    // lettersArr now contains just the consonants, and spliced contains the rest
    var spliced = lettersArr.splice(spliceIndex)
//    console.log(lettersArr, spliced);
    if(punctuation.length > 0) {
        lettersArr.push("a", "y", punctuation)
    } else {
        lettersArr.push("a", "y")
    }
    piggy1 = spliced.join("")
    piggy2 = lettersArr.join("")
//    console.log(piggy1, piggy2);
    if(checkCap(lettersArr[0]) && !checkVowel(lettersArr[0])) { // "The" is now [T, h, + "a", "y"] and [e]
        lettersArr[0] = lettersArr[0].toLowerCase() // T, h, a, y  => t, h, a, y
        piggy2 = lettersArr.join("") // thay
        newCap = piggy1.charAt(0).toUpperCase() // e => E
        piggyCap = newCap + piggy1.slice(1) // E + thay
//        console.log(piggyCap, piggy2);
        return pigified = `${piggyCap}-${piggy2}`
    } else {
        return pigified = `${piggy1}-${piggy2}`
    }
}

// loop that will check all words in the array and applies the rules of pig latin
function pigify(w) {
    // split each word into an array of letters
    var letters = w.split('')
//    console.log(letters);

    // function that pushes puncuation from end of word to a new array
    var punc = []
    if ( w[letters.length-1] === "." || w[letters.length-1] === "," || w[letters.length-1] === "!" || w[letters.length-1] === "?") {
        punc.push(w[letters.length-1])
        // .push is an accessor, so the punctuation has to be popped off the original letters array
        letters.pop()
    }
//    console.log(punc);

    // words that start with "q" and "sq"
    if(w.charAt(1) === "q") {
        pigLatin(letters, 3, punc)
        return pigified
    } else if(w.charAt(0) === "q") {
        pigLatin(letters, 2, punc)
        return pigified

    // words that start with "x"
    } else if(w.charAt(0) === "x" || w.charAt(0) === "X") {
        pigLatin(letters, 1, punc)
        return pigified
    }

    // words that start with a vowel
    if(checkVowel(w.charAt(0)) && punc.length > 0) {
//        console.log(`${letters.join("")}-way` + punc);
        return pigified = `${letters.join("")}-way` + punc
    } else if(checkVowel(w.charAt(0))) {
//        console.log(`${letters.join("")}-way`);
        return pigified = `${letters.join("")}-way`
    }

    // if a word starts with a consonant or consonants, find the first occurance of a vowel in the word
    // use that index to splice the word into two separate arrays.
    // the letters array is mutated to contain only the consonants.
    var FirstVowel = letters.findIndex(checkVowel)
    pigLatin(letters, FirstVowel, punc)
    return pigified
}

// -------------------------------------------------------------- MAIN FUNCTION
function translate(text, splitterFunc) {
//    console.log(":::STARTING PROGRAM:::")
    var wordsArray = splitterFunc(text)
//    console.log(":::SPLIT PARAGRAPH:::", wordsArray)
//    console.log(":::LOOP THOUGH WORDS:::")
//    console.log(":::SPLIT WORDS & APPLY RULES:::")
    var pigLatinArr = []
    for(let i = 0; i < wordsArray.length; i++){
        var word = wordsArray[i]
        pigify(word)
        pigLatinArr.push(pigified)
    }
    console.log(":::CONCAT & JOIN BACK INTO STRING:::")
    return pigLatin = pigLatinArr.join(" ")
}

//console.log(translate(userText, splitter))

// ------------------------------------------------------------- DOM FUNCTION

function grabPigLatin() {
    // store uText value as variable x
    let x = document.getElementById("uText").value
    // pass uText (x) to translate which calls splitter
    let output = translate(x, splitter)
    // translate() returns translated pigLatin string as var output
    // return manipulates the DOM with the variable output
    // output is now transferred inside HMTL tags <p id="outputed"></p>
    return document.getElementById("outputed").innerHTML = output
}

// Refresh the page and clear the input field

function refreshField() {
    history.go(0)
    return document.getElementById("uText").value = ""
}
