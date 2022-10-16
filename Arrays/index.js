// var name = ["raj", "aman", "megha", "pulkit"];
// console.log(name);

// console.log(name[0]); // via index
// console.log(name[1]);
// // to get the last item
// var item = name.length; // tp get the number of items and store them ;
// console.log(name[item - 1]);

// var marks = [10, 20, 30, 40];
// console.log(marks);
// console.log(marks.length);
// console.log(name.length);

// var data = ["Raj", 27, true];
// console.log(data);
// console.log(data.length);
// console.log(typeof (data));

// // to change value in array from megha to Ram
// name[2] = "Ram";
// console.log(name);


// // to add more items : push
// console.log(name);
// console.log(name.length);
// name.push("Lohit");

// console.log(name);
// console.log(name.length);
// name.push("Mohit");
// console.log(name);
// console.log(name.length);

// // Remove a element from array : POP
// name.pop(); // remove last element : Mohit
// console.log(name);
// console.log(name.length);

// // declare and array contaning the name of your movie and print it

// var movie = ["Matrix","Batman","Harry Potter","Joker","Manjhi", ""]; // with empty string
// console.log(movie);

// let data = [1,2,3,4,5,6,6,7];
// let index = data.length;

// let shata = [1,2 , 3 , 5];
// console.log(shata);

// let train_names = ["Rajdhani express","Duronto","Shatabdi","Sampark Kranti","Garib rath","Mysore Express","Lalbagh Express"]; // 7 elements

// //how many trains?
// console.log(train_names);
// console.log(train_names.length); // length is number of trains

// // which is the last train name ?
// console.log(train_names.length-1);
// let lastIndex = train_names.length-1
// console.log("The last train is : " ,train_names[lastIndex]);

// let arr = [1, 3, 4, 5, 6, 7];
// console.log(arr);
// //Add 99 at the end of the array
// arr.push(99);
// console.log(arr);
// //to add multiple elements
// arr.push(100, 101, 102, 103);
// console.log(arr);


// To remove from the end of the array
// POP always removes the end (length-1)Element. Hence no need to specify the name of element

// arr.pop();
// console.log(arr);// removed 103
// arr.pop();// removed 102
// console.log(arr);

// // POP push excercise 
// let arr= [];
// arr.push(12);
// arr.push(10,10,10);
// arr.pop();
// arr.push(123);
// arr.pop();
// arr.pop();
// arr.push(12,45);
// arr.pop();
// console.log(arr);


// let arr = ["Aman", "Clark", "Bruce", "Tony", "Steve", "Mohan"];
// to print in seperate lines
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

// via loops it can be done by 
// lengthArray = arr.length - 1; // to find last index number till which we can run the loop
// for loop
// for (let index = 0; index <= lengthArray; index++)
//   { console.log(arr[index]); }

// index = 0;
// while(index<=lengthArray)
//   {console.log(arr[index]);
//   index++;}

//SPREAD OPERATOR (  "..."  )
// let arr1 = [1,2,3,4];
// //make a copy of the array
// let arr2 = [...arr1];
// console.log(arr2);

// let arr3 = [1,2,3];
// let data = [4,5,6];

// let details = ["Aman","Delhi",...data,...arr3,44,55,66];
// console.log(details);


// // how to replace data in element in array/ change data
// let arr = [1,2,3,4,5,6];
// //to put "ram" in place of 4
// console.log(arr);
//  arr[3]="ram";
// console.log(arr);


// Array exception : Print all the names except pusha and Gajhini
let movies = ["Pushpa", "Avengers", "Shakti", "RRR", "GAJHINI", "Kranti"]
// let indexLast = movies.length - 1;
// for (let index = 0; index <= indexLast; index++) {
// if (movies[index] === "Pushpa" || movies[index] === "GAJHINI")
//        { continue; }
//   console.log(movies[index]);
// }



// tried by tutor
let arr = [...movies];
for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] == "Pushpa" || arr[i] === "GAJHINI") { continue; }
  console.log(movies[i]);
}