//
// for(let i = 0; i <= 10; i++)
//
// console.log(i)

const arr = [110, 4, 22, 421, 77, 90, 12, 42];
const arr2 = [];
for(let i = 0; i <= arr.length; i++){
    if(arr[i] % 2 === 0){
        arr2.push(arr[i])
    }

}
console.log(arr2)