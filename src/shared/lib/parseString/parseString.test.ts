import assert from 'node:assert';
import { describe, it } from 'node:test';
import parseString from './parseString.js';


describe('', () => {
	it('should parse emoji', () => {
		const str = 'abcde a <:5Head:672449209286393908> abc';
		const actual = parseString(str);
		const expected = ['abcde a ', '<:5Head:672449209286393908>', ' abc'];
		assert.deepEqual(actual, expected);
	});
	it('should parse single emoji', () => {
		const str = '<:5Head:672449209286393908>';
		const actual = parseString(str);
		const expected = ['<:5Head:672449209286393908>'];
		assert.deepEqual(actual, expected);
	});
	it('should parse few emoji', () => {
		const str = 'a<:5Head:672449209286393908>a<:5Head:672449209286393908>  a';
		const actual = parseString(str);
		const expected = ['a', '<:5Head:672449209286393908>', 'a','<:5Head:672449209286393908>', '  a'];
		assert.deepEqual(actual, expected);
	});
});