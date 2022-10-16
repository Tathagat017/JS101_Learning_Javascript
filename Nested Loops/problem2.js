//Print Prime Numbers from 1 to given limit

var num = 103;
var i;
for (i = 2; i < num; i++) {
  var count = 0;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      count++;
      break;
    }

  }
  if (count === 0) { console.log(i); }
}