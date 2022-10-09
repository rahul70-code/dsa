/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
 var discountPrices = function(sentence, discount) {
    sentence = sentence.split(" ").map(w => {
            let letter = w.split("")
            if(letter[0] == "$") {
                letter.shift()
                let xx = letter.join("")
                let x = (+xx*discount)/100
                letter[1] = (+xx-x).toFixed(2)
                w = "$" + letter[1]
            }
        return w;
    })
    sentence = sentence.join(" ");
    return sentence;
};

console.log(discountPrices("ka3caz4837h6ada4 r1 $602",
9))