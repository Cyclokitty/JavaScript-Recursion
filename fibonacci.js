// fibonacci sequence (start with numbers in sequence 0, 1 then add them together)
// now, you have a larger sequence. Then add the last 2 numbers in the new sequence to create
// the new last number in the sequence.

const fibo = num => {
    let fibonacci = [0, 1];
    for (let i = fibonacci.length - 1; fibonacci.length < num; i++) {
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }

    return fibonacci;
}

const recursionFibo = num => {
    if (num === 0) return [0];
    if (num === 1) return [0, 1];

    if (num > 1) {
        let fiboSequence = recursionFibo(num - 1);
        fiboSequence.push(
            fiboSequence[fiboSequence.length - 1] + fiboSequence[fiboSequence.length - 2]
        );
        return fiboSequence; 
    }
}