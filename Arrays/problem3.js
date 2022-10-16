// find avaerage of even in the array
// which are even elements
//what is the sum of those elements
// how many elements ? count
//Avarage
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
count = 0;
console.log("The even numbers in the array are : " );
for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
    sum += arr[i];
    count++;
  }
}
console.log("The Sum of even number in array is", sum);
console.log("the average is : ", sum / count);