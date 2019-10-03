const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    if (num1 > num2){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    let newNum = 0;
    for (let i = num1; i < num2 + 1; i++) {
        newNum += parseInt(i);
    }
    return newNum;
}

module.exports = sumAll
