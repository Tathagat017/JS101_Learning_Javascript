// Problem 2 : Given an array of string count the overall total number of characters
let arr = ["Ram","Shyam","Chunnu","Munnu","Shikha"];
var i, count = 0;
for(i=0;i<=arr.length-1;i++)
  {
    for(j=0;j<=arr.length-1;j++)
    if(arr[i][j]!==' ')
    {count++}
  }
console.log(" The total number of characters are : ",count);