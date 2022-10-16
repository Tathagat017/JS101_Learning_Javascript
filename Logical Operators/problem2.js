//Problem 2 : Given any character, if it is a vowel print "Vowel"

let char = "i";
charLower = char.toLocaleLowerCase();
if (charLower === "a" || charLower === "e" || charLower === "i" || charLower === "o" || charLower === "u") { console.log("Vowel"); }
else { console.log("Consonant"); }