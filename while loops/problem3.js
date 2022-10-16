// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit

var number = 15; // Given limit

let i = 0; // Initialization 

var sum = 0;  //Declaring a variable sum and assigning it zero : Observation 2 

while (i <= number) {      // condition

  if (i % 3 == 0)        // if loop to check if number is divisible by 3
  { sum = sum + i; }   // if divisible by 3 then add to the sum.
  i++;
}
console.log(" The sum of all the numbers between 0 and", number, " , which are divisble by three are = ", sum);    // print sum 