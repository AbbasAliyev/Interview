let isAnagram = function(s, t) {
    return s.toLowerCase().split("").sort().join("") === t.toLowerCase().split("").sort().join("");
};
console.log(isAnagram("anas", "sana"));