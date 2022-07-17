/**
 * LC - 1689
 * A decimal number is called deci-binary if each of its digits is 
   either 0 or 1 without any leading zeros. 
   For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

    Given a string n that represents a positive decimal integer, 
    return the minimum number of positive deci-binary numbers needed 
    so that they sum up to n.

    Input: n = "32"
    Output: 3
    Explanation: 10 + 11 + 11 = 32
*/

const n = "32";
console.log(Math.max(...n))

/**
 *    32
 *    10
 *    11
 *    11
 * 
 * if we fill all the black space with zeros then the sum comes out to be 32
 * so effectively, maximum digit is "n" is deciding how many 1s will be present, The total
 * no of 1s required to sum up to form the max digit is deciding how many numbers required
 * for the total sum. Therefore return max(n)
 */

/**
 * 
 *  Some things that may help people to solve future problems like this, the first thing is to try to categorize the problem form the problem statement and the input type and constraints,
    the first thing that came up to me while reading the problem especially the part that says the minimum number of deci-binary numbers, is that I will either need to use Greedy method or DP/BFS to find the answer, as our problem asking for minimization/optimization, after reading the input constraints and seeing that the string could be of 105 length, I abandon the DP/BFS solution as the lookup table length would be unnecessarily large, now I'm only left with the Greedy method and one big question mark which is how to crack up the problem statement and gain more insights,
    I took a look at the input and noticed that the first two inputs (32, 82734) answers was every time the biggest digit in the input, so I looked at the third input 27346209830709182346 and searched for the biggest digit which is 9, then I reached the conclusion the answer might be simply returning the biggest digit, I wrote the solution and it worked
 * 
 * 
 * 
 */