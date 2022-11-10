let str = "To Be or Not to be";

var i;
var count = 0;

for(i=0;i<str.length-1;i++)
  { if(str[i]==' ')
  {count++} 
  }
if(count==0)
{console.log("No words in the string")}
else
console.log("The number of words in the string are : ",count+1);