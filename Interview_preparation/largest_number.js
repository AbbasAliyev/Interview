const  numbers = [4,22,43,11,55,1];

// console.log(Math.min(...numbers));

// const largestNumber = (values) => {
//     let highest = 0;
//     for(let i = 0; i < values.length; i+=1) {
//         if (values[i] > highest) {
//             highest = values[i];
//         }
//     }
//     return highest;
// }
//
// console.log(largestNumber(numbers));
let largestNumber = numbers[0];
for(let i = 0; i <= largestNumber; i++){
    if(numbers[i] > largestNumber){
        largestNumber = numbers[i];
    }
}

console.log(largestNumber);
//