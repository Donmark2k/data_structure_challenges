/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4  */

/*

const searchInsert = function(nums, val) {
    for (i =0; i < nums.length; i++) {
        if (nums[i] === val) {
            return i
        } else if (val < nums[0] ) {
            return 0;
        } else if (val > nums[(nums.length-1)]) {
            return nums.length
        } else if (nums[i] < val && nums[i+1] > val) {
            return i + 1
        }
    }
}  */

var searchInsert = function(nums, target) {
    let low =0
    let high = nums.length - 1

    while(low <= high) {
        let mid = Math.floor((low + high)/2)

        if (nums[mid] === target) {
            return mid
        } else if (nums [mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return low
  };
  


const nums = [1,3,5,6]
const search = searchInsert(nums, 12)
console.log(search)