//piglatingoof

var userText = "Something to turn into pig latin."

translate(userText, splitter, isolateWord){

}

//higher function that splits text, pigify which also checks checkVowels
function translate(text, splitterFunc, isoWordfunc) {
    var splitText = splitterFunc(text)
    var piggy = isoWordfunc(splitText)
    console.log(splitText)
    console.log(piggy)
}

//split every space so individual words are arrays
function splitter(paragraph) {
    console.log(splitText)
    isolateWord(paragraph.split(" "))
}

//create a loop that takes you through the lenght of the arrays
function isolateWord(arr) {
  for (let i = 0; i < arr.length; i++){
    var isoWord = arr[i]
    pigify(isoWord, checkVowel)
  }
}

//loop that will check all words in the array that call s back checkVowels
function pigify (word, checker) {
  for (let i = 0; i < word.length; i++){
    if (checker(word.charAt(0))){
      console.log(`${word}-way`)
      return `${word}-way`
    } else {
      console.log(`noway`)
      return `noway`
    }
  }
}

//something about qu returning the u too (check indexOf)
//function that checks if starts with vowels (using charAt)

function checkVowel(char){
  if (char === "a" || char === "o" || char === "e" || char === "i" || char === "u"){
    return true
  } else {
    return false
  }
}

//function that creates new array of pigified words with .push() into []



//function that joins the array into a string with .join()


translate(userText, splitter, isolateWord)



//pL.js

var text = 'This is a test sentence'
var seperated

function splitter(text) {
   seperated = text.split(' ')
   console.log(seperated)
   return seperated
}


function vowelChecker(char) {
   if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
       return true
   } else {
       return false
   }
}

function wordLoop(arr) {
   for(let i = 0; i < arr.length; i++) {
        piggy(arr[i])
   }
}

function piggy(word) {
   var wordStr = word.split('')
   // console.log(wordStr)
   for(let i = 0; i < wordStr.length; i++) {
       // if word begins with vowel
       if( vowelChecker(word.charAt(0)) ) {
           //run the rule for a word that starts w a vowel
           // console.log(`${word}-way`)
           return `${word}-way`
        } else {
            // word begins with consonant
            for(let i = 0; i < wordStr.length; i++) {
                // look for next vowel
                if( vowelChecker(wordStr[i]) ) {
                    var spliceIndex = i-1
                }
           }
           var spliced = wordStr.splice(spliceIndex)
        }
   }
   // console.log(wordStr.push('a', 'y'))
   // console.log(wordStr)
   var splicedStr = spliced.join('')
   // console.log(splicedStr)
   // //push [a, y] into wordStr
   var consAy = wordStr.concat(['a', 'y'])
   var consAyStr = consAy.join('')
   // console.log(consAyStr)
   return `${splicedStr}-${consAyStr}`

   // //concat array in the proper order
   // var pigifiedArr = spliced.concat(consAy)
   // console.log(pigifiedArr)
   // console.log(wordStr)
}

// console.log(wordLoop(seperated))
splitter(text)
console.log(piggy('learn'))
console.log(piggy('enrique'))
console.log(piggy('apple'))


//pL54.js

var yourText = 'This is a test sentence'
var seperated

function splitter(text) {
   seperated = text.split(' ')
   function wordLoop(arr) {
     for(let i = 0; i < arr.length; i++) {
       let word = arr[i]
       function piggy(word) {
         var wordStr = word.split('')
         // console.log(wordStr)
         for(let i = 0; i < wordStr.length; i++) {
           if ( vowelChecker(word.charAt(0)) ) {
             //run the rule for a word that starts w a vowel
             // console.log(`${word}-way`)
             return `${word}-way`
           } else {
             for(let i = 0; i < wordStr.length; i++) {
               if( vowelChecker(wordStr[i]) ) {
                 var spliceIndex = i-1
               }
             }
             var spliced = wordStr.splice(spliceIndex)
           }
         }
         // console.log(wordStr.push('a', 'y'))
         // console.log(wordStr)
         var splicedStr = spliced.join('')
         // console.log(splicedStr)
         // //push [a, y] into wordStr
         var consAy = wordStr.concat(['a', 'y'])
         var consAyStr = consAy.join('')
         // console.log(consAyStr)
         return `${splicedStr}-${consAyStr}`

         // //concat array in the proper order
         // var pigifiedArr = spliced.concat(consAy)
         // console.log(pigifiedArr)
         // console.log(wordStr)
       }
     }
   }
   console.log(seperated)
   return seperated
}


function vowelChecker(char) {
   if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
       return true
   } else {
       return false
   }
}



// console.log(wordLoop(seperated))

console.log(splitter(yourText))


//piglatin.js

function splitter (str) {
  return str.split(" ")
}


// function wordLoop(arr) {
//     for(let i = 0; i < arr.length; i++) {
//       var pigArr = []
//         var indWord = arr[i]
        function piggy(indWord) {
            var wordStr = indWord.split("")
            // console.log(wordStr)
            for(let i = 0; i < wordStr.length; i++) {
                if ( vowelChecker(indWord.charAt(0)) ) {
                    //run the rule for a word that starts w a vowel
                    console.log(`${word}-way`)
                    var pigVowl =  `${word}-way`
                    pigArr.push(pigVowl)
                } else {
                    for(let i = 0; i < wordStr.length; i++) {
                        if( vowelChecker(wordStr[i]) ) {
                            var spliceIndex = i-1
                        }
                    }
                    var spliced = wordStr.splice(spliceIndex)
                }
            }
            // console.log(wordStr.push("a", "y"))
            console.log(wordStr)
            var splicedStr = spliced.join("")
            // console.log(splicedStr)
            //push [a, y] into wordStr
            var consAy = wordStr.concat(["a", "y"])
            var consAyStr = consAy.join("")
            console.log(consAyStr)

            var pigCons = `${splicedStr}-${consAyStr}`
            pigArr.push(pigCons)
            // //concat array in the proper order
            // var pigifiedArr = spliced.concat(consAy)
            // console.log(pigifiedArr)
            console.log(wordStr)
        }

    }
//     console.log(pigArr);
//     return pigArr
// }

function vowelChecker(char) {
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true
    } else {
        return false
    }
}


var test = ["this", "is", "test"]

console.log(piggy("tag"))
console.log(piggy("evolution"))
console.log(wordLoop(test))


//pigCons.js


var text = "This is a test sentence"
var seperated

function splitter(text) {
    seperated = text.split(" ")
    console.log(seperated)
    return seperated
}


function vowelChecker(char) {
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true
    } else {
        return false
    }
}

function wordLoop(arr) {
    for(let i = 0; i < arr.length; i++) {
        piggy(arr[i])
    }
}

function piggy(word) {
    var wordStr = word.split("")
    // console.log(wordStr)
    for(let i = 0; i < wordStr.length; i++) {
        if ( vowelChecker(word.charAt(0)) ) {
            //run the rule for a word that starts w a vowel
            // console.log(`${word}-way`)
            return `${word}-way`
        } else {
            for(let i = 0; i < wordStr.length; i++) {
                if( vowelChecker(wordStr[i]) ) {
                    var spliceIndex = i-1
                }
            }
            var spliced = wordStr.splice(spliceIndex)
        }
    }
    // console.log(wordStr.push("a", "y"))
    // console.log(wordStr)
    var splicedStr = spliced.join("")
    // console.log(splicedStr)
    // //push [a, y] into wordStr
    var consAy = wordStr.concat(["a", "y"])
    var consAyStr = consAy.join("")
    // console.log(consAyStr)
    return `${splicedStr}-${consAyStr}`

    // //concat array in the proper order
    // var pigifiedArr = spliced.concat(consAy)
    // console.log(pigifiedArr)
    // console.log(wordStr)
}
console.log(wordLoop(seperated))
splitter(text)
console.log(piggy("learn"))
console.log(piggy("enrique"))


//pigtest2er.js

var userText = "Something to turn into pig latin."

//higher function that splits text, pigify which also checks checkVowels
function translate (text, splitterFunc, isoWordfunc) {
  var splitText = splitterFunc(text)
  var isolatedWord = isoWordfunc(splitText, pigify)
}

//split every space so individual words are arrays
function splitter (str) {
  return str.split(" ")
}

//create a loop that takes you through the lenght of the arrays
function isolateWord (arr, pigifyFunc) {
  for (let i = 0; i < arr.length; i++){
    var isoWord = arr[i]
  }
  pigifyFunc(isoWord, checkVowel)
}

//loop that will check all words in the array that call s back checkVowels
// function pigify (word, checker) {
//   var pushed = []
//   for (let i = 0; i < word.length; i++){
//     //function that creates new array of pigified words with .push() into []
//     if (checker(word.charAt(0))){
//       // console.log(`${word}-way`)
//       pushed.push(`${word}-way`)
//     } else {
//       // console.log(`noway`)
//       pushed.push(`no-way`)
//     }
//   }
//   console.log(pushed)
//   return pushed
// }

function pigify (word, checker) {
  var pushed = []
  for (let i = 0; i < word.length; i++){
    if (checker(word.charAt(0))){
      console.log(`${word}-way`)
      pushed.push(`${word}-way`)
    } else {
      console.log(`no-way`)
      pushed.push(`no-way`)
    }
  }
  console.log(pushed)
}


//something about qu returning the u too (check indexOf)
//function that checks if starts with vowels (using charAt)

function checkVowel(char){
  if (char === "a" || char === "o" || char === "e" || char === "i" || char === "u"){
    return true
  } else {
    return false
  }
}


// function joiner() {
//
// }

//function that joins the array into a string with .join()


translate(userText, splitter, isolateWord)
