/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let leftPointer = 0, rightPointer = height.length - 1, maxArea = 0;
    while (leftPointer < rightPointer) {
        let minHeight = Math.min(height[leftPointer], height[rightPointer])
        let lengthBetweenContainers = (rightPointer - leftPointer)
        maxArea = Math.max(maxArea, minHeight * lengthBetweenContainers)
        if (height[leftPointer] < height[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }
    return maxArea;
};