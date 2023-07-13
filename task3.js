var personName = "Shafiq";
console.log(personName.toLocaleLowerCase()); // Output: shafiq
console.log(personName.toLocaleUpperCase()); // Output: SHAFIQ
console.log(personName.toLocaleUpperCase()); // Output: SHAFIQ (Alternative to touppercase())
console.log(personName.toLocaleLowerCase()); // Output: SHAFIQ (Alternative to tolowercase())
console.log(personName.replace(/\b\w/g, function (c) { return c.toLocaleLowerCase(); })); // Output: minam
