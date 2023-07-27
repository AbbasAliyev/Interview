function reverseString(txt) {
    let reversed = '';
    for (let i = txt.length - 1; i >= 0; i--) {
        reversed += txt.charAt(i);
    }
    return reversed;
}
console.log(reverseString('Abbas'));