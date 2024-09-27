"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const StringCalculator_1 = require("../src/StringCalculator");
describe('StringCalculator', () => {
    let calculator;
    beforeEach(() => {
        calculator = new StringCalculator_1.StringCalculator();
    });
    it('should return 0 for an empty string', () => {
        (0, chai_1.expect)(calculator.calculate('')).to.equal(0);
    });
    it('should return the number for a single number input', () => {
        (0, chai_1.expect)(calculator.calculate('1')).to.equal(1);
    });
    it('should return the sum of two numbers', () => {
        (0, chai_1.expect)(calculator.calculate('1,2')).to.equal(3);
    });
    it('should return the sum of multiple numbers', () => {
        (0, chai_1.expect)(calculator.calculate('1,2,3,4,5')).to.equal(15);
    });
    it('should handle numbers with leading and trailing whitespace', () => {
        (0, chai_1.expect)(calculator.calculate(' 1 , 2 , 3 ')).to.equal(6);
    });
    it('should ignore empty values caused by extra commas', () => {
        (0, chai_1.expect)(calculator.calculate('1,,2,3')).to.equal(6);
    });
    it('should handle new lines as delimiters', () => {
        (0, chai_1.expect)(calculator.calculate('1\n2,3')).to.equal(6);
    });
    it('should support custom delimiters', () => {
        (0, chai_1.expect)(calculator.calculate('//;\n1;2;3')).to.equal(6);
    });
    it('should throw an error when a negative number is provided', () => {
        (0, chai_1.expect)(() => calculator.calculate('1,-2,3')).to.throw('Negative numbers not allowed: -2');
    });
    it('should throw an error listing all negative numbers when multiple negatives are provided', () => {
        (0, chai_1.expect)(() => calculator.calculate('1,-2,-3,4')).to.throw('Negative numbers not allowed: -2, -3');
    });
    it('should support Multiplication with "*" delimiters', () => {
        (0, chai_1.expect)(calculator.calculate('//\*\n1*2*4')).to.equal(8);
    });
});
