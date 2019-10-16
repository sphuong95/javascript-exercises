function add (num1, num2) {
	let sum = num1 + num2;
	return sum;
}

function subtract (num1, num2) {
	let sum = num1 - num2;
	return sum;
}

function sum (array1) {
	let sum = 0;
	if (array1.length == 0) {
		sum = 0;
	}
	else {
		for (let i = 0; i < array1.length; i++) {
			sum += parseInt(array1[i]);
		}
	}
	return sum;
}

function multiply (array1) {
	let sum = array1[0];
	if (array1.length == 0) {
		sum = 0;
	}
	else {
		for (let i = 1; i < array1.length; i++) {
			sum *= array1[i];
		}
	}
	return parseInt(sum);
}

function power(num1, num2) {
	let sum = num1 ** num2;
	return sum;
}

function factorial(num1) {
	let sum = 1;
	while (num1 !== 0) {
		sum *= num1;
		num1--;
	}
	return sum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}