//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

//Username and password in the Database
let database_user = "tathagatraj4@gmail.com";
let database_password = "GandhiMahaan";

//username and password entered by the user
let userName = "tathagatraj4@gmail.com";
let userPassword = "GandhiMahaan";

if (database_user === userName) //Main if, compiler checks if database has same user name, if true , enters if condition's code block 
{ //check password after user name
  if (database_password === userPassword) //nested if-1, compiler checks again if statement to check if password is correct
  { console.log("Login Successful"); }
  else { console.log("Incorrect Password"); } // else-1 for password check, display if password incorrect
}
else // main else , after incorrect username
{ console.log("Incorrect Username"); }