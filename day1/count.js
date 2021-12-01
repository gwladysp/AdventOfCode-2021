// run this code in the console!
const values = document.querySelector("pre").innerText.split("\n");
countIncreasements(values)
countIncreasementsWithSum(values)

/**
 * Counts the number of times a depth measurement increases from the previous measurement
 */
function countIncreasements(input) {
    let increasementsCounter = 0;
    input.map((value, index) => {
        if (parseInt(value) < parseInt(input[index + 1])) {
            increasementsCounter++;
        }
    })
    console.log(increasementsCounter + " increasements!");
}

/**
 * Counts the number of times a depth three-measurements sum increases from the previous three-measurements sum
 */
function countIncreasementsWithSum(input) {
    let increasementsCounter = 0;
    let previousSum = 0;
    let sum = 0;
    input.map((value, index) => {
        sum = parseInt(value) + parseInt(input[index + 1]) + parseInt(input[index + 2])
        if (sum > previousSum && index > 0) {
            increasementsCounter++;
        }
        previousSum = sum;
    })
    console.log(increasementsCounter + " increasements with three-measurements sums!");
}