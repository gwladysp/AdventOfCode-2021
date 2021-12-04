// run this code in the console!

/***** First daily challenge *****/

const diagnosticReducer = (columns, currentValue, line) => {
    currentValue.split('').forEach((char, index) => {
        if ((line === 0)) {
            columns[index] = {zero: 0, one: 0}
        }
        (Number(char)) ? columns[index].one++ : columns[index].zero++;
    })
    return columns;
}

let columns = [];
document.querySelector("pre").innerText.split("\n").reduce(diagnosticReducer, columns)

let gamma = '';
let epsilon = '';

columns.forEach(column => {
    if (column.one > column.zero) {
        gamma += '1';
        epsilon += '0';
    } else {
        gamma += '0';
        epsilon += '1';
    }
})

console.log('The power consumption is ' + parseInt(gamma, 2) * parseInt(epsilon, 2) + "!")


/***** Second daily challenge *****/

const countBitsPerColumn = (bits, currentValue) => {
    (currentValue[bits.index] === '1') ? bits.bit1++ : bits.bit0++;
    return bits;
}

const filterLines = (line, charIndex, criteria) => {
    return line[charIndex] === criteria
}

const getLines = (lines, index, mostCommonValue) => {

    if (lines.length <= 1) {
        return lines;
    }

    let bits = {
        bit1: 0,
        bit0: 0,
        index: index
    }
    lines.reduce(countBitsPerColumn, bits);

    let bitToKeep;
    if (bits.bit1 >= bits.bit0) {
        bitToKeep = mostCommonValue;
    } else {
        bitToKeep = (mostCommonValue === '1') ? '0' : '1';
    }

    lines = lines.filter(line => filterLines(line, index, bitToKeep))

    return getLines(lines, index + 1, mostCommonValue);
}

let values = document.querySelector("pre").innerText.split("\n")
let oxygenRating = getLines(values, 0, '1')
let co2Rating = getLines(values, 0, '0')
console.log('The power oxygen * CO2 consumption is ' + parseInt(oxygenRating, 2) * parseInt(co2Rating, 2) + '!')
