// var isPalindrome = function(s) {
// // const arr = [];
// // const arr2 = s.split('');
// // for(let i = arr2.length -1; i >= 0; i--){
// //     arr.push(arr2[i]);
// // }
// // return arr.join('').toLowerCase() === arr2.join('').toLowerCase()
// };
// console.log(isPalindrome('Abba'));


var isPalindrome = function(s) {
    let rev = s.toLowerCase().split('').reverse().join('');
console.log(rev);
if (s.toLowerCase() === rev){
return "palindrome";
} else return "not a palindrome";
 }
 console.log(isPalindrome('Abbas'))