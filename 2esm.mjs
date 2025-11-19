/**
 ** in ESM we have to use import
 ** we use as for type alias
 ** if we use export default then we can import as any name
 */
import {a} from './file_es1.mjs';
import {a as b} from './file_es2.mjs';

// import {sum} from './Fol_ESM/sum.mjs';
import minus from './Fol_ESM/subs.mjs';
import {sum, biyog} from './Fol_ESM/index.mjs';

console.log(a);
console.log(b);

console.log(sum(2,3));
console.log(minus(2,3));
console.log(biyog(2,3));