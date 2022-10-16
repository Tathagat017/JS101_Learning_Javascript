//Problem 2: Print the odd numbers from 0 till the given limit
// Priniting Odd numbers from 1 to 50. Printing number horizontally by jhola or horizontal ; 
var horizontal = " ";
var num = 50; // given limit
let i = 1;
console.log("Odd numbers between 1 - 50 are ")
while (i <= num) {
  if (i % 2 != 0) {
    horizontal += i + " ";
  }
  i++;
}
console.log(horizontal);