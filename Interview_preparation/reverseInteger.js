let rev = 0;
let n;
while (n != 0) {
   let temp = n % 10;
    rev = rev * 10 + temp;
    n /= 10;
}
