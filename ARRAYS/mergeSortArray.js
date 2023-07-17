/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/

const mergeArray = function (nums1, m ,nums2, n) {
    nums1.splice(m)
    nums2.splice(n)
    nums1.push(...nums2)
    return nums1.sort((a,b)=> a-b)
}

const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6]

const sort = mergeArray(nums1,3,nums2,3)
console.log(sort)


const mergeSortArray = function(nums3, m, nums4, n) {
    nums3.length = m;
    nums4.length = n;
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < m && j < n) {
      if (nums3[i] < nums4[j]) {
        result.push(nums3[i]);
        i++;
      } else {
        result.push(nums4[j]);
        j++;
      }
    }
  
    // If there are remaining elements in nums3 or nums4, append them to the result
    while (i < m) {
      result.push(nums3[i]);
      i++;
    }
  
    while (j < n) {
      result.push(nums4[j]);
      j++;
    }
  
    return result;
  };
  


const nums3 = [1,2,3,0,0,0]
const nums4 = [2,5,6]

const sorted = mergeSortArray(nums3,3,nums4,2)
console.log(sorted)