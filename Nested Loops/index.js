// Print "hello " in 3 groups

// for(let i= 0; i<4;i++) // i = 4, inner loop run 3 times
// {   console.log("\n"); // space before every exceution
//     console.log("this is Outer loop",i)

//     for(let j = 0 ; j<3; j++) // j =3 , prints hello 3 times
//       { console.log(' '+"Hello"+' ');
//       console.log(" This is inner loop J ",j)}
// }

// // for better understanding 
// for(let i= 0; i<4;i++) // i = 4, inner loop run 3 times
// {   console.log("\n"); // space before every exceution
//     console.log("this is Outer loop",i)

//     for(let j = 0 ; j<3; j++) // j =3 , prints hello 3 times
//       { console.log(i,j);}
// }

// father and son due have 5 farms and father asked the son to plant 5 seeds in each farm.
// var seed = '*';
// var i, j;
// var planted_seed=0;
// // start from i=1 as I dont want farm =0 and keep i<=5


// for(i=1;i<=5;i++)
//   { console.log("\n"); // for space before each loop
//     console.log("plant farm seeds in farm",i)
//     for(j=1;j<=5;j++)

//     { 
//         console.log("Start Planting seed  ",j)

//       }
//   }



// var seed = '*';
// var i, j,k;
// var planted_seed=0;
// // start from i=1 as I dont want farm =0 and keep i<=5
// for(i=1;i<=5;i++)
//   { console.log("\n"); // for space before each loop
//     console.log("plant farm seeds in farm",i)
//     for(j=1;j<=5;j++)
//       { 
//         console.log("Start Planting seed  ",j,seed)
//         for(k = 0; k<5 ; k++)
//           { seed = seed+'*';
//          }
//       }
//   }




// var seed = '*';
// var i, j,k;
// var planted_seed=0;
// // start from i=1 as I dont want farm =0 and keep i<=5
// for(i=1;i<=5;i++)
//   { console.log("\n"); // for space before each loop
//     console.log("plant farm seeds in farm",i)
//     for(j=1;j<=5;j++)
//       { 
//         console.log("Start Planting seed  ",j,seed)
//        j==1?console.log("*"):'';
//        j==2?console.log('**'):'';
//        j==3?console.log('***'):'';
//        j==4?console.log("****"):'';
//        j==5?console.log('*****'):'';
//       }
//   }




// // this is working but not horizontal
// var seed = '*';
// var i, j,k;
// var planted_seed=0;
// // start from i=1 as I dont want farm =0 and keep i<=5
// for(i=1;i<=5;i++)
//   { console.log("\n"); // for space before each loop
//     console.log("plant farm seeds in farm",i)
//     for(j=1;j<=5;j++)
//       { 
//         console.log("Start Planting seed  ",j)
//        j==1?console.log("*"):'';
//        j==2?console.log('**'):'';
//        j==3?console.log('***'):'';
//        j==4?console.log("****"):'';
//        j==5?console.log('*****'):'';
//       }
// }




//plant seeds in horizontal manner : Chnnu is asking Munnu to plant 5 seeds in 4 farms horizontally i.e 12345-12345-12345
// the planting horizontally 

// let bag ='';
// for(let seed=1;seed<=5;seed++)
//   {bag+='*'+' ';}
// console.log(bag);

//now for each farm


// for(let farm =1;farm<=10;farm++)
//  {var bag ='';

//       for(let seed=1;seed<=5;seed++)
//             {bag+='*'+' ';}
//  console.log(bag);

// }

//if you place var bag above the both loops, the results will get added ( var bag is not reset after every iteration of farm)
// var bag ='';
// for(let farm =1;farm<=4;farm++)
// {

//       for(let seed=1;seed<=5;seed++)
//             {bag+='*'+' ';}
//  console.log(bag);

// }




// Chunnu is asking plant seeds in increasing seed order( star pattern - increasing )

//farm numbers = number of seeds

// for(let farm =1;farm<=10;farm++)
// {var bag ='';

//       for(let seed=1;seed<=5;seed++)
//             {bag+='*'+' ';}
//  console.log(bag);

// }
// will print star if seed = farm (i=j), so instead of seed<=5, replace its with farm
// Run outer loops till max value, and inner loop condition = outer times.
// star pattern below
// for(let farm =1;farm<=10;farm++)
// {var bag ='';

//       for(let seed=1;seed<=farm;seed++)
//             {bag+='*'+' ';}
//  console.log(bag);

// }

//Print output like 
// 1
// *
// 2
// **
// 3
// ***
// 4
// ****
// 5
// *****

// for(i=1;i<=5;i++)
//   { var bag ="";
//     var sum = 0;

//    for(j=1;j<=i;j++)
//       {bag+='*'+'';
//        sum= j+ ' ';
//       }
//    console.log(sum);
//    console.log(bag);
//   }


//break and countinue statement
//break // why 1 is not printed like 1 1 1 
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 3; j++) {
//     if (i == 3) { break; }
//     console.log(i, j);
//   }
// }

//continue : 1st try( see console.log is outside inner loop)
// for (let i = 1; i <= 4; i++) {
//   for (var j = 1; j <= 3; j++) {
//     if (j == 2) { continue; }
//   }
//   console.log(i, j);
// }

// for (let i = 1; i <= 4; i++) {
//   for (var j = 1; j <= 3; j++) {
//     if (j == 2) { continue; }
//     console.log(i, j);
//   }
// }

// continue and break are giving the same result;
// for (let i = 1; i <= 4; i++) {
//   for (var j = 1; j <= 3; j++) {
//     if (i == 2) { continue; }
//     console.log(i, j);
//   }
// }
// console.log("bReak")
// for (let i = 1; i <= 4; i++) {
//   for (var j = 1; j <= 3; j++) {
//     if (i == 2) { break; }
//     console.log(i, j);
//   }
// }

//Problem 1: Print the Calendar date in the below format
// for(i=1;i<=12;i++)
//   {for(j=1;j<=31;j++)
//     {console.log(i,"-",j)}  

//   }



input = N * N;
var i, j;
var bag = " ";
for (i = 1; i <= N; i++) {
  for (j = 1; j <= input; j++) {

    bag += j + '';

  }

  console.log(bag + "\n");

}