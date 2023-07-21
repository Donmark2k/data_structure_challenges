/*
Given an integer array nums, create a function that moves all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

**Example 2:**
Input: nums = [0]
Output: [0]


create an array
push all zeros in it
then add it to nums array
*/

const pushZero = function(nums) {
    let result = []
    for (const num of nums) {
        if (num === 0) {
            result.push(num)
            nums.splice(nums.indexOf(num),1)
        }
    }
let final = nums.concat(result)
return final
}

const nums = [0,1,0,3,12]
const show = pushZero(nums)
console.log(show)
