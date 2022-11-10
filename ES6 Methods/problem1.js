/* 
Problem 1
Write a function isOdd which returns a boolean value based on the number is odd or not
Use this function to print the odd numbers from 0 to a given limit(included)
Do this using Arrow Function
*/



const isODD2 = (num) => {
	let flag = true;

	num % 2 == 0 ? flag = false : flag = true;

	num == 1 ? flag = false : '';
	return flag;
};


console.log(isODD2(11));
