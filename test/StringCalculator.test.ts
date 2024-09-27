import { StringCalculator } from '../src/StringCalculator';
import { expect } from 'chai';
import 'mocha';


describe('String Calculator', () => {
    let calculator: any;
    beforeEach(() => {
        calculator = new StringCalculator;
    })

    it('should return zero when input is null', () => {
        expect(calculator.add(null)).to.equal(0);
    });

    it('should return zero when input is empty', () => {
        expect(calculator.add('')).to.equal(0);
    });

    it('should return the number when input is a number', () => {
        expect(calculator.add('1')).to.equal(1);
    });

    it('should return sum when input is two numbers', () => {
        expect(calculator.add('1,2')).to.equal(3);
    });

});