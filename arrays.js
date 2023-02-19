var colors1 = new Array('red', 'green', 'blue');

console.log(colors1); // [ 'red', 'green', 'blue' ]
console.log(colors1[0]); // red
console.log(colors1[1]); // green


var colors2 = new Array('yellow', 'green', 'blue');
console.log(colors2); // [ 'yellow', 'green', 'blue' ]
console.log(colors2[2]); // blue

console.log(colors2.length); // 3

// part 2

var vehicles = [
    ["Ford"] , ["Fiesta", "Taurus", "Explorer"],
    "Honda" , ["Pilot", "Civic", "Accord"],
    "Toyota" , ["Corolla", "Camry", "Prius"] ];

console.log(vehicles[1][2]);   

var joke = "The chicken crossed the road";

var animals = ['dog', 'cat', 'chicken']

animals.push('llama');

console.log(animals)