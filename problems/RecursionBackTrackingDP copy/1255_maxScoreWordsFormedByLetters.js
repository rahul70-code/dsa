/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */

// pick and not pick recursion
var maxScoreWords = function (words, letters, score) {
    // start with 0 index.
    return getMaxScore(0, words, letters, score);
};

const getMaxScore = (index, words, letters, scores) => {
    // if index reached to words length return 0;
    if (index >= words.length) return 0;
    /**
     * pick case
     * 1. check if the word is valid - 
     *    words included in letters
     * 2. if valid
     *     1) pick - remove words characters from letters, increase index and add score.
     *     2) not pick - increase index.
     * 3. take max of pick and not pick.
     */
    let pick = 0;
    if (isValidWord(words[index], letters)) {
        const tempLetters = [...letters];
        words[index]
            .split("")
            .forEach((letter) => tempLetters.splice(tempLetters.indexOf(letter), 1));
        pick =
            getScore(words[index], scores) +
            getMaxScore(index + 1, words, tempLetters, scores);
    }

    const not_pick = getMaxScore(index + 1, words, letters, scores);

    return Math.max(pick, not_pick);
};

const isValidWord = (word, letters) => {
    let temp = [...letters];
    return word.split("").every((letter) => {
        const res = temp.includes(letter);
        temp.splice(temp.indexOf(letter), 1);
        return res;
    });
};

const getScore = (word, scores) => {
    return word.split("").reduce((sum, _, i) => {
        const index = word.charCodeAt(i) - 96;
        sum += scores[index - 1];
        return sum;
    }, 0);
};