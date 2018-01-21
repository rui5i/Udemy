// function factorial(x) {
//     if (x === 0) {
//         return 1;
//     }

//     return x * factorial(x - 1);
// }

// console.log(factorial(4));

function kebabToSnake(string) {
    var newString = '';

    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) !== '-') {
            newString += string.charAt(i);
        } else {
            newString += '_';
        }
    }

    return newString;
}

console.log(kebabToSnake("sfasfd-sdfsfd-sfds"));
