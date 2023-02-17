let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, null, 'e'];
let elementEven = 0;
let elementOdd = 0;
let elementOther = 0;
let elementZero = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === 0) {
      elementZero++;
    } else {
        if  (typeof(arr[i]) != 'number') {
          elementOther++;
        } else {
            if (arr[i] % 2 === 0) {
              elementEven++;
            } else {
               elementOdd++;
        }
    }
  }
}
console.log("Even - " + elementEven);
console.log("Odd - " + elementOdd);
console.log("Other - " + elementOther);
console.log("Zero - " + elementZero);