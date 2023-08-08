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

//3---------Use add and multiplication to calculate wood requirements
// perChair=3cft
//perTable=5cft
//perBed=10cft
function woodRequire(chair,table,bed){
    const perChair=3;
    const perTable=5;
    const perBed=10;
    const total=perChair*chair+perTable*table+perBed*bed;
    return total;
}
let myRequire=woodRequire(1,1,1);
console.log(myRequire);

//4---------- Find the cheapest phone from an array of phone objects
const phones=[
    {name:"Iphone",price:90000,color:"Black"},
    {name:"Samsung",price:5000,color:"Black"},
    {name:"Poko",price:20000,color:"Black"},
    {name:"Oppo",price:10000,color:"Black"},
]
function cheapestPrice(phone){
    cheapest=phone[0];
    for(i=0;i<phone.length;i++){
        let element=phone[i];
        if(element.price<cheapest.price){
           cheapest=element;
        }
    }
    return cheapest;
}
const myPhone=cheapestPrice(phones);
console.log(myPhone);

//5--------Calculate the total cost of the products in a shopping cart

const shopping=[
    {name:"D",price:900,color:"Black" ,quantity:7},
    {name:"C",price:500,color:"Black" ,quantity:4},
    {name:"B",price:200,color:"Black"  ,quantity:2},
    {name:"A",price:100,color:"Black"  ,quantity:2},
]
function totalCost(array){
     total=0;
    for(let i=0;i<array.length;i++){
        element=array[i];
         total=total+(element.price*element.quantity)
    }
    return total;
}
const mytotalCost=totalCost(shopping);
console.log(mytotalCost);

//6--------Multi-layer discount price calculation
//a.If ticket is less than 100 pay:100
//b. If ticket are (100-200)--1st 100 are 100 tk and rest are 90tk
//c.more than 200-----100-->100tk ,101-200--->90tk .more than 200-->70tk
