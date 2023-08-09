//1---------find similar word form a array of objects
function matchProducts(product,search){
    let matched=[];
    for(const x of product){
     if(x.name.toLowerCase().includes(search.toLowerCase())){
       matched.push(x);
     }
}
    return matched;
}
let product=[
    {name:"sumaiya khan",age:60,height:160},
    {name:"Mamun khan",age:60,height:160},
    {name:"Jayed Khan",age:60,height:160},
    {name:"Salma Khan",age:60,height:160},
    {name:"Sanjida Khan",age:60,height:160},
    {name:"Aljubayer Nanid",age:60,height:160},
]
console.log(matchProducts(product,"Khan"));

   