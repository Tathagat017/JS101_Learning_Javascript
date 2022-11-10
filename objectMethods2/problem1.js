/* 
Create an object with the following functionality

Ability to add 3 students details and their marks in 3 subjects
Method to find the student with the least total.
Method to find the student with the highest total.

*/


let details = {
	array: [],
	add: function(name, phy, English, maths) {
		let obj = {};
		let arr = [];
		obj.name = name;
		obj.phy = phy;
		obj.English = English;
		obj.maths = maths;
		this.array.push(obj); // push into objects array
	},

	total: function() {
		let total = 0; let bag = [];
		for (let i = 0; i <= this.array.length - 1; i++) {

			total = (this.array[i].phy + this.array[i].maths
				+ details.array[i].English)
			bag += " " + total;
		} let n = bag.trim();
		let outcome = n.split(" ");
		return outcome;
	},

	lowestTotal: function() {
		let outcome = details.total(); let Student;
		let minimum = Infinity;
		for (i = 0; i <= outcome.length - 1; i++) {
			if (minimum > outcome[i]) {
				minimum = outcome[i];
				Student = this.array[i].name
			}
		} console.log("The lowest marks is scored by : ", Student, " whose  marks is  :", minimum);

	},

	highestTotal: function() {
		let outcome = details.total(); let Student;
		let maximum = -Infinity;
		for (i = 0; i <= outcome.length - 1; i++) {
			if (maximum < outcome[i]) {
				maximum = outcome[i];
				Student = this.array[i].name
			}
		} console.log("The highest marks is stored by :", Student, " whose marks is : ", maximum);

	}

};



details.add("Chunnu", 83, 50, 85); //218 sum of marks
details.add("Rahul", 43, 35, 40); //118  sum of marks
details.add("Amit", 45, 67, 88);  //200  sum of marks
details.lowestTotal();
details.highestTotal();






//STEPS TO ACHEIVE ( Step by step approach)

/* 1. Need empty array and empty Object first 

2.Now,add object in the array

array.push(obj);

3.We have the details of one student inside the error
 

4.Convert above into function : 

function add()
{
let obj={};
let arr=[];
obj.name="Munnu";
obj.phy=23;
obj.English=99;
obj.math=88;
array.push(obj);
}

5.but our function is not responsive but dumb,lets make it intelligent 

function add(name,phy,english,maths)
{
let obj={};
let arr=[];
obj.name=name;
obj.phy=phy;
obj.English=english;
obj.math=maths;
array.push(obj);
}
6.its intelligent now, // call function : add();
now, create object function to do total and return the total valus in array.
7.obj.total's return array (outcome of sums), make lowest and highest function to display results. ( minimum and maximum in an array , set min to infinity and max to min -inifity to compare with each element of outcome array( result of total function) )
call details.lowest and details.highest to display results after comparing 

*/