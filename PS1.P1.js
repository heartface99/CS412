/*
	Problem Set 1, Problem 1. Reverses letters of a string
*/

const isLetterRegex = /[a-z]+/gi;

const reverseLetters = str => str.replace(isLetterRegex, function(cleanStr) {
	return cleanStr.split('').reverse().join('');
	});

module.exports = {reverseLetters};
