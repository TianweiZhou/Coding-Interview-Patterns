/*
Given an array of integers, return all triplets [a, b, c] such that a + b + c = 0 . 
The solution must not contain duplicate triplets (e.g., [1, 2, 3] and [2, 3, 1] are considered duplicates). 
If no such triplets are found, return an empty array.

Each triplet can be arranged in any order, and the output can be returned in any order.

Example:
Input: nums = [0, -1, 2, -3, 1]
Output: [[-3, 1, 2], [-1, 0, 1]]
*/

const tripletSum = (nums) => {  
    const result = []
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1
        console.log("🚀 ~ tripletSum ~ left:", left)
        let right = nums.length - 1;
        console.log("🚀 ~ tripletSum ~ right:", right)
        while(left < right){
            let sumOfTwo = nums[left] + nums[right];
            if(sumOfTwo + nums[i] === 0){
                result.push([nums[i], nums[left], nums[right]]);
                left ++;
            }
            if (sumOfTwo + nums[i] < 0) {
                left += 1;
            }
            if (sumOfTwo + nums[i] > 0) {
                right -= 1;
            }
        }
    }
    return result;
}

const nums = [0, -1, 2, -3, 1];
const result = tripletSum(nums);
console.log("🚀 ~ result:", result)
