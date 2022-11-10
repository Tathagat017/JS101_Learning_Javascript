/* Create a rectangle object with length and width properties
Create two methods area and perimeter, that will return the area and perimeter of the rectangle */

let rectangle = {

	length: 20,
	breadth: 30,

	area: function area() {
		var area;
		area = rectangle.length * rectangle.breadth;
		return area;
	},
	perimeter: function perimeter() {
		let perimeter;
		perimeter = 2 * (this.length + this.breadth);
		return perimeter;
	}

};

let x = rectangle.area();
let y = rectangle.perimeter();
console.log(x, y);