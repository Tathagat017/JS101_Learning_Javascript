/* - Given an input of products in the below format (Name Quantity Price)
- Input

```
["Rice", "Dal", "Salt"]
[2, 3, 1]
[60, 50, 20]

```

- Create an object with the key `data` which is an data of objects with the format `{name: "Rice", quantity: 2, price: 60}`
- The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
- Sample output for the above case `290`  */

let name = ["Rice", "Dal", "Salt"];
let quantity = [2, 3, 1];
let price = [60, 50, 20];

let data = [];


method = {

	data: [],

	add: function add(name, quantiy, price) {
		let obj = {};

		for (i = 0; i <= name.length - 1; i++) {
			obj = {};  // very important to reset obj
			obj.name = name[i];
			obj.quantity = quantity[i];
			obj.price = price[i];

			this.data.push(obj);
		}
	},

	total: function total() {
		let total;
		let sum = 0;
		for (i = 0; i <= this.data.length - 1; i++) {
			total = (this.data[i].price) * (this.data[i].quantity);
			sum = sum + total;
		}
		return sum;
	},

};

method.add(name, quantity, price)

let amountPaid = method.total();
console.log("The total money paid is :", amountPaid);

