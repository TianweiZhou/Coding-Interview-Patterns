/*
Given an array of integers sorted in ascending order and a target value, return the indexes of any pair of numbers in the array that sum to the target. 
The order of the indexes in the result doesn't matter. If no pair is found, return an empty array.

Example 1:
Input: nums = [-5, -2, 3, 4, 6], target = 7
Output: [2, 3]
Explanation: nums[2] + nums[3] = 3 + 4 = 7

Example 2:
Input: nums = [1, 1, 1], target = 2
Output: [0, 1]
Explanation: other valid outputs could be [1, 0], [0, 2], [2, 0], [1, 2] or [2, 1].
*/

const pairSum = (nums, target)=>{
    let left = 0;
    let right = nums.length - 1;
    let sum;
    while (left < right) {
        sum = nums[left] + nums[right];
        if(sum === target){
            return [left, right]
        }
        if(sum < target) left += 1;
        if(sum > target) right -= 1;
    }
    return [];
}

const nums = [-5, -2, 3, 4, 6];
const target = -5;
const result = pairSum(nums, target);
console.log("🚀 ~ result:", result)
