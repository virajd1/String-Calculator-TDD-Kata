"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectOperation = detectOperation;
exports.extractDelimiter = extractDelimiter;
exports.splitNumbers = splitNumbers;
exports.validateNoNegatives = validateNoNegatives;
const operation_enum_1 = require("../enums/operation.enum");
function detectOperation(delimiter) {
    switch (delimiter) {
        case '*':
            return operation_enum_1.Operation.Multiplication;
        case '+':
            return operation_enum_1.Operation.Addition;
        default:
            return operation_enum_1.Operation.Addition; // Default to addition if no specific operator is given
    }
}
function extractDelimiter(input) {
    if (input.startsWith("//")) {
        const delimiterEndIndex = input.indexOf("\n");
        const rawDelimiter = input.substring(2, delimiterEndIndex);
        // Escape special regex characters in the delimiter for RegExp construction
        const escapedDelimiter = rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const numbersSection = input.substring(delimiterEndIndex + 1);
        return { rawDelimiter, delimiter: new RegExp(escapedDelimiter), numbersSection };
    }
    return { rawDelimiter: ',', delimiter: /,|\n/, numbersSection: input };
}
function splitNumbers(numbers, delimiter) {
    const numList = [];
    let currentNumber = '';
    for (let i = 0; i < numbers.length; i++) {
        const char = numbers[i];
        if (char.match(delimiter)) {
            if (currentNumber.trim() !== '') {
                const num = parseInt(currentNumber.trim(), 10);
                if (!isNaN(num)) {
                    numList.push(num);
                }
            }
            currentNumber = '';
        }
        else {
            currentNumber += char;
        }
    }
    if (currentNumber.trim() !== '') {
        const num = parseInt(currentNumber.trim(), 10);
        if (!isNaN(num)) {
            numList.push(num);
        }
    }
    return numList;
}
function validateNoNegatives(numbers) {
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
}
