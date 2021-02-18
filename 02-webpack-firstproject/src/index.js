/*
index.js: webpack entry

1. use wepack command:
$ webpack ./src/index.js -o ./build --mode=development

production environment
$ webpack ./src/index.js -o ./build --mode=production

2. conclusion:
- webpack support .js/json by default, not other css/image/.. by default.
- ES6 import syntax is translated to code which run by browser.
- mode development vs production the output build file size  development > production.
*/

// webpack compile error
// import './index.css';

import data from './data.json';
console.log(data);

function add(x, y) {
  return x + y;
}

console.log(add(1,2));
