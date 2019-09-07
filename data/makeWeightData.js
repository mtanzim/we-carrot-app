var fs = require("fs");
var inputData = JSON.parse(fs.readFileSync("inputWeights.json", "utf8"));

const makeRand = ([min, max]) => Math.floor(Math.random() * (max - min)) + min;

function makeData(inputData, profile) {
  const newData = inputData.map((item, idx) => {
    if (idx < profile.startEndIdx) {
      return {
        ...item,
        waste_kg: makeRand(profile.startRange),
        business_id: profile.id,
        id: idx,
        timestamp: new Date(item.timestamp)
      };
    } else if (idx > profile.startEndIdx && idx < profile.midEndIdx) {
      return {
        ...item,
        waste_kg: makeRand(profile.midRange),
        business_id: profile.id,
        id: idx,
        timestamp: new Date(item.timestamp)
      };
    } else {
      return {
        ...item,
        waste_kg: makeRand(profile.endRange),
        business_id: profile.id,
        id: idx,
        timestamp: new Date(item.timestamp)
      };
    }
  });
  return newData;
}

const profiles = [
  {
    id: 1,
    title: "good",
    startEndIdx: 20,
    midEndIdx: 67,
    startRange: [40, 50],
    midRange: [30, 50],
    endRange: [10, 20]
  },
  {
    id: 2,
    title: "med",
    startEndIdx: 20,
    midEndIdx: 67,
    startRange: [40, 50],
    midRange: [40, 50],
    endRange: [40, 50]
  },
  {
    id: 3,
    title: "bad",
    startEndIdx: 20,
    midEndIdx: 67,
    startRange: [40, 50],
    midRange: [60, 80],
    endRange: [85, 105]
  }
];

profiles.forEach(profile => {
  console.log(`Making ${profile.title}`);
  fs.writeFile(
    `${profile.id}_${profile.title}.json`,
    JSON.stringify(makeData(inputData, profile), null, 4),
    "utf8",
    () => console.log("Done")
  );
});
