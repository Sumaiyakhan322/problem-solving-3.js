//1.......
//print 1-50
//a. if number is divisible by 3 print foo
//b.if number is divisible by 5 print bar
//c.if number is divisible by 3 and 5 print foobar

for (let i = 1; i <= 50; i++) {
  let p =
    i % 3 === 0 && i % 5 === 0
      ? "foobar"
      : i % 5 === 0
      ? "foo"
      : i % 3 === 0
      ? "bar"
      : i;
  console.log(p);
}
//with a function
function loop() {
  let array = [];
  for (let i = 1; i <= 50; i++) {
    let p =
      i % 3 == 0 && i % 5 === 0
        ? "Foobar"
        : i % 5 == 0
        ? "foo"
        : i % 3 == 0
        ? "Bar"
        : i;
    array.push(p);
  }
  return array;
}

console.log(loop());

//3--------nested if and else if

function matchFinder(string1, string2) {
return  typeof string1 !== "string" || typeof string2 !== "string"
    ? "Please enter two valid strings."
    : string1.includes(string2)
    ? true
    : false;
}
console.log(matchFinder("sumaiya","iya"));
function hello(a, b) {
  return a > b ? a : b;
}
console.log(hello(4, 6));
