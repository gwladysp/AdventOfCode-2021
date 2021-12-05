// run this code in the console!

/***** First daily challenge *****/

const input = document.querySelector("pre").innerText.split("\n")

const boardsGetter = (boards, line) => {
    let boardIndex = boards.length - 1;
    if (line === '') {
        boards.push([])
        boardIndex++;
    }
    let i = 0;
    let boardLine = []
    line.split(' ').forEach((number) => {
        if (number !== "" && number !== " ") {
            boardLine.push(number)
            i++;
        }
    })
    boards[boardIndex].push(boardLine);

    return boards;
}

const drawnNumbers = input[0].split(',');
const boardsList = input.slice(1);
const boards = boardsList.reduce(boardsGetter, [])

const checksWinner = (numberIndex, line, board) => {
    return checksColumns(numberIndex, board) || checksRows(numberIndex, line);
}

const checksColumns = (numberIndex, board) => {
    let totalMarkedNumbers = 0;
    board.forEach(line => {
        if (line[numberIndex] === "*") {
            totalMarkedNumbers++;
        }
    })
    return totalMarkedNumbers === board[1].length;
}

const checksRows = (numberIndex, line) => {
    let totalMarkedNumbers = 0;
    line.forEach(number => {
        if (number === "*") totalMarkedNumbers++;
    })
    return totalMarkedNumbers === line.length;
}

const unMarkedNumbersSum = (board) => {
    let sum = 0;
    board.forEach(line => {
        line.forEach((number) => {
            if (number !== "*") {
                sum += Number(number);
            }
        })
    })
    return sum;
}

let winner = {
    'sum' : 0,
    'drawnNumber' : 0
}

drawnNumbers.forEach(drawnNumber => {
   boards.map(board => {
       board.forEach(line => {
           line.forEach((number, index) => {
               if (number === drawnNumber) {
                   line[index] = '*'
                   if (checksWinner(index, line, board)) {
                       let sum = unMarkedNumbersSum(board);
                       console.log('WINNER :' + sum + "*" + drawnNumber + " = " + sum * drawnNumber)
                       winner.sum = sum;
                       winner.drawnNumber = drawnNumber;
                       return {'sum' : sum, 'drawnNumber' : drawnNumber}
                   }
               }
           })
       })
   })

})

