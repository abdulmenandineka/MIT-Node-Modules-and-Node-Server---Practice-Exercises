let myFirstMultiplier = require("./myFirst");
let mySecondMultiplier = require("./mySecond");
let fs = require("fs");

myFirstMultiplierResult = myFirstMultiplier.myMultiplier(5);
mySecondMultiplierResult = mySecondMultiplier.myMultiplier(5);
let passing14toSee28 = myFirstMultiplier.myMultiplier(14);
let passing14toSee42 = mySecondMultiplier.myMultiplier(14);

// console.log(myFirstMultiplierResult);
// console.log(mySecondMultiplierResult);
// console.log(passing14toSee28);
// console.log(fs);

fs.writeFile(
  "./result.txt",
  `The value of 14 when passed through the myMultiplier function is (${passing14toSee28})\n`,
  (err) => {
    if (err) throw err;
    console.log(passing14toSee28);
  }
);

fs.appendFile(
  "./result.txt",
  `The value of 14 when passed through the myMultiplier function is (${passing14toSee42})\n`,
  (err)=>{
    if(err) throw err;
    console.log(passing14toSee42);
  }
);
