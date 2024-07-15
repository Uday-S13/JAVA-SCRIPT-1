function countCharOcc(givenStr) {
    const charCount = {};

    for (let i of givenStr) {
        if (charCount[i]) {
            charCount[i]++;
        } else {
            charCount[i] = 1;
        }
    }

    return charCount;
}
console.log(countCharOcc("hello world"));
