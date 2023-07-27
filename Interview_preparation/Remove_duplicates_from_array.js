// let removeDuplicates = function(nums) {
//     nums.sort((a, b) => a - b)
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }
//   //  return Array.from(new Set(nums));
//     return nums;
// }
// console.log(removeDuplicates(['A', 'B', 'C', 'A', 'B']))
//
// let  char = [1, 2, 3, 1, 2, 5, 7, 7,6,5,2];
// let uniqChar = [...new Set(char)];
//
// console.log(uniqChar.sort());


// ============ Function
const list = [1, 3,7, 5,4, 11,  5, 4, 3, 'hi', 'hi', 'hi','bye', 'bye'];
function removeDuplicate(){
    return [...new Set(list)];
}
console.log(removeDuplicate(list));