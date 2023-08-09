/*1

তোমাকে এমন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। function টির নাম হবেঃ isInteger()। আউটপুট হিসেবে একটি boolean রিটার্ন করবেঃ

সংখ্যাটি integer হলে true রিটার্ন করবে। 
অন্যথায় false রিটার্ন করবে।

*/
function isInteger(number){
    if(typeof number !== "number"){
        return "please provide a number";
    }
    else{
        if(number%1===0){
            return true;
        }
        else{
            return false;
        }
    }

}
console.log(isInteger(3.5));

/*2

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে 
*/
 function isJavaScriptFile(filename){
        if(typeof filename !== "string"){
          return "please provide me a valid file name (string)."
       }
    else{
     if(filename.toLowerCase().endsWith(".js") === true){
       return true;
     }
     else{
     return false;
     }
    }
}  
          
/*3
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
Sample Input & Output
Input: 5
Output: 7.5

*/
function mindGame(number){
    if(typeof number !=='number'){
        return "enter a positive number";
    }
    else if(number<0){
        return "Enter a positive number"
    }
    else{
        const result=(((number*3)+10)/2)-5;
        return number;
    }
}

/*4
তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  
এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
Input : 6
Output: -1
Input: -15
Output: -22
Input: 15
Output: 30

*/
function isLGSeven(x){
    if(typeof x !== "number"){
        return "please provide me a number";
    }else{
        const differ = x - 7;
        if(differ < 7){
            return differ;
        }else{
            return x*2;
        }
    }
}

/*5
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3
*/
function findingBadData(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of number"
    }else{
        let badData = 0;
        for(let i = 0; i<arr.length; i++){
             if(typeof arr[i] !== "number"){
                 return "please provide me an array of number"
            }else{
                if(arr[i] < 0){
                    badData++;
                }
           }
        }
        return badData;
    }
}
console.log(findingBadData([ 2, -5, -7, -13 ]));

/*6
Problem 5: Convert your gems into diamond
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303

*/
function gemsToDiamond(x,y,z){
    if(typeof x !== "number" || typeof y !== "number" || typeof z !== "number"){
        return "please provide me valid number input"
    }else if(x < 0 || y < 0 || z < 0){
        return "please provide me all positive numbers"
    }else if(x%1 !== 0 || y%1 !== 0 || z%1 !== 0){
        return "please provide me all integer number"
    }
    else{

        const total = (x * 21) + (y * 32) + (z * 43);

        if(total > 2000){
            return total - 2000;
        }else{
            return total;
        }

    }

}
console.log(gemsToDiamond(100, 5, 1));

// 7function name printDetails(). you will be provided an object. you have to use the properties of the object and make a meaning full sentence. if there are any property missing you have to print there (nai);

/*
const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}
Amar nam mehedy, amar boyos 26, amar email abc@gmail.com, amar bou nai. 
*/


function printDetails(person){
    if(typeof person !== "object"){
        return "please provide me a valid object"
    }else{
        const name = person.name || "nai";
        const age = person.age || "nai";
        const email = person.email || "nai";
       return "amar nam "+name+". amar boyos "+age+". amar email "+email;
    }

}

const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}

console.log(printDetails(obj));


/*
8:
আপনার কাছে একটি জাভাস্ক্রিপ্ট ফাংশন রয়েছে যার নাম হলো isValidPhotoName(photoName, imageExtensions)। এই ফাংশনটি দুটি প্যারামিটার গ্রহণ করে: photoName, যা একটি ছবির নাম প্রদর্শন করে, এবং imageExtensions Array, যা .jpg, .png, ইত্যাদি ছবির এক্সটেনশন গুলি ধারণ করে।
আপনার কাজ হলো isValidPhotoName ফাংশনটি সম্পূর্ণ করা যাতে এই ফাংশনের মাধ্যমে পরীক্ষা করা যায় আপনি দেওয়া প্যারামিটার photoName সঠিক ছবির নাম কিনা তা। এই ফাংশনের কাজ হলো true রিটার্ন করা যদি photoName একটি বৈধ ছবির নামের শেষে বিদ্যমান ছবির এক্সটেনশন গুলির মধ্যে যেকোনটি শেষ হয়; অন্যথায়, ফাংশনটি false রিটার্ন করবে।

*/

// .jpg .jpeg .png .gif .ico .JPEG

function isValidPhotoName(photoName, imageExtensions){
    if(typeof photoName !== "string" || !Array.isArray(imageExtensions)){
        return "please provide valid inputs"
    }else{
        for(let item of imageExtensions){
           if(photoName.toLowerCase().endsWith(item.toLowerCase())){
                return true;
           }
        }
        return false;
    }

}


const photo = "image.svg";
const extensions = [".jpg",".JPEG",".png",".gif",".ico"];


//9  count consonet ,vowel and space in a string
function findVowel(s){

    if(typeof s !== "string"){
        return "please provide me a string"
    }

    let vowel = 0;
    let consonent = 0;
    let space = 0;
    let vowelArray = []

    for(let i=0; i<s.length; i++){
        // a e i o u 
        let char = s[i].toLowerCase();

        if(char === 'a' || char === 'e' || char === 'i' || char === "o" || char === "u"){
            vowel++;
            vowelArray.push(char)
        }else if(char !== " "){
            consonent++
        }else{
            space++
        }
    }

    const obj ={
        vowelCount: vowel,
        consonentCount:consonent,
        spaceCount:space,
        vowelArray: vowelArray
    }

    return obj;

}


const sentence = "the Name Of Our country is bangladesh"
console.log(findVowel(sentence));

//10.sum of array
function sumOfArray(arr){

        let sum = 0;
    
         for(let i=0; i<arr.length; i++){
             sum = sum + arr[i]
         }
         return sum
     }
    
     const nums = [1,2,3,4,5];
     const total = sumOfArray(nums)
     console.log(total);


//12.sum of odd numbers
     
function sumOfOdds(arr){
         let sum = 0;
    
     for(let item of arr){
     if(item%2 !== 0){
           sum = sum + item
         }
      }
     return sum;
    
   }
    
     const numbers = [1,2,3,4,5,6,7,8,9];
    
    const total2 = sumOfOdds(numbers)
     console.log(total2);

     //13. 2nd largest numbver in array
     function secondLargest(arr) {
        var largerest = arr[0];
        var largest2nd = 0;
        
        for(var i=0; i<arr.length; i++) {
          if(arr[i] > largerest) {
            largest2nd = largerest;
           largerest = arr[i];
          }
          else if(arr[i] > largest2nd && arr[i] !=largerest) {
                  largest2nd = arr[i];}
          
        }
      
        return largest2nd;
      }
      console.log(secondLargest([1,678,5,10]));