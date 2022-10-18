// hard
// https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function (nums1, nums2) {
    const nums3 = [...nums1, ...nums2];
    var half = Math.floor(nums3.length / 2);

    nums3.sort(function (a, b) { return a - b; });

    if (nums3.length % 2) {
        return nums3[half];
    } else {
        return (nums3[half - 1] + nums3[half]) / 2.0;
    }

};