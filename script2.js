function palindrome(str){
    let res=str.split("").reverse().join("");
    if(res===str){
       return str +" is a Palindrome";
    }
    else{
        return str +" Not a Palindrome";
    }
}
console.log(palindrome("madam"));
console.log(palindrome("hello"))
