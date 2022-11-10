/*Problem 2: Create a new array from the given array such that each element of the new array is raised to a power of 5. 

Input = [2, 3, 4, 6, 7]
Output = [32, 243, 1024, 7776, 16807]

*/

let array = [2, 3, 4, 6, 7];

let new_array = array.map(function(element, index) {

	element = element ** 5;
	return element;

});

console.log(new_array);