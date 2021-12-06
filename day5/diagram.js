let diagramSize = {'x' : 0, 'y' : 0};

const getCoordinates = (line) => {
    const [startSegment, endSegment] = line.split(' -> ');
    const start = {'x' : Number(startSegment.split(',')[0]), 'y' : Number(startSegment.split(',')[1])}
    const end = {'x' : Number(endSegment.split(',')[0]), 'y' : Number(endSegment.split(',')[1])}
    return {'start' : start, 'end' : end};
}

const selectLines = (currentLine) => {
    const coordinates = getCoordinates(currentLine);
    return coordinates.start.x === coordinates.end.x || coordinates.start.y === coordinates.end.y;
}

const initializeDiagram = (diagramSize) => {
    return Array.from(Array(diagramSize.x + 1), () => {
        return new Array(diagramSize.y + 1).fill('.')
    })
}

const getDiagramSize = (diagramSize, currentLine) => {
    const coordinates = getCoordinates(currentLine);
    if (diagramSize.x < coordinates.start.x) diagramSize.x = coordinates.start.x;
    if (diagramSize.x < coordinates.end.x) diagramSize.x = coordinates.end.x;
    if (diagramSize.y < coordinates.start.y) diagramSize.y = coordinates.start.y;
    if (diagramSize.y < coordinates.end.y) diagramSize.y = coordinates.end.y;
    return diagramSize;
}


const fillDiagram = (diagram, selectedLines) => {
    selectedLines.forEach(line => {
        const coordinates = getCoordinates(line);
        if (coordinates.start.x !== coordinates.end.x) {
            if (coordinates.start.x < coordinates.end.x) {
                fillLine(diagram, line, coordinates.start.y , coordinates.start.x, coordinates.end.x);
            } else {
                fillLine(diagram, line, coordinates.start.y , coordinates.end.x, coordinates.start.x);
            }
        } else {
            if (coordinates.start.y < coordinates.end.y) {
            fillCol(diagram, line, coordinates.start.x , coordinates.start.y, coordinates.end.y);
            } else {
            fillCol(diagram, line, coordinates.start.x , coordinates.end.y, coordinates.start.y);
            }
        }
    })
}

function fillLine(diagram, line, lineIndex, start, end) {
    for (let i = start - 1; i < end; i++) {
        if (diagram[lineIndex][i + 1] === '.') {
            diagram[lineIndex][i + 1] = 1;
        } else {
            diagram[lineIndex][i + 1] = 2;
        }
    }
}

function fillCol (diagram, col, colIndex, start, end) {
    for (let i = start - 1; i < end; i++) {
        if (diagram[i + 1][colIndex] === '.') {
            diagram[i + 1][colIndex] = 1;
        } else {
            diagram[i + 1][colIndex] = 2;
        }
    }
}

const countOverlaps = (diagram) => {
    let overlapsCounter = 0;
    const flattenedDiagram = diagram.flat();
    flattenedDiagram.forEach(value => {
        if (value === 2) overlapsCounter++;
    })
    return overlapsCounter;
}

let selectedLines = document.querySelector("pre").innerText.split("\n").filter(selectLines);
selectedLines.reduce(getDiagramSize, diagramSize);

let diagram = initializeDiagram(diagramSize);
fillDiagram(diagram, selectedLines)
console.log(diagram)
console.log("There are " + countOverlaps(diagram) + " overlaps!")
