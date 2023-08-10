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

//-------nested if and else if

///3-------find if string2 includes in string1

function matchFinder(string1, string2) {
  return typeof string1 !== "string" || typeof string2 !== "string"
    ? "Please enter two valid strings."
    : string1.includes(string2)
    ? true
    : false;
}

//4--------print a or b
console.log(matchFinder("sumaiya", "iya"));
function hello(a, b) {
  return a > b ? a : b;
}
console.log(hello(4, 6));

//5---------if [3,4] =[4,3] ,[-9,9]=invalid ,[1,1]=equal
// function sortMaker(arr) {
//     if(!Array.isArray(arr)){
//         return "Please Enter Required Array.";
//     }
//     else if(arr.length!==2){
//         return "Please Enter An Array of Index 2.";
//     }
//     else{
//         let a=arr[0];
//         let b=arr[1];
//         if(typeof a!=='number' || typeof b!=='number'){
//             return "Please enter two numbers in the array.";
//         }
//         else if(a<0 || b<0){
//             return "Invalid Input";
//         }
//         else if(a===b){
//             return "equal";
//         }
//         else{
//             if(a<b){
//                const temp=a;
//                a=b;
//                b=temp;
//                arr=[a,b];
//                return arr;
//             }
//         else{
//             return arr;
//             }
//         }
//     }
// }

function sortMaker(arr) {
    let temp=arr[0];
    arr[0]=arr[1];
    arr[1]=temp;
   let arr2=[arr[0],arr[1]];
  return (!Array.isArray(arr))
    ? "Please Enter Required Array."
    : arr.length !== 2
    ? "Please enter array of index 2"
    : typeof arr[0] !== "number" || typeof arr[1] !== "number"
    ? "Enter two numbers"
    : arr[0] < 0 || arr[1] < 0
    ? "Invalid"
    : arr[0] === arr[1]
    ? "Equal"
    : arr[0]<arr[1]? arr2:arr;
}
console.log(sortMaker([4,5]));
