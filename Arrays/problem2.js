let char = "f";
let index_char;

lower_array = ["a", "b", "c", "d", "e", "f","g","h", "i" ,"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","z"]; //till z 

upper_array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' ]; //
// run the for search loop on the lower array, the index value would be same as both have 26 elements and are in same sequence. Once index is found, replace via another loop.
for (i = 0; i <= lower_array.length - 1; i++) {
  if (lower_array[i] == char) {
    index_char = i;
    console.log("Index of char is : ", index_char);
  }  //add break to stop loop faster
}
char = upper_array[index_char];
console.log(char);
