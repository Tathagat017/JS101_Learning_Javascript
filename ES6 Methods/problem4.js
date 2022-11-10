let input = "Test";

let toReverseCase = (str) => {

	str.length == 0 ? console.log("No characters in string ") : "";

	let x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let y = "abcdefghijklmnopqrstuvwxyz"
	let char1 = x.split("");
	let char2 = y.split("");
	let checkCase = '';

	for (let i = 0; i <= str.length - 1; i++) {
		for (let j = 0; j <= char1.length - 1; j++) {

			if (str[i] === char2[j]) {
				checkCase += char1[j];
			}

			else if (str[i] == char1[j]) {
				checkCase += char2[j];
			}

		}
	}
	return checkCase;
};



let Convert = (input) => {
	let x = input.split("");
	let output = x.map(function(element, index) {

		element = toReverseCase(element);
		return element;
	});

	output = output.join("");

	console.log(output);

}

Convert(input);

