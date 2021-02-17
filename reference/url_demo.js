const url = require('url');

const myUrl = new URL('https://stephaniskander.org/recipes.php?index=5');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);    

// Host Name - If port is present hostname does not get port
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Parrams Object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop Through Params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

console.log(myUrl.href);