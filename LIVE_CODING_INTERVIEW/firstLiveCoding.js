/*
Compare two arrays and return a new array with any items only found in one of the two given arrays,
 but not both.
 In other words, return the symmetric difference between the two arrays.

You can return the array with its elements in any order.

******************Example 1:******************

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
*/

const difference = function(nums1, nums2) {
    for (const num of nums2) {
        if (nums1.includes(num)) {
            nums1.splice(nums1.indexOf(num), 1)
            nums2.splice(nums2.indexOf(num), 1)
        }
    }
    let result = [nums1].concat([nums2])
    return result
}

const nums1 = [1,2,3]
const nums2 = [2,4,6]
const diff = difference(nums1, nums2)
console.log(diff)