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

// let's use recursion!

// helper functions:

// find the first letter:
// we use .slice() to not mangle the original str
function firstLetter(str) {
    return str.slice(0, 1);
}

// find the last letter:
function lastLetter(str) {
    return str.slice(-1);
}

// find the middle of the word after knocking off the first and last letterss:
function middleWord(str) {
    return str.slice(1, -1);
}

function recursionPalindrome(str) {
    if (str.length < 2) return true;

    if (firstLetter(str) === lastLetter(str) ) {
        return recursionPalindrome(middleWord(str));
    }

    return false;
}