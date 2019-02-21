//is pair
var num1 = 35;

function isPair(num) {
    if (num%2 !== 0) {
        alert('is not pair');
        return 0;
    }
    else {
        alert('is pair');
        return 1;
    }
}

var num2 = prompt('colocar o número')
isPair(num2)
