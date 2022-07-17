/**
 * LC- 1423
 *  There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12
Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

 * 
 */

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
 var maxScore = function(cardPoints, k) {
    let res = 0;
    for(let i=0;i<k;i++) res+=cardPoints[i];
    let curr = res;
    for(let i=k-1;i>=0; i--) {
        curr-=cardPoints[i];
        curr+=cardPoints[cardPoints.length-k+i];
        res = Math.max(res, curr);
    }
    return res;
};


let result = maxScore([1,2,3,4,5,6,1], 3)
console.log(result)


/**
 * good solution for this answwer
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/discuss/2197791/Reframing-The-Question-or-JAVA-Explained
 */

