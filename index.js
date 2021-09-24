/* divisible values to be considered inside our function */
const DIVISIBLE_400 = 400;
const DIVISIBLE_100 = 100;
const DIVISIBLE_4 = 4;

/*@param [value] int */
const check = function(value) {
  if(value % DIVISIBLE_400 == 0) return true;
  if(value % DIVISIBLE_100 == 0 && value % DIVISIBLE_4 == 0) return false;

  return (value % DIVISIBLE_4 == 0);
};


exports.check = check;

