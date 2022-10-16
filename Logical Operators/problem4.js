//Problem 4: Given 3 numbers (all different values), print which is greatest

let a = 10, b = 12, c = 30;
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


//Using Ternary operator

greatest == a && a == b || greatest == b && a == b ? console.log("a and b are equal and greatest") : console.log("");

greatest == b && c == b || greatest == c && b == c ? console.log("c and b are equal and greatest") : console.log("");

greatest == c && a == c || greatest == a && c == a ? console.log("a and c are equal and greatest") : console.log("");
