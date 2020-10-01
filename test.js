const { reverseLetters } = require('./PS1.P1.js');
const { getFunc } = require('./PS1.P2.js');
const { p3, breakUpByC, getJsonStringInfo } = require('./PS1.P3.js');

const {describe, it} = require('mocha');
const {expect} = require('chai');


describe('Tests for P1', () => {
	it('happy path', () => {
	 	let reverse = reverseLetters('supercalifragilisticexpialidocious');
	    expect(reverse).equal('suoicodilaipxecitsiligarfilacrepus');
	});

	it('test with capital letters', () => {
	 	let reverse = reverseLetters('teSt CS412');
	    expect(reverse).equal('tSet SC412');
	});

	it('test with numbers, letters, and spaces', () => {
	 	let reverse = reverseLetters('test123 2mocha');
	    expect(reverse).equal('tset123 2ahcom');
	});

	it('test with punctuation', () => {
	 	let reverse = reverseLetters('choi, eunice');
	    expect(reverse).equal('iohc, ecinue');
	});
});


describe('Tests for P2', () => {
	it('test add', () => {
		const actual = getFunc('4+2')();
	    expect(actual).equal(6);
	});

	it('test mult', () => {
	    const actual = getFunc('5*7')();
	    expect(actual).equal(35);
	});

	it('test exp', () => {
	    const actual = getFunc('2^8')();
	    expect(actual).equal(256);
	});

	it('test div', () => {
	    const actual = getFunc('9/2')();
	    expect(actual).equal(4.5);
	});	

	it('test minus', () => {
	    const actual = getFunc('6-1')();
	    expect(actual).equal(5);
	});	
});


describe('Tests for P3', () => {
	it('should break up string by c correctly', () => {
	 	const actual = p3('supercalifragilisticexpialidocious', breakUpByC);
	 	expect(actual).to.eql([ 'super', 'califragilisti', 'cexpialido', 'cious' ]);
	});

	it('should break up string by Cs', () => {
	 	const actual = p3('ccccc', breakUpByC);
	 	expect(actual).to.eql([ 'c', 'c', 'c', 'c', 'c' ]);
	});

	it('case with no Cs', () => {
	 	const actual = p3('dolphin', breakUpByC);
	 	expect(actual).to.eql([ 'dolphin' ]);
	});

	it('should return correct json data', () => {
	 	const actual = p3('supercalifragilisticexpialidocious', getJsonStringInfo);
	 	expect(actual).to.eql({
		  'originalStr': 'supercalifragilisticexpialidocious',
		  'modifiedStr': 'supercAlifrAgilisticexpiAlidocious',
		  'numberReplaced': 3,
		  'length': 34
		});
	});

	it('test with capital A', () => {
	 	const actual = p3('Alice In the Wonderland', getJsonStringInfo);
	 	expect(actual).to.eql({
		  'originalStr': 'Alice In the Wonderland',
		  'modifiedStr': 'Alice In the WonderlAnd',
		  'numberReplaced': 1,
		  'length': 23
		});
	});
});
