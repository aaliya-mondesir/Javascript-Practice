//1
//Write a JavaScript function that reverse a number. Example x = 32243; Expected Output : 34223

function revNum(num){
    num = num + "";
    return num.split("").reverse().join("");
}
revNum(294340);

//2
//Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function palindrome(n){
    n = n.replace(/\s+/g, '');
    var rev = n.split("").reverse().join("");
    if (rev == n){
        console.log("This word is a palindrone");
    }

    else {
        console.log("This word is NOT a palindrone")
    }
}

palindrome("yo banana boy");

//3
// Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
//HELP

//4
// Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function abcOrder(str){
    return str.split('').sort().join('');
}

abcOrder("hospital");

//5
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function uppercase(str){
    const arr = str.split(" ");
    for (var i=0; i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    return str2;
}

uppercase("that little cute dog");
