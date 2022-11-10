let sales = [
	{ item: 'PS4 Pro', stock: 3, original: 399.99 },
	{ item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
	{ item: 'Nintendo Switch', stock: 4, original: 299.99 },
	{ item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
	{ item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];


let sale = [];

let electronics = {
	sale: [],

	add: function add(sales) {


		let obj = {}

		for (let i = 0; i <= sales.length - 1; i++) {
			obj = {};
			obj.item = sales[i].item;
			obj.stock = sales[i].stock;
			obj.original = sales[i].original;

			obj.discount = sales[i].discount;
			obj.sale = sales[i].original - (sales[i].original * sales[i].discount);
			this.sale.push(obj);

			if (this.sale[i].discount == undefined) { this.sale[i].discount = 0, this.sale[i].sale = this.sale[i].original }
			obj.total = this.sale[i].sale * this.sale[i].stock;

		}
	},

	calculateSalesTotal: function calculateSalesTotal() {
		let calTotal = 0;
		for (let i = 0; i <= sales.length - 1; i++) {
			calTotal += this.sale[i].total;
		} return calTotal;
	}

};


electronics.add(sales);
console.log(electronics)
let totalSales = electronics.calculateSalesTotal();
console.log("The sum of all electronic sales is : ", Math.round(totalSales));


