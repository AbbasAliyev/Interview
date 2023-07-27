// function removeElement(nums, val){
// let i = 0;
// for(let j = 0; j < nums.length; j++){
//     if(nums[j] !== val){
//         nums[i] =nums[j];
//         i++;
//     }
// }
// return i;
// }
//
// let nums = [3, 2, 2, 3];
// let val = 3;
//
// let result = removeElement(nums, val);
//  // console.log(result); // Output: 2
//  console.log(nums); // Output: [2, 2]
let nums = [3, 2, 2, 3];
let val = 3;
function removeElement(nums, val) {
    let i = 0; // Pointer for non-val elements

    for (let j = 0; j < nums.length; j++){
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
}


let result = removeElement(nums, val);
// console.log(result); // Output: 2
console.log(removeElement()); // Output: [2, 2]