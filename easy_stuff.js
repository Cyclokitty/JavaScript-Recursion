// easiest way

function reverseString(str) {
    return str.split('').reverse().join('');
}

// is the reversed string a palindrome?

function palindrome(str) {
    let revString = str.split('').reverse().join('');
    if (str === revString) {
        return 'It\'s a palindrome!';
    } else {
        return 'Nope.';
    }
}

// let's use reverseString(str) in the palindrome(str)

function palindrome2(str) {
    let revString = reverseString(str);
    if (str === revString) {
        return 'yes, this is a palindrome';
    } else {
        return 'No, not a palindrome';
    }
}

// let's not use the built-in reverse() function
// we'll use a for loop

function palindrome3(str) {
    let newstr = str.split('');

    let revString = [];
    for (let i = newstr.length - 1; i >= 0; i--) {
        revString.push(newstr[i]);
    }

    return str === revString.join('') ? true : false;  
}