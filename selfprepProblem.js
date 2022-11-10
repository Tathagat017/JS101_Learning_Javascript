// for countign number of charcters in the string.

let str = "To Be or Not to be";

var i;
var count = 0;

for(i=0;i<str.length-1;i++)
  { if(str[i]!==' ')
  {count++} 
  }
if(count==0)
{console.log("Total number of characters in the string are ")}
else
console.log("The number of words in the string are : ",count+1);