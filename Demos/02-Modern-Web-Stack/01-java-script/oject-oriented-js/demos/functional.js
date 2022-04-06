//# sourceURL=functional.js

function impFunction() {
  var name = "Sandra";

  function greet() {
    name += ", how are you today?";
    console.log(name);
  }

  greet();
  greet();
}

function pureFunction() {
  function greet(name) {
    return `${name}, how are you today`;
  }

  console.log(greet("Sandra"));
  console.log(greet("Heinz"));
}

function manualCloning() {
  let p = {
    name: "Alex ",
    dogs: [
      { dogname: "Soi", race: "Whippet" },
      { dogname: "Giro", race: "Galgo Espanol" }
    ]
  };

  function iterationCopy(src) {
    let target = {};
    for (let prop in src) {
      if (src.hasOwnProperty(prop)) {
        target[prop] = src[prop];
      }
    }
    return target;
  }

  let copyPerson = iterationCopy(p);

  copyPerson.name = "Alexander";
  copyPerson.dogs[0].dogname = "Soitscherl";

  console.log("Original", p);
  console.log("Copied", copyPerson);
}

function useSpread() {
  let p = {
    name: "Alex ",
    dogs: [
      { dogname: "Soi", race: "Whippet" },
      { dogname: "Giro", race: "Galgo Espanol" }
    ]
  };

  let copyPerson = { ...p };

  copyPerson.name = "Alexander";
  copyPerson.dogs[0].dogname = "Soitscherl";

  console.log("Original", p);
  console.log("Copied", copyPerson);
}

function useObjectAssign() {
  let p = {
    name: "Alex ",
    dogs: [
      { dogname: "Soi", race: "Whippet" },
      { dogname: "Giro", race: "Galgo Espanol" }
    ]
  };

  let copyPerson = Object.assign({}, p);

  copyPerson.name = "Alexander";
  copyPerson.dogs[0].dogname = "Soitscherl";

  console.log("Original", p);
  console.log("Copied", copyPerson);
}

function betterManualClone() {
  let p = {
    name: "Alex ",
    dogs: [
      { dogname: "Soi", race: "Whippet" },
      { dogname: "Giro", race: "Galgo Espanol" }
    ]
  };

  function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
      var prop = initalObj[i];

      if (prop === obj) {
        continue;
      }

      if (typeof prop === "object") {
        if (prop.constructor === Array) {
          obj[i] = deepClone(prop, []);
        } else {
          obj[i] = Object.create(prop);
        }
      } else {
        obj[i] = prop;
      }
    }
    return obj;
  }

  let copyPerson = deepClone(p);

  copyPerson.name = "Alexander";
  copyPerson.dogs[0].dogname = "Soitscherl";

  console.log("Original", p);
  console.log("Copied", copyPerson);
}

function jsonSerialization() {
  let p = {
    name: "Alex ",
    dogs: [
      {
        dogname: "Soi",
        race: "Whippet",
        dob: new Date(),
        bark: () => console.log("barking")
      },
      { dogname: "Giro", race: "Galgo Espanol" }
    ]
  };

  let copyPerson = JSON.parse(JSON.stringify(p));

  copyPerson.name = "Alexander";
  copyPerson.dogs[0].dogname = "Soitscherl";

  console.log("Original", p);
  console.log("Copied", copyPerson);
}

function utilsCloning() {
  let p = {
    name: "Alex ",
    dogs: [
      {
        dogname: "Soi",
        race: "Whippet",
        dob: new Date(),
        bark: () => console.log("barking")
      },
      { dogname: "Giro", race: "Galgo Espanol" }
    ]
  };

  let copyPerson = _.cloneDeep(p);

  copyPerson.name = "Alexander";
  copyPerson.dogs[0].dogname = "Soitscherl";

  console.log("Original", p);
  console.log("Copied", copyPerson);
}

function avoidSideEffects() {
  var person = { name: "Alex", year: 2018 };

  function renameWithEffect(name, p) {
    p.name = name;
    return p;
  }

  var renamed = renameWithEffect("Alexander", person);

  console.log("Original", person);
  console.log("Renamed", renamed);

  person = { name: "Alex", year: 2018 };

  function renameNoEffect(name, p) {
    // return Object.assign({}, p, { name: name });
    return Object.assign({}, p, { name });
  }

  var renamed = renameNoEffect("Alexander", person);

  console.log("Original", person);
  console.log("Renamed", renamed);
}

function functionComposition() {
  const vehicles = [
    { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
    { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
    { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
    { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
    { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
    { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
    { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
    { make: "Ford", model: "F-150", type: "truck", price: 27110 },
    { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
    { make: "Ford", model: "Explorer", type: "suv", price: 31660 }
  ];

  const averageSUVPrice = vehicles
    .filter(v => v.type === "suv")
    .map(v => v.price)
    .reduce((sum, price, i, array) => sum + price / array.length, 0);

  console.log(averageSUVPrice); // 33399
}

function functionCompositionRamda() {
  const vehicles = [
    { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
    { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
    { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
    { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
    { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
    { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
    { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
    { make: "Ford", model: "F-150", type: "truck", price: 27110 },
    { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
    { make: "Ford", model: "Explorer", type: "suv", price: 31660 }
  ];

  // Using `pipe` executes the functions from top-to-bottom.
  const averageSUVPrice1 = R.pipe(
    R.filter(v => v.type === "suv"),
    R.map(v => v.price),
    R.mean
  )(vehicles);

  console.log(averageSUVPrice1); // 33399

  // Using `compose` executes the functions from bottom-to-top.
  const averageSUVPrice2 = R.compose(
    R.mean,
    R.map(v => v.price),
    R.filter(v => v.type === "suv")
  )(vehicles);

  console.log(averageSUVPrice2); // 33399
}
