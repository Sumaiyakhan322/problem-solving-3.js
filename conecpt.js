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