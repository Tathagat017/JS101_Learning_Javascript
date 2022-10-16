//10 seeds X 10 farms first
//first print 10 seeds for 1 farm //inner loop
// not print 10 seeds in 10 farm( place inner loop in loop of 10)
//in farm 1 and 10 all seeds are placed ( top and bottom).Since seeding is happening inside inner loop ( farm==1 || farm==10 , bring 10 seeds)
// Next we print when j =1 ,and j = 10 only( i.e only when seed = 1 and seed =2 , we put * in the back else we print"space")
for (i = 1; i <= 10; i++) { // OUTER LOOP (rows)
  var bag = ""; var seed;
  var sum = 0;
  for (j = 1; j <= 10; j++) { //inner loop (coloumns)
    if (i == 1 || i == 10) { bag += '*' + ''; }
    else if ((j == 1 && i !== 1 && i !== 10)) { bag += "*" + ''; }
    else if (j == 2 && (i !== 1 && i !== 10)) { bag += " " + ''; }
    else if (j == 3 && (i !== 1 && i !== 10)) { bag += " " + ''; }
    else if (j == 4 && (i !== 1 && i !== 10)) { bag += " " + ''; }
    else if (j == 5 && (i !== 1 && i !== 10)) { bag += " " + ''; }
    else if (j == 6 && (i !== 0 && i !== 10)) { bag += " " + ''; }
    else if (j == 7 && (i !== 0 && i !== 10)) { bag += " " + ''; }
    else if (j == 8 && (i !== 0 && i !== 10)) { bag += " " + ''; }
    else if (j == 9 && (i !== 0 && i !== 10)) { bag += " " + ''; }
    else if (j == 10 && (i !== 0 && i !== 10)) { bag += "*" + ''; }
  }
  console.log(bag);
}