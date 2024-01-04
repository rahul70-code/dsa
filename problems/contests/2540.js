var getCommon = function(nums1, nums2) {
    let l = 0, r = 0;
    while(l < nums1.length && r < nums2.length){
        if(nums1[l] < nums2[r]) l++;
        else if(nums1[l] > nums2[r]) r++;
        else return nums1[l];
    }
    return -1;
};


console.log(getCommon([5,15,16,20,22,39,43,44,44,55,61,62,62,64,72,73,81,88,90,95],
    [2,8,9,11,12,13,26,29,38,49,50,51,58,63,67,72,75,82,92,96]))