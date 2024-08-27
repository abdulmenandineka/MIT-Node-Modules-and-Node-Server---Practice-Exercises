// console.log('my first module');

function myMultiplier(number){
    return number*2
}

let result = myMultiplier(4);
// console.log(result);

module.exports.myMultiplier=myMultiplier