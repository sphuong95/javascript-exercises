const repeatString = function(aString, repeat) {
    let newString = '';
    if (repeat >= 0) {
        for (let i = 0; i < repeat ; i++) {
            newString += aString;
        }
        return newString;
    }
    else { return 'ERROR' }
}

module.exports = repeatString
