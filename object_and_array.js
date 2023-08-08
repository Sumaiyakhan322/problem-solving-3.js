//1------------remove duplicate array 
const names=["a", "b" ,"c","a","c","c","d","e","f","f","c"];
function removeDuplicate(array){
    let unique=[];
    for(let i=0;i<array.length;i++){
        let element=array[i];
        if(unique.includes(element)===false){
            unique.push(element);
        }
    }
    return unique;
}
let uniqueArray=removeDuplicate(names);
console.log(uniqueArray);



//2-------------print 1-50
//a. if number is divisible by 3 print foo
//b.if number is divisible by 5 print bar
//c.if number is divisible by 3 and 5 print foobar
for(let i=1;i<=50;i++){
    if(i%5===0 && i%3===0){
        console.log("Foobar");
    }
    else if(i%5==0){
        console.log("bar");
    }
    else if(i%3===0){
        console.log("Foo");
    }
    else{
        console.log(i);
    }
}
