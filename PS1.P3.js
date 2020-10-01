/*
	Problem Set 1, Problem 3. This program takes an unknown decorator function and runs it
	on the given string.
*/


const p3 = (str, decoratorFunc) => decoratorFunc(str);

const breakUpByC = str =>  str.split(/(?=c)/g);

const replaceAll = original => original.replace(/(a)/g, 'A');

const getJsonStringInfo = str => {
	const modified =  replaceAll(str);
	const count = (str.match(/(a)/g) || []).length;

	return {
		"originalStr": str,
		"modifiedStr": modified,
		"numberReplaced": count,
		"length": str.length
	}
}


module.exports = {p3, breakUpByC, getJsonStringInfo};