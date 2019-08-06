// ye olde factorial algo

const factorial = num => {
    let factorialNum = 1;

    for (let i = num; i > 0; i--) {
        factorialNum *= i;
    }

    return factorialNum;
}

// recursion excursion!
const factorialRecursion = num => {
    if (num < 0 || num === 0) return 1;
    return num * factorialRecursion(num - 1);
}
