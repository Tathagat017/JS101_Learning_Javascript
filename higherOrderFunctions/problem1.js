/* Problem 1: Find the average of elements present at odd index of the following array. */
let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let new_array = arr.filter(function(element, index) {

	if (index % 2 !== 0) {
		return element;
	}

});

let sum = 0;

for (i of new_array) {
	sum += i;
}
console.log("The sum is :", sum)