pigLatin(lettersArr, spliceIndex, punctuation, hasCap) {
    var spliceQ = lettersArr.splice(spliceIndex)
    if(punctuation.length > 0) {
        lettersArr.push("a", "y", punctuation)
    } else {
        lettersArr.push("a", "y")
    }
    piggy1 = spliceQ.join("")
    piggy2 = lettersArr.join("")
    return pigified = `${piggy1}-${piggy2}`
}
