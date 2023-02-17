let arr = ['a', 'a', 'a', 'a', 'a'];

let sameElements = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (arr[i] === arr[j]){
            sameElements = true;
        }
    }
}
if (sameElements) {
    console.log("array is the same");
} else {
    console.log("array is not the same");
}