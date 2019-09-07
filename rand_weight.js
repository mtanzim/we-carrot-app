var fs = require('fs');
var data = JSON.parse(fs.readFileSync('inputWeights.json', 'utf8'));

const makeRand = (min,max) => Math.floor(Math.random() * (max - min)) + min;
const makeData = (id,min,max) => data.map(a => ({...a, "waste_kg":makeRand(min,max), "id":id }))
// newData.forEach(a => console.log(a));

fs.writeFile('weights.json', JSON.stringify(makeData(0,1000,600)), 'utf8', () => console.log("Done"));