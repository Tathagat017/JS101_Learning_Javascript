// Problem 4: Print the average of even numbers from 1 to 100 (both included)

var number = 100;
var sum = 0;
var jhola = " ";
var i = 1;
while (i <= number) {
  if (i % 2 == 0) {
    sum = sum + i;
    jhola += i + " "; // concatenation done for horizontal display
  }
  i++;
}
console.log(" The numbers are : ", jhola);
console.log("The sum is : ", sum);

