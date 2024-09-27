export class StringCalculator {
    add(str: any) {
        let reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

        if (str !== null) {
            return str.replace(/[^0-9\.]+/g, ' ').split(' ').map(Number).reduce(reducer);
        } else {
            return 0;
        }
    }

}