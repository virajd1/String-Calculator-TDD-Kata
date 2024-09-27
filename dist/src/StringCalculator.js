"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCalculator = void 0;
const operation_enum_1 = require("./enums/operation.enum");
const stringCalculator_helper_1 = require("./helpers/stringCalculator.helper");
class StringCalculator {
    calculate(input) {
        if (!input) {
            return 0;
        }
        const { rawDelimiter, delimiter, numbersSection } = (0, stringCalculator_helper_1.extractDelimiter)(input);
        const operation = (0, stringCalculator_helper_1.detectOperation)(rawDelimiter); // Detect operation using the raw delimiter
        const numList = (0, stringCalculator_helper_1.splitNumbers)(numbersSection, delimiter);
        (0, stringCalculator_helper_1.validateNoNegatives)(numList);
        return this.applyOperation(numList, operation);
    }
    applyOperation(numbers, operation) {
        switch (operation) {
            case operation_enum_1.Operation.Multiplication:
                return numbers.reduce((product, num) => product * num, 1);
            case operation_enum_1.Operation.Addition:
            default:
                return numbers.reduce((sum, num) => sum + num, 0);
        }
    }
}
exports.StringCalculator = StringCalculator;
