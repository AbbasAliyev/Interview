let removeDuplicates = function(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
  //  return Array.from(new Set(nums));
    return nums;
}
console.log(removeDuplicates([11, 11, 43, 43, 33, 22, 11]))


// function sum (a, b){
//     return a + b;
// }
// console.log(sum(10, 11));