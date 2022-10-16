// let name = "Ram";// same as ' '
// let name1 = 'Ram'; // same as "  "
// console.log(name);
// console.log(name1);// both ' ' and  "  " are same

// let sentence = "My name is Tony Stark";
// console.log(sentence.length); // to know the size of the string 

// let sen = "Bruce Wayne";
// console.log(sen[0]);
// console.log(sen[1]);
// //for printing "w"
// console.log(sen[6]);
// indexLast = sen.lenth-1;


//Password should be minimum 8
// let pass = "123abc32";
// if(pass.length>=8)
// {console.log("Account Created")}
// else
// {console.log('Invalid password')}


// to replace 

let str = 'Donald'
//to change Donal to Ronald
console.log(str);
let new_str = ''// new empty string // no space in empty string

// to copy old string in new string, run loop on old string

for (let i = 0; i <= str.length - 1; i++) {
  if (str[i] === 'D') { new_str = new_str + 'R' }
  else { new_str += str[i]; }
}
console.log(new_str);


let arr = ["Aman", "Rahul", "Chunnu", "Sanchi", "Shivansh", "Amar", "Aana"];
// Print the character present at index number 2 of each string

console.log(arr[0][2]);
console.log(arr[1][2]);

// to count names starting with a
count = 0;
for (i = 0; i <= arr.length - 1; i++) {
  if (arr[i][0] == "a" || arr[i][0] == "A") {
    count++;
    console.log(arr[i]);
  }
}
console.log(count);