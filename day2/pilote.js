// run this code in the console!

/***** First daily challenge *****/

const reducer = (position, action) => {
    const [move, value] = action.split(" ");
    if (move === "up") {
        position.depth -= parseInt(value);
    } else if (move === "down") {
        position.depth += parseInt(value);
    } else if (move === "forward") {
        position.horizontal += parseInt(value);
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
        position.aim -= parseInt(value);
    } else if (move === "down") {
        position.aim += parseInt(value);
    } else if (move === "forward") {
        position.horizontal += parseInt(value);
        position.depth += position.aim * parseInt(value);
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
