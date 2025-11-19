/**
 * * in CommonJS we just need to add file name without .js
 * * module.exports here module is normally a object
 * * if we want to same many things from a single file we can use object but then we have to use name alias
 * 
 * * if we want to send things things from multiple file under a folder then have to use require for each file
 * * but we can also make it easier if we directly use require in its folder. it autometicly targets index.js
 * * but we have firstly send them from index.js too
 */


const {a} = require('./file1');
const {a:b} = require('./file2');

// const {sum} = require('./Fol_common/sum');
// const {subs} = require('./Fol_common/subs');
const {sum,subs} = require('./Fol_common');

console.log(a,b);
console.log(sum(2,3));
console.log(subs(2,3));