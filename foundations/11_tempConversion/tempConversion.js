const convertToCelsius = function(far) {
  let unrounded = (far - 32) / (9/5) 
  if(unrounded % 1 == 0 || unrounded % 0.1 == 0){
    return unrounded;
  } else {
    return Math.round(unrounded * 10) / 10
  }
};

const convertToFahrenheit = function(cel) {
  let unrounded = cel * 1.8 + 32
  if(unrounded % 1 == 0 || unrounded % 0.1 == 0){
    return unrounded;
  } else {
    return Math.round(unrounded * 10) / 10
  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
