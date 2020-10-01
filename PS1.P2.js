/*
	Problem Set 1, Problem 2. This program will take the given expression, parse it, then
	returns a function that calculates it. 
*/


const getFunc = (expression) => {
	const expression_lst = expression.split("");
	const digit1 = parseInt(expression_lst[0]);
	const operator = expression_lst[1];
	const digit2 = parseInt(expression_lst[2]);

	return Function(`return ${calc(digit1, digit2, operator)}`);
}

const calc = (digit1, digit2, operator) => {
	let answer = 0;

	switch(operator) {
		case '+':
			answer = digit1 + digit2;
			break;
		case '*':
			answer = digit1 * digit2;
			break;
		case '-':
			answer = digit1 - digit2;
			break;
		case '^':
			answer = digit1 **digit2;
			break;
		case '/':
			answer = digit1 / digit2;
			break;
		case '%':
			answer = digit1 % digit2;
			break;
	}

	return answer;
}

module.exports = {getFunc};