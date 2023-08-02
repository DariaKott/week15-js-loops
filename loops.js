let cities = ['Белград', 'Екатеринбург', "Вена", "Милан"];
let temperatures = [];
const degreeSymbol = '\u00B0' + "C";

const container = document.getElementById("container");
const container2 = document.getElementById('container2');

for (let city of cities) {
    const inputTemp = prompt(`Введите температуру для города ${city}:`);
    temperatures.push(Number(inputTemp));

    const newLiCity = document.createElement('li');
    newLiCity.textContent = `Температура воздуха в городе ${city}: ${inputTemp}` + degreeSymbol;
    container.appendChild(newLiCity);
}

console.log(temperatures);

function findMax(temperatures) {
    const maxTemp = Math.max(...temperatures);

    const max = document.createElement('div');
    max.textContent = `Максимальная температура воздуха - ${maxTemp}` + degreeSymbol;
    container2.appendChild(max);
}

findMax(temperatures);

function findMin(temperatures) {
    const minTemp = Math.min(...temperatures);

    const min = document.createElement('div');
    min.textContent = `Минимальная температура воздуха - ${minTemp}` + degreeSymbol;
    container2.appendChild(min);
}

findMin(temperatures);



