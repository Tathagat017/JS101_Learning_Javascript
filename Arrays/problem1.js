//print in sinle line 
let bag = '';
let arr = ["Aman", "Pulkit", "Shyam", "Ram"];
indexLast = arr.length - 1;
for (let i = 0; i <= indexLast; i++) {
  //console.log(i+1,arr[i]); incase of nexline output
  bag += i + 1 + " " + arr[i] + ' ';
} // make i+1 for making 1. Aman and bag for single line displacy
console.log(bag);