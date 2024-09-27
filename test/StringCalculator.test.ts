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
    it('should use the delimiter when first line contains a delimiter', () => {
        expect(calculator.add('#|\n11|4\n1')).to.equal(16);
    });

    it('should support different delimiters when first line declares the delimiter started with hash:', () => {
        expect(calculator.add('#|\n1 | 2 | 17')).to.equal(20);
    });

    it('should support different delimiters with any length', () => {
        expect(calculator.add('#--\n1--7--13\n4--6')).to.equal(31);
    });
    describe('Exception', () => {
        it('should throw an exception when input is negative', () => {
            expect(calculator.add(-1)).to.equal('Its a negative');
        });

        it('should throw an exception when input is negative non-integers', () => {
            expect(calculator.add(-1.34243)).to.equal('Its a negative');
        });
    });

});