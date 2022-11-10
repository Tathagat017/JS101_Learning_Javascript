/* PROBLEM 6
Problem 6: If a person is allowed to drive in India print "Apply for a license" or "NA".
Do this problem using ternary operators */

let minimumDrivingAge = 18;

let driversAge = 21;

driversAge >= minimumDrivingAge ? console.log("Apply for a license") : driversAge < minimumDrivingAge ? console.log("NA") : '';
