/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

const majorityElement = function(nums) {
    let counts = {}
    const majority = Math.floor(nums.length/2)
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1
        if (counts[num] > majority) {
            return num
        }
    }
}

const nums = [2,2,1,1,1,2,2]
const major = majorityElement(nums)
console.log(major)