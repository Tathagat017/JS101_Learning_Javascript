//Problem 1: Print the Calendar date in the below format
var month;
var day;
var num =31;

for(month=1;month<=12;month++)
  {if(month==2)
  {num=28}
 else if(month==4 || month==6 ||month==9 || month==11)
   { num=30 }
 else
   {num=31}
  for (day=1;day<=num;day++)
    {
      console.log(month,"-",day)}  
  
  }
