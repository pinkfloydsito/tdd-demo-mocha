const check = function(value) {
  if(value % 400 == 0) return true;
  if(value % 100 == 0 && value % 4 == 0) return false;
  if(value % 4 == 0) return true;

   return false;
};


exports.check = check;

