function merge(nums1, nums2, m, n) {
    let i = m - 1, j = n - 1, tar = m + n - 1;
    while (j >= 0) {
        nums1[tar--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
}

console.log(merge([1,2,3,0,0,0], [2,5,6], 3, 3))