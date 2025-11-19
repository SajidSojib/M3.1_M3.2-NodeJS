/**
 ** in ESM we have to use import
 ** we use as for type alias
 ** if we use export default then we can import as any name
 
 ** if we want to send things things from multiple file under a folder then have to use import for each file
 ** but we can also make it easier if we directly use import in a file where it has been already imported

 ** if send multiple thing in export default {} then we have to import it in a single variable. we cant destructure it like commonjs
 */

import {a} from './file_es1.mjs';
import {a as b} from './file_es2.mjs';

// import {sum} from './Fol_ESM/sum.mjs';
import minus from './Fol_ESM/subs.mjs';
import utils from "./Fol_ESM/index.mjs";

console.log(a);
console.log(b);

console.log(utils.sum(2,3));
console.log(minus(2,3));
console.log(utils.biyog(2,3));