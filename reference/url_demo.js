const url = require("url");

const myUrl = new URL(
  "http://gheelatelier.com:3000/contact.html?id=100&status=active"
);

console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
// serialized query
console.log(myUrl.search);
// params obj
console.log(myUrl.searchParams);
// add params
myUrl.searchParams.append("name", "Gowtham");
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
