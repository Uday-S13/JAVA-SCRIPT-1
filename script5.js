function longestWord(givenStr) {
    let words = givenStr.split(" "); 
    let res = "";
    for(let word of words){
        word = word.replace(/[^\w]/g, '');
        if(word.length > res.length){
            res = word;
        }
    }
    return res;
}
console.log(longestWord("a bb cc ggggg hhhhhhhhh jjjj"));
