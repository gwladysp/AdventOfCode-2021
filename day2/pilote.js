// run this code in the console!

/***** First daily challenge *****/

const reducer = (position, action) => {
    const [move, value] = action.split(" ");
    if (move === "up") {
        position.depth -= Number(value);
    } else if (move === "down") {
        position.depth += Number(value);
    } else if (move === "forward") {
        position.horizontal += Number(value);
    }
    return position;
};

let position = {
    horizontal: 0,
    depth: 0
};

document.querySelector("pre").innerText.split("\n")
    .reduce(reducer, position);

console.log("Result without aim : " + position.depth * position.horizontal)


/***** Second daily challenge *****/

const reducerWithAim = (position, action) => {
    const [move, value] = action.split(" ");
    if (move === "up") {
        position.aim -= Number(value);
    } else if (move === "down") {
        position.aim += Number(value);
    } else if (move === "forward") {
        position.horizontal += Number(value);
        position.depth += position.aim * Number(value);
    }
    return position;
};


let positionWithAim = {
    horizontal: 0,
    depth: 0,
    aim: 0
};

document.querySelector("pre").innerText.split("\n")
    .reduce(reducerWithAim, positionWithAim);

console.log("Result with aim : " + positionWithAim.depth * positionWithAim.horizontal)
