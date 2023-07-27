function detect (str,char){
    for(let i = 0; i < str.length; i++ ){
        if(str[i] === char){
            return i;
        }
    }
    return -1
}
console.log(detect("Hello", "o"));