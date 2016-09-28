//Övning 2 - Every day coding problems
function calculator(op) {
    return function(x, y) {
    if (op ==='+') {return x + y}
    else if (op === '-') {return x - y}
    else if (op === '*') {return x * y}
    else if (op === '/') {return x / y}
    else {return "Not an operator"}
    }
}
var operator = calculator('*');
console.log(operator(13, 2));