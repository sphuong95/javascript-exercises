const reverseString = function(aString) {
    var charList = aString.split('');
    var reverse = '';
    for (let i = charList.length-1; i >= 0; i--) {
        reverse += charList[i];
    }
    return reverse;
}

module.exports = reverseString
