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
console.log(removeDuplicates(['A', 'B', 'C', 'A', 'B']))

let  char = [1, 2, 3, 1, 2, 5, 7, 7,6,5,2];
let uniqChar = [...new Set(char)];

console.log(uniqChar.sort());


// function sum (a, b){
//     return a + b;
// }
// console.log(sum(10, 11));