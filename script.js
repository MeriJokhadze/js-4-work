"use strict"

// 1.  მოცემულია მასივი:
let languages = ['html', 'css', 'javascript', 'python', 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები 
//რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let result = languages.filter(function(languages){
    return languages.length > 3 
});
console.log(result);


const results = languages.filter(languages => languages.length > 3);
console.log(results);





// 2. შეამოწმეთ მოცელუმ მასივში 
let arr = [-1, -2, -3, 4]; 
//არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით.


let arrResult = arr.some(arr => arr => 0);
console.log(arrResult);

// 3. Მოცემულია მასივი:
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let wordsNew = words.filter(words => words.includes("M") || words.includes("m"));
console.log(wordsNew);


// 4. შექმენით htmlში დივი, მიანიჭეთ id და ჯსდან ამ დივში დაამატეთ შემდეგი html სტრუქტურა:
// <div class=“wraper”> 
//  <img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”>
// <h2 class=“title”> image title </h2>
// </div>

// document.getElementById("newDivId").classList.add("wraper");
// let imgElement = document.createElement("img");
// imgElement.setAttribute("src", "https://html.com/wp-content/uploads/flamingo.webp" );
// imgElement.setAttribute("alt", "image");
// document.getElementById("newDivId").appendChild(imgElement);
// let imgTitle = document.createElement("h2");
// imgTitle.classList.add("title");
// imgTitle.textContent = "image title";
// document.getElementById("newDivId").appendChild(imgTitle);



// 5. მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი.
// ( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ ეს სტრინგი გადაიყავნოთ რიცხვში)

let numberString = "12345";

let sum = numberString.split("").map(Number);
let sumLast = sum.reduce((x,y) => x+y, 0);
console.log(sumLast);



// 6. მოცემულია მასივი, შემდეგი მნიშვნელობებით -let array = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];
// გამოიტანეთ მარტო ციფრები;
let array = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];

let newResult = array.filter(Number);
console.log(newResult);


// 7. მოცემულია მასიცი:


// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: 
//თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, 
//მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.
let array2 = [14, 150, 'css', null, 'javascript', 25];
let newArray2 = array2.map(item =>
     { if (typeof item === 'number'){
    return Math. sqrt(item);
 }else if(typeof item === 'string'){
    return  item.toUpperCase();
 } else{
     return item;
 } });

console.log(newArray2);



// 8. მოცემულია სტრინგი - ‘javascript’, მიიღეთ შემოტრიალებული ვარიანტი მეთოდების გარეშე ( for loop ით);


let word = 'javascript';

for (let i = word.length-1; i >= 0; i--) {
    console.log(word[i]);
}  // amis logika ar mesmis 






// 9. მოცემულია სტრინგი: let info= ‘Good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუელებით.

let info = "good day";

let newInfo = info.slice("5","8");
console.log(newInfo);


// 10. daweრეთ ფუნქცია, რომელიც პარამეტრსდ იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

let logString = string => string.length;

console.log(logString("mery"));


// 11.  Prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: 
//საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში.
// როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. 
//თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.


//  ნოუდ ჯიეზით ვერ ვამოწმებ ფრომფთ ფუნქციას მგონი 

// let question = prompt("საქართველოს დედაქალაქი? ");
// let correct = "tbilisi";

// let resultt = function (question, correct){
//     if (question.toLowerCase() === "tbilisi"){
//         return correct;
//     }else{
//         return false;
//     }
// }

// console.log(resultt(question,correct));


// 12. მოცემულია: 
//დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ indexof მეთოდის საშუალებით არის თუ არა
// ამ ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს.

let linko = "https://google.com";

let linkChecker = function(linko){
    if (linko.indexOf("https://") !== -1) {
        return console.log("კი მოიცავს");
}else {
    return console.log("არ მოიცავს ");
}
}

linkChecker(linko);





// 13. მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, 
//შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  splice მეთოდის საშუალებით 
//წაშალეთ ბოლოს წინა მნიშვნელობა და მავის მავივრად ჩასვით “strawberry”. 

let fruits = ["ვაშლი", "მსხალი", "ატამი", "ქლიავი"]; 

fruits.splice(fruits.length-1, 1, "კივი");

console.log(fruits);




