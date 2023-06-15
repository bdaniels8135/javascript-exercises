const convertToCelsius = function(degreeF) {
  const degreeC = 5 * (degreeF - 32) / 9;
  return Math.round(degreeC * 10) / 10;
};

const convertToFahrenheit = function(degreeC) {
  const degreeF = 9 * degreeC / 5 + 32;
  return Math.round(degreeF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
