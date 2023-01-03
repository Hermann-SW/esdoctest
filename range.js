/**
 *  Python range()
 *  @generator
 *  @param {number} start
 *  @param {number} end
 *  @yields {number}
 */
function* range(start, end) {
  for (; start < end; ++start) { yield start; }
}

module.exports = {
  range: range
};


/*
> R = require("./range")
{ range: [GeneratorFunction: range] }
> for(i of R.range(3,7)) {
... console.log(i);
... }
3
4
5
6
undefined
> 
*/
