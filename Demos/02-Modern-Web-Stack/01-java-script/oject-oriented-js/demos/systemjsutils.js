var util = {};

exports.Logger = {};
exports.Calculator = {};

function doLog(msg) {
  console.log("Logger logged ", msg);
}

module.exports.Logger.log = doLog;
module.exports.Calculator.add = (a, b) => a + b;
