/* Problem 3
Write a function to convert a character to lower case
Use this function to convert a given word to lower case
Use that function to convert an array of strings to array of lower case strings
Sample Input ["MA", "SA", "I", "SCH", "OOL"]
Sample Output ["ma", "sa", "i", "sch", "ool"]
Do this Problem using Arrow function. */

let input = ["MA", "SA", "I", "SCH", "OOL"];

let toLowerCase = (str) => {

	str.length == 0 ? console.log("No characters in string ") : "";

	let x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let y = "abcdefghijklmnopqrstuvwxyz"
	let char1 = x.split("");
	let char2 = y.split("");
	let lowerCase = '';

	for (let i = 0; i <= str.length - 1; i++) {
		for (let j = 0; j <= char1.length - 1; j++) {

			if (str[i] === char1[j]) {
				lowerCase += char2[j];
			}

			else if (str[i] == char2[j]) {
				lowerCase += char2[j];
			}

		}
	}
	return lowerCase;
};


let output = input.map(function(element, index) {

	element = toLowerCase(element);
	return element;
});

console.log(output)
