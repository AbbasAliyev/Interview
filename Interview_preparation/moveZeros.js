function move(arr, num){
    for(let i = 0;i < arr.length; i++){
        if(arr[i] === num){
            arr.push(num)
        }
    }
    return arr;
}
console.log(move([1,4,0,7,9,0,8,4], 0));