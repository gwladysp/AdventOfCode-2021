// run this code in the console!
const values = document.querySelector("pre").innerText.split("\n");
countIncreasements(values)

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