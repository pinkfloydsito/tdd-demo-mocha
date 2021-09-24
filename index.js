const check = function(value) {
  return value % 4 == 0 || value % 400 === 0;
};


exports.check = check;

