// ye olde factorial algo

const factorial = num => {
    let factorialNum = 1;

    for (let i = num; i > 0; i--) {
        factorialNum *= i;
    }

    return factorialNum;
}

// recursion excursion!

