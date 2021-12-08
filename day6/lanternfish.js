// run this code in the console!

/***** First daily challenge *****/

document.querySelector("pre").innerText.split(",");
let lanternFishes = document.querySelector("pre").innerText.split(",").map(value => Number(value));

const days = 160;

for (let i = 1; i <= days; i++) {
    lanternFishes.forEach(function(value, index){
        if (value === 0) {
            lanternFishes.push(8)
            lanternFishes[index] = 6;
        } else {
            lanternFishes[index]--;
        }
    })
}
console.log(lanternFishes.length)
