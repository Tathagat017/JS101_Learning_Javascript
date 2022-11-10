/* Write code to calculate the average of an array
If there are no items in the array it should return 0
NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
Do this Problem using Arrow Function */

let array = [1, 2, 2, 3, 3];

let averageArray = (array) => {
	let new_array;
	array.length == 0 ? new_array = 0 : '';
	let sum = 0;
	new_array = array.forEach((element, index) => {
		sum += element;
	});
	return (sum / array.length);
};

console.log(averageArray(array));