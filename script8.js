let arr = [0,1,2,3,5,6,7,8,9];
let n = 10;
function missEle(arr,n) {
    for(let i=0;i<n;i++){
        if(i!=arr[i]){
            return i;
        }
    }
}
console.log("the missing element is "+missEle(arr,n));
