//Problem 4: Given 3 numbers (all different values), print which is greatest 

let a = 10, b = 30, c = 30;
let greatest;

if (a > b && a > c) {
  greatest = a;
  console.log(greatest, "is greatest");
}
else if (b > a && b > c) {
  greatest = b;
  console.log(greatest, "is greatest");
}
else {
  greatest = c;
  console.log(greatest, "is greatest");
}

// for cheching if any of the two numbers are greatest and equal. ( not is assignment , I was trying to see if we can print the greatest and print if any of three are equal. ) 

// if ((greatest == a && a == b) || (greatest == b && b == a)) { console.log(" a and b are greatest and equal"); }
// if ((greatest == c && a == c))|| (greatest == c && c == a)) { console.log("c and a are greatest and equal"); }
// if ((greatest == b && b == c))|| (greatest == c && c == b))
// { console.log("c and b are greatest and equal"); }

// Using Ternary operator( this is working, good output)

// greatest == a && a == b || greatest == b && a == b ? console.log("a and b are equal and greatest") : console.log("");

// greatest == b && c == b || greatest == c && b == c ? console.log("c and b are equal and greatest") : console.log("");

// greatest == c && a == c || greatest == a && c == a ? console.log("a and c are equal and greatest") : console.log("");
