var my_module = require('./mathlib')();     //notice the extra invocation parenthesis!
console.log(my_module);

my_module.add(5,6);

my_module.multiply(5,6);

my_module.square(5);

my_module.random(1,20);
