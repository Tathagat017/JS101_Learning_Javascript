// var i = 1;
// while (i <= 5) {
//   console.log("Hello World");
//   ++i;
// }


// let z = 20;
// z -= 5;
// z+= 51;
// console.log(z);

// var j = 0;
// while (j < 10) {
//   console.log(j)
//   j += 1;
// // }
// // while(j<20)
// //   {console.log(j);
// //    j=j+1;
// //   }

// console.log(" Pre and post increment without assign X = 1 (X++ AND ++X");
// let X=1, X1=1 , X2=1;X3=1;
// X++;//X++ is same as ++X for not assigned to another variable 
// console.log(X);
// ++X3;
// console.log(X); // X is now 2 here
// console.log("post increment when assigned");
// y=X1++;//first assign and then increment so y is given 1 and then X1 is incremented
// console.log(y);// value is assined first ( i.e y = 1)
// console.log(X1);// value of X1 increased by 1 =2
// console.log("Pre increment with assigned ")
// let g = ++X2; // value of X2 is increased first i.e = 2 and then assigned to g i.e g= 2)
// console.log(g);
// console.log(X2);

// console.log("pre and post decrement")
// X=1;
// //post decrement
// console.log(X); // X is 1 
// y = X--; //  value of y is assigned as 1 first and then X  is decreased by 1 i.e X has become 0
// console.log(y); // value would be 1
// console.log(X);// valye would be 0

//LOOPS - WHILE LOOP

var m = 0, n = 0;
// while (m<100)
//   {console.log(n);
//   n = m++;} // output has 0 -0- -1- till 99 becuase of value of n is assigned first 0 and then m is increased

// while (m < 100) {
//   console.log(n);// output has 0 -1 - 2 - 3 till 
//   n = ++m;
// }
// while (m<11)
//   {console.log(m);
//   ++m;}
//BREAK STATEMENT : STOP Whereever indicated 
// console.log("Break statement stopping loop at 5th iteration")
// let x =1;
// while (x<=10){
//   if(x==5) // here the condition breaks : x==5, hence for x=5 exit takes place
//   {break;}
// console.log(x);
//   x++;
// }

//if you move the code block of break above or below : no change : samw result 

// let x =1;
// while (x<=10){

// console.log(x);
//   x++;

//     if(x==5) // here the condition breaks : x==5, hence for x=5 exit takes place
//   {break;}
// }

// CONTINUE STATEMENT /// below is endless loop : says skip everything belwo me 

// let x = 1;
// while (x <= 10) // initialization 
// {
//   if (x == 3) { continue; } // here when x is 3, then it skips everything below the continue and goes to initialization again 
//   console.log(x);
//   x++;
// }

let a = 10, b = 11;
if (a ** b > 1000) {

  if (a == b || a >= b) {
    if (a != b) {
      a = a * b;
      b = b / a;
    }

  }
  console.log(a, b);
}